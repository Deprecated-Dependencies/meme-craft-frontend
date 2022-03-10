import React from 'react';
import axios from 'axios';
import AuthProfile from './AuthProfile';
import ImageGallery from './ImageGallery';
import { withAuth0 } from '@auth0/auth0-react'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: []
    }
  }
  //Template for user memes needs to exist via the same path as the api template!
  getUserMemes = async () => {
    try {
      let userMemes = await axios.get(`${process.env.REACT_APP_SERVER_URL}/memeDB?userName=${this.props.auth0.user.email}`)
      this.setState({
        memes: userMemes.data
      })
      console.log(userMemes);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.props.auth0.user);
    return (
      <>

        <h3>Profile</h3>
        <AuthProfile />
        {
          this.props.auth0.isAuthenticated &&
          <ImageGallery
            getMemes={this.getUserMemes}
            memes={this.state.memes}
          />
        }
      </>
    );
  }
}

export default withAuth0(Profile);
