import React from 'react';
import Image from 'react-bootstrap';
import tumblr from '../img/social-tumblr.png';
import reddit from '../img/social-reddit.png';
import pintrest from '../img/social-pintrest.png';
import instagram from '../img/social-ig.png';
import facebook from '../img/social-fb.png';

class SocialLinks extends React.Component {
  render() {
    let imgArray = [tumblr, reddit, pintrest, instagram, facebook]

    return (
      <>
        {imgArray.map(img => <Image src={img} key={img} alt={`Share on social media`} />)}
      </>
    )
  }
}

export default SocialLinks;
