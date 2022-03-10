import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'


class App extends React.Component {
  printToken = async () => {
    if(this.props.auth0.isAuthenticated){
      // Get Token
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      // console.log(jwt);

      // All we need to do for lab is console.log the jwt
      // Sending the token from the front-end is not required.
      try {
        // As per axios docs we can send an config object to make our call as well
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/token',
          headers: {"Authorization": `Bearer ${jwt}`}
        }
        let responseData = await axios(config);
        console.log(responseData.data);
      } catch (error) {
        console.error(error)
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
