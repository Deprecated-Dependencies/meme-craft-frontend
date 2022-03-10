import React from 'react';
import { Image } from 'react-bootstrap';
import Search from './Search';
import Login from './Login';
import LogoutButton from './LogoutButton'
import {withAuth0} from '@auth0/auth0-react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h3>Header</h3>
        <Image />
        {
          this.props.auth0.isAuthenticated ? <LogoutButton/> :
          <Login />
        }
        <Search />
      </header>
    );
  }
}

export default withAuth0(Header);
