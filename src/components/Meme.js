import React from 'react';
import { Card, Col } from 'react-bootstrap';
import MemeModal from './MemeModal';

class Meme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false }
  }

  clickHandler = (event) => {
    this.setState({ showModal: true })
  }

  handleModalClose = (event) => this.setState({ showModal: false })

  render() {
    console.log(this.props.template);
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={this.props.url} onClick={this.clickHandler} />
          <Card.Body>
            {this.props.name}
          </Card.Body>
          <MemeModal
            show={this.state.showModal}
            handleModalClose={this.handleModalClose}
            url={this.props.url}
            name={this.props.name}
            template={this.props.template}
          />
        </Card>
      </Col>
    );
  }
}

export default Meme;
