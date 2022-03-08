import React from 'react';
import { Card, Col } from 'react-bootstrap';
import deprecated from './deprecated.png'

class Meme extends React.Component {
  render() {
    return (
    <Col>  
      <Card style={{width: "18rem"}}>
        <Card.Img src={deprecated}/>
        <Card.Body>
          {this.props.memeData}
        </Card.Body>
      </Card>
    </Col>
    );
  }
}

export default Meme;
