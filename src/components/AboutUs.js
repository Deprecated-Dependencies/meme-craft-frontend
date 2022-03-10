import React from 'react';
import Author from './Author'
import bradyAlt from '../img/brady-altImage.jpg';
import brady from '../img/brady.jpg';
import harveyAlt from '../img/harvey-altImage.jpg';
import harvey from '../img/harvey.jpg';
import jeffreyAlt from '../img/jeffrey-altImage.png';
import jeffrey from '../img/jeffrey.jpg';
import michaelAlt from '../img/michael-altImage.jpg';
import michael from '../img/michael.jpg';
import michaAlt from '../img/micha-altImage.jpg';
import micha from '../img/micha.jpg';

class AboutUs extends React.Component {
  render() {
    const bios = {
      brady: 'I am a full-stack JavaScript software developer with a background in frontend and backend web development. I have a desire to further my education and expand my knowledge and experience in web programming and development. Prior to programming I have four years of experience in business management and I am a persistent leader with problem solving, critical thinking, and communication skills.',
      harvey: 'I was working at a warehouse before I started at Code Fellows. I wanted a career in coding and have always had an interest in AI, machine learning, and robotics. This is why I am really interested in learning python. I had my first experience with coding in college when I enrolled in a robotics class and loved it. I am here at Code fellows because of that.',
      jeffrey: 'I am a JavaScript developer with a background in medical device manufacturing and electrical engineering. Driven to deliver innovative, high quality solutions and understand customer needs. A life-long learner passionate to acquire new skills and solve challenging problems. My hobbies are gaming, hiking, biking, and collecting memes.',
      micha: 'I am a full-stack JavaScript software engineer. Prior to getting into software development I was an intelligence analyst for the US Army, after which I worked as a freelance illustrator. I decided to become a software engineer because I want to embrace my love for technology and merge that with my artistic design knowledge to produce beautiful, useful, and enjoyable software products.',
      michael: 'I am experienced with working in agile and fast-paced environments that demand strong organizational, technical and interpersonal skills. I bring a sense of independent accountability while still being able to work within a team. Right now in my job search I am looking for a growing company that is community oriented and has a culture of inclusivity and diversity.'
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
          image={harvey}
          altImage={harveyAlt}
        />
        <Author
          name="Jeffrey Jenkins"
          bio={bios.jeffrey}
          image={jeffrey}
          altImage={jeffreyAlt}
        />
        <Author
          name="Micha Davis"
          bio={bios.micha}
          image={micha}
          altImage={michaAlt}
        />
        <Author
          name="Michael Campbell"
          bio={bios.michael}
          image={michael}
          altImage={michaelAlt}
        />
      </>
    );
  }
}

export default AboutUs;
