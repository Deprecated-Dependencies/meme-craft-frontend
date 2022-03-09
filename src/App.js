import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
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

export default App;
