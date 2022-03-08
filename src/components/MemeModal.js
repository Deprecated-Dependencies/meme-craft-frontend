import React from 'react';
import { Modal } from 'react-bootstrap';


class MemeModal extends React.Component {
  render() {
    return (
    <Modal show={this.props.show} onHide={this.props.handleModalClose}>
      <Modal.Header closeButton>
        <h3>Modal</h3>
      </Modal.Header>
      <Modal.Body>
        <img
          src={this.props.url}
          alt={this.props.name}
          className='w-100'
        />
      </Modal.Body>
    </Modal>
    );
  }
}

export default MemeModal;
