import React from 'react';
import { Modal } from 'react-bootstrap';
import MemeEdit from './MemeEdit';
import MemeDisplay from './MemeDisplay';
import SocialLinks from './SocialLinks';
import Button from 'react-bootstrap/Button';


class MemeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: this.props.userMeme || '',
      template: this.props.template,
      displayEditForm: false
    };
  }

  handleUpdateCurrentMeme = (currentMeme) => {
    this.setState({
      currentMeme: currentMeme,
      displayEditForm: false
    });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleModalClose} contentClassName='w-auto'>
        <Modal.Header closeButton>{this.props.name}</Modal.Header>

        <Modal.Body className="d-flex justify-content-evenly align-items-start">
          <MemeDisplay
            url={this.props.url}
            name={this.props.name}
            template={this.state.template}
            currentMeme={this.state.currentMeme}
          />
          {
            this.state.currentMeme &&
            <SocialLinks
              url={this.state.currentMeme.url}
              page_url={this.state.currentMeme.page_url}
            />
          }
          {this.state.displayEditForm ?
            <MemeEdit
              template={this.state.template}
              currentMeme={this.state.currentMeme}
              handleUpdateCurrentMeme={this.handleUpdateCurrentMeme}
              refreshGallery={this.props.refreshGallery}
              handleModalClose={this.props.handleModalClose}
            /> :
            <Button onClick={() => this.setState({ displayEditForm: true })} >Edit</Button>
          }
        </Modal.Body>
      </Modal>
    );
  }
}

export default MemeModal;
