import React from 'react';
import { Link } from 'react-scroll';
import profile from '../../assets/profile-image.png';
import './intro.css';

const Intro = () => {
  return (
    <div id='intro' className='introContainer'>
      <img src={profile} alt='profile' className='profileImage' />
      <div className='introContent'>
        <div className='introText'>
          <h2>
            👋 I'm Jo <br />
            Mobile Developer
          </h2>
          <p className='introParagraph'>
            I'm a developer with experience in building both mobile and web
            applications
          </p>
        </div>
        <Link>
          <button
            className='btn'
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
