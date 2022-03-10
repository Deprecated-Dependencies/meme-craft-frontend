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
      currentMeme: '',
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
      <Modal show={this.props.show} onHide={this.props.handleModalClose}>
        <Modal.Header closeButton>
          <h3>Modal</h3>
        </Modal.Header>
        <Modal.Body>
          {
            this.state.currentMeme &&
            <SocialLinks
              url={this.state.currentMeme.url}
              page_url={this.state.currentMeme.page_url}
            />
          }
          <MemeDisplay
            url={this.props.url}
            name={this.props.name}
            template={this.state.template}
            currentMeme={this.state.currentMeme}
          />
          {this.state.displayEditForm ?
            <MemeEdit
              template={this.state.template}
              handleUpdateCurrentMeme={this.handleUpdateCurrentMeme}
            /> : <Button onClick={() => this.setState({ displayEditForm: true })}>Edit</Button>

          }
        </Modal.Body>
      </Modal>
    );
  }
}

export default MemeModal;
