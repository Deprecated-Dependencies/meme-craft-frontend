import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: []
    }
  }

  getMemes = async () => {
    try {
      let results = await axios(`${process.env.REACT_APP_SERVER_URL}/memes`);
      this.setState({
        memes: results.data.data.memes
      })
    } catch (error) {
      console.log('Error getting memes ', error.message || 'Unknown error')
    }
  }


  render() {
    return (
      <main>
        <ImageGallery
          getMemes={this.getMemes}
          memes={this.state.memes}
        />
      </main>
    );
  }
}

export default Body;
