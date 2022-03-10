import React from 'react';
import { Image, Button } from 'react-bootstrap';
import Search from './Search';
import Login from './Login';
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ textAlign: "center" }}>MemeCraft</h1>
        </a>
        <Image />
        {
          this.props.auth0.isAuthenticated ?
            <div className="float-end" style={{ marginRight: "2%" }}>
              <LogoutButton />
              <a href="/profile" style={{ textDecoration: "none" }}><Button style={{ display: "block" }} className="btn-sm btn-secondary mr-1">My Profile</Button></a>
            </div>
            :
            <Login />
        }
        <Search />
      </header>
    );
  }
}

export default withAuth0(Header);
