import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Search from './Search';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h3>Header</h3>
        <Image />
        <Button>Login</Button>
        <Search />
      </header>
    );
  }
}

export default Header;
