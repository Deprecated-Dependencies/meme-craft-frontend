import React from 'react';
import Image from 'react-bootstrap/Image';
import tumblr from '../img/social-tumblr.png';
import reddit from '../img/social-reddit.png';
import pintrest from '../img/social-pintrest.png';
import twitter from '../img/social-twitter.png';
import facebook from '../img/social-fb.png';

class SocialLinks extends React.Component {
  render() {
    let page_url = this.props.page_url;
    let url = this.props.url;
    let socialArray = [
      {
        img: reddit,
        site: 'Reddit',
        link: `https://www.reddit.com/submit?url=${url}`
      },
      {
        img: tumblr,
        site: 'Tumblr',
        link: `http://tumblr.com/widgets/share/tool?canonicalUrl=${url}`
      },
      {
        img: pintrest,
        site: 'Pintrest',
        link: `https://www.pinterest.com/pin/create/button/?url=${page_url}&media=${url}&description=Next%20stop%3A%20Pinterest`
      },
      {
        img: twitter,
        site: 'Twitter',
        link: `https://twitter.com/intent/tweet?url=${url}`
      },
      {
        img: facebook,
        site: 'Facebook',
        link: `https://www.facebook.com/sharer/sharer.php?u=${url}`
      }
    ]

    return (
      <>
        {socialArray.map(site =>
          <a
            href={site.link}
            key={site.site}>
            <Image src={site.img} alt={`Share on ${site.site}`} />
          </a>
        )}
      </>
    )
  }
}

export default SocialLinks;
