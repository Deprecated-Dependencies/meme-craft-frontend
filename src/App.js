import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'

class App extends React.Component {
  printToken = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      try {
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/token',
          headers: { "Authorization": `Bearer ${jwt}` }
        };
        let responseData = await axios(config);
        console.log(responseData.data);
      } catch (error) {
        console.error(error)
      };
    }
  };

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
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
