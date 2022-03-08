import React from 'react';
import Author from './Author'
import bradyAlt from '../img/brady-altImage.jpg';
import brady from '../img/brady.jpg';

class AboutUs extends React.Component {
  render() {
    const bios = {
      brady: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      harvey: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      jeffrey: 'Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      micha: 'Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      michael: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'
    };

    return (
      <>
        <Author
          name="Brady Camp"
          bio={bios.brady}
          image={brady}
          altImage={bradyAlt}
        />
        <Author
          name="Harvey Francois"
          bio={bios.harvey}
          image=""
          altImage=""
        />
        <Author
          name="Jeffrey Jenkins"
          bio={bios.jeffrey}
          image=""
          altImage=""
        />
        <Author
          name="Micha Davis"
          bio={bios.micha}
          image=""
          altImage=""
        />
        <Author
          name="Michael Campbell"
          bio={bios.michael}
          image=""
          altImage=""
        />
      </>
    );
  }
}

export default AboutUs;
