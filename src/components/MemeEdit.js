import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MemeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: this.props.currentMeme || ''
    }
  }

  sendMemePUT = async (meme, boxes) => {
    try{
      let id = this.props.currentMeme._id;
      let url = `${process.env.REACT_APP_SERVER_URL}/memeDB/${id}`;
      let memeToUpdate = { 
        ...this.state.currentMeme,
        url: meme.url,
        page_url: meme.page_url,
        boxes: boxes,
      };
      let storedMeme = await axios.put(url, memeToUpdate);

      this.props.handleUpdateCurrentMeme(storedMeme.data)
    } catch (error) {
      console.log(error);
    }
  };

  saveToDb = async (meme, boxes) => {
    try {
      let newMeme = {
        userName: this.props.auth0.user.email,
        url: meme.url,
        page_url: meme.page_url,
        boxes: boxes,
        template: this.props.template
      }
      let url = `${process.env.REACT_APP_SERVER_URL}/memeDB`;
      let storedMeme = await axios.post(url, newMeme);

      this.props.handleUpdateCurrentMeme(storedMeme.data);
    } catch (error) {
      console.log(error);
    }
  };

  sendMemeRequest = async (requestBody) => {
    try {
      let meme = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_URL}/memes`,
        data: requestBody,
        header: { 'Content-type': 'application/json' }
      });

      if (this.state.currentMeme === '') {
        this.saveToDb(meme.data.data, requestBody.boxes);
      } else {
        this.sendMemePUT(meme.data.data, requestBody.boxes)
      }
      this.setState({
        currentMeme: meme.data.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSaveMeme = (event) => {
    event.preventDefault();
    let boxes = [];

    for (let i = 1; i <= this.props.template.box_count; i++) {
      boxes.push(
        { text: event.target[`num${i}box`].value }
      )
    }
    let requestObj = {
      template_id: this.props.template.id,
      boxes: boxes
    }
    this.sendMemeRequest(requestObj)
  };

  handleDeleteMeme = async (event, id) => {
    try{
      let url = `${process.env.REACT_APP_SERVER_URL}/memeDB/${id}`;

      await axios.delete(url);
      this.props.refreshGallery();
      this.props.handleModalClose(event);
    }catch(error){
      console.log(error.message);
    } 
  };

  render() {
    let boxCount = this.props.template.box_count;
    let formControls = [];

    for (let i = 1; i <= boxCount; i++) {
      formControls.push((
        <Form.Group key={i} controlId={`num${i}box`}>
          <Form.Label>Text Box {i}</Form.Label>
          <Form.Control 
            type={`${i}box`} 
            defaultValue={this.state.currentMeme?.boxes ? this.state.currentMeme.boxes[i-1].text : ''}
          />
        </Form.Group>
      ));
    }

    return (
      <Form onSubmit={this.handleSaveMeme} className="float-end">
        {formControls}
        <Button className="mt-1" type='submit'>Save</Button>
        {
          this.state.currentMeme &&
          <Button onClick={(event) => this.handleDeleteMeme(event, this.state.currentMeme._id)} className='mt-1 btn btn-danger float-end'>Delete</Button>
        }
      </Form>
    );
  }
}

export default withAuth0(MemeEdit);
