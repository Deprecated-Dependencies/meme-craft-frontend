import React from 'react';
import { Card } from 'react-bootstrap';
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
    return (
      <div>
        <Card>
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
      </div>
    );
  }
}

export default Meme;
