import { Button } from 'react-bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
// import MemeEdit from './MemeEdit';


class MemeDisplay extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //    show:this.props.show || false
  //   }
  // }
  render() {
    return( 
      <Container className='w-100'>
        <Image 
          className='w-100'
          src={this.props.url} 
          alt={this.props.name}
        />
        {/* { */}
         {/* this.state.show ?  */}
        <Button variant="primary">Edit</Button>
      {/* } */}
      </Container>
    );
  }
}

export default MemeDisplay;
