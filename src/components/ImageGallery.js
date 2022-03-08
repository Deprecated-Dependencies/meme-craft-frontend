import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import deprecated from './deprecated.png'

class ImageGallery extends React.Component {
  render() {
    let cardCount = 10;
    let cards = [];
    for (let i = 0; i < cardCount; i++){
      cards.push(
        (
        <Col>  
          <Card style={{width: "18rem"}}>
            <Card.Img src={deprecated}/>
            <Card.Body>
              {i}
            </Card.Body>
          </Card>
        </Col>
        )
      )
    }

    return (
    <>
      <h3>Gallery</h3>
      <Container>
        <Row xs={1} sm={2} md={3}> 
          {cards}
        </Row>
      </Container>
    </>
    );
  }
}

export default ImageGallery;
