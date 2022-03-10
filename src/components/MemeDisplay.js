import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';



class MemeDisplay extends React.Component {

  render() {
    let url = this.props.currentMeme ? 
      this.props.currentMeme.url : 
      this.props.url
    return( 
      <Container className='w-100'>
        <Image 
          className='w-100'
          src={url} 
          alt={this.props.name}
        />
      </Container>
    );
  }
}

export default MemeDisplay;
