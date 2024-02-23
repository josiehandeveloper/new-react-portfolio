import React from 'react';

import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='linksContainer'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/josephine-han/'
          className='linkedinIcon'
        >
          <FaLinkedin size='30px' color='white' />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/josiehandeveloper'
          className='githubIcon'
        >
          <FaGithub size='30px' color='white' />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://docs.google.com/document/d/1aSMDBButRYQEdWI7NGBPORGpolytGyysqtswP2vPVoQ/edit?usp=sharing'
          className='resumeIcon'
        >
          <FaFile size='30px' color='white' />
        </a>
      </div>
      <p className='copyrightText'>
        Copyright &#169; 2024 Josephine Han. All rights reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
