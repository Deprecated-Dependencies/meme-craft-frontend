import { Button } from 'react-bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';



class MemeDisplay extends React.Component {

  render() {
    let url = this.props.currentMeme ? this.props.currentMeme.url : this.props.url
    console.log(this.props.currentMeme);
    return( 
      <Container className='w-100'>
        <Image 
          className='w-100'
          src={url} 
          alt={this.props.name}
        />
        {
          this.props.currentMeme &&
        <Button variant="primary">Edit</Button> 
        }
      </Container>
    );
  }
}

export default MemeDisplay;
