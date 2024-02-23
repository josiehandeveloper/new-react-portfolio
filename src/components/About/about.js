import React from 'react';
import {
  DiJsBadge,
  DiReact,
  DiSwift,
  DiFirebase,
  DiDart,
} from 'react-icons/di';
import laptop from '../../assets/macbook_coffee.jpg';
import './about.css';

const About = () => {
  return (
    <div id='about' className='aboutContainer'>
      <img src={laptop} alt='laptop' className='laptopImage' />
      <div className='aboutText'>
        <h1>About</h1>
        <p>
          I'm Jo a developer from Los Angeles, CA. I got into coding during the
          pandemic when I tried to start an online business. The business didn't
          end up working out but I got really into building out the Wordpress
          website.
        </p>
        <div className='aboutIcons'>
          <DiJsBadge size='30px' /> <DiReact size='30px' />
          <DiSwift size='30px' /> <DiFirebase size='30px' />
          <DiDart size='30px' />
        </div>
      </div>
    </div>
  );
};

export default About;
