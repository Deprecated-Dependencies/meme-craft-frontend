import React from 'react';
import { Card, Col } from 'react-bootstrap';
import deprecated from './deprecated.png'
import MemeModal from './MemeModal';

class Meme extends React.Component {
  constructor(props){
    super(props);
    this.state = {showModal: false}
  }

  clickHandler = (event) => {
    this.setState({showModal: true})
  } 

  handleModalClose = (event) => this.setState({showModal: false})

  render() {
    return (
    <Col>  
      <Card style={{width: "18rem"}}>
        <Card.Img src={deprecated} onClick={this.clickHandler}/>
        <Card.Body>
          {this.props.memeData}
        </Card.Body>
        <MemeModal 
          show={this.state.showModal}
          handleModalClose={this.handleModalClose}
        />
      </Card>
    </Col>
    );
  }
}

export default Meme;
