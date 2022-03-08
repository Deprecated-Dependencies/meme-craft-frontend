import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react'
import LogoutButton from './components/LogoutButton';

class App extends React.Component {
  printToken = async () => {
    const res = await this.props.auth0.getIdTokenClaims();

    const jwt = res.__raw;

    console.log(jwt)
  }

  render() {
    return (
      <>
        <Header />
        {this.props.auth0.isAuthenticated ?
          (
          <>
            <button onClick={this.printToken}>Button</button>
            <LogoutButton />
          </>
          ) :
          null
        }
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
