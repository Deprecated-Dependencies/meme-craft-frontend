import { Button } from 'bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
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
      <Container>
        <Image src={this.props.url} alt={this.props.name}/>
        {/* { */}
         {/* this.state.show ?  */}
        <Button variant="primary">Edit</Button>
      {/* } */}
      </Container>
    );
  }
}

export default MemeDisplay;
