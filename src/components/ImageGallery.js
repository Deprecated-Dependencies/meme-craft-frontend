import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Meme from './Meme';

class ImageGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      memes: []
    }
  }

getMemes = async () => {
  try{
    let results = await axios(`${process.env.REACT_APP_SERVER_URL}/memes`);
    this.setState({
      memes: results.data.data.memes
    })
  }catch(error){
    console.log('Error getting memes', error.message)
  }
  console.log(this.state.memes);
}

componentDidMount(){
  this.getMemes();
}

  render() {
    // let cardCount = 10;
    // let cards = [];
    //map over array of meme data from the API, create a new card for each object, render url
    let memes = this.state.memes.map(meme => (
      <Meme key={meme.id} url={meme.url} name={meme.name} />
    ))
    // for (let i = 0; i < cardCount; i++){
    //   cards.push(<Meme key={i} memeData={i} />);
    // }
    return (
    <>
      <h3>Gallery</h3>
      <Container>
        <Row xs={1} sm={2} md={3}> 
          {memes}
        </Row>
      </Container>
    </>
    );
  }
}

export default ImageGallery;
