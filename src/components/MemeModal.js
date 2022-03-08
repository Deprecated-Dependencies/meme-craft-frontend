import React from 'react';
import { Modal } from 'react-bootstrap';
import deprecated from './deprecated.png'


class MemeModal extends React.Component {
  render() {
    return (
    <Modal show={this.props.show} onHide={this.props.handleModalClose}>
      <Modal.Header closeButton>
        <h3>Modal</h3>
      </Modal.Header>
      <Modal.Body>
        <img
          src={deprecated}
          alt="deprecated"
          className='w-100'
        />
      </Modal.Body>
    </Modal>
    );
  }
}

export default MemeModal;
