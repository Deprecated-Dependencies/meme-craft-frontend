import React from "react";
// import { Container, Row } from "react-bootstrap";
import Meme from "./Meme";
import Masonry from 'react-masonry-css';

class ImageGallery extends React.Component {

  componentDidMount() {
    this.props.getMemes();
  }

  render() {
    let memes = this.props.memes.map((meme) => (
      <Meme key={meme.id} url={meme.url} name={meme.name} template={meme} />
    ));

    return (
      <>
        {/* <h3>Gallery</h3>
        <Container>
          <Row xs={1} sm={2} md={3}>
            {memes}
          </Row>
        </Container> */}

        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {memes}
        </Masonry>
      </>
    );
  }
}

export default ImageGallery;
