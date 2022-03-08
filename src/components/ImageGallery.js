import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Meme from './Meme';

class ImageGallery extends React.Component {
  render() {
    let cardCount = 10;
    let cards = [];
    for (let i = 0; i < cardCount; i++){
      cards.push(<Meme key={i} memeData={i} />);
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
