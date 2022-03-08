import React from 'react';
import { Container, Image } from 'react-bootstrap';


class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: this.props.image
    }
  }

  handleMouseOut = (event) => {
    console.log(event.target.src);
    this.setState({ imgSource: this.props.image })
  }

  handleMouseOver = (event) => {
    console.log(event.target.src);
    this.setState({ imgSource: this.props.altImage })
  }

  render() {
    console.log(this.state.imgSource)
    return (
      <Container>
        <h3>{this.props.name}</h3>
        <Image
          roundedCircle={true}
          src={this.state.imgSource}
          alt={this.props.name}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          className='d-inline-block w-25 p-1'
        />
        <p className='d-inline-block w-75 p-1'>{this.props.bio}</p>
      </Container>
    );
  }
}

export default Author;
