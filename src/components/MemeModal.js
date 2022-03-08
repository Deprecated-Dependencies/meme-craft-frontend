import React from 'react';
import { Modal } from 'react-bootstrap';
import MemeEdit from './MemeEdit';
import MemeDisplay from './MemeDisplay';
import SocialLinks from './SocialLinks';


class MemeModal extends React.Component {
  render() {
    return (
    <Modal show={this.props.show} onHide={this.props.handleModalClose}>
      <Modal.Header closeButton>
        <h3>Modal</h3>
      </Modal.Header>
      <Modal.Body>
        <SocialLinks />
        <MemeDisplay 
        url={this.props.url} 
        name={this.props.name}
        />
        <MemeEdit/>
      </Modal.Body>
    </Modal>
    );
  }
}

export default MemeModal;
