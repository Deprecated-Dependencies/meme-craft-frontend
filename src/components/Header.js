import React from 'react';
import { Image } from 'react-bootstrap';
import Search from './Search';
import Login from './Login';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h3>Header</h3>
        <Image />
        <Login />
        <Search />
      </header>
    );
  }
}

export default Header;
