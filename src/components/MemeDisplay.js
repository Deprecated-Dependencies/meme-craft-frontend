import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';



class MemeDisplay extends React.Component {

  render() {
    let url = this.props.currentMeme ?
      this.props.currentMeme.url :
      this.props.url
    return (
      <>
        <Image
          style={{ maxHeight: "75vh", maxWidth: "60vw" }}
          src={url}
          alt={this.props.name}
        />
      </>
    );
  }
}

export default MemeDisplay;
