import React from 'react';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component {
  render() {
    return (
      <a href="/about" style={{ textDecoration: "none" }}>
        <Button
          className="fixed-bottom btn-sm btn-light"
          style={{ width: "125px", left: "85%", bottom: "2%" }}
        >
          About Us
        </Button>
      </a>
    );
  }
}

export default Footer;
