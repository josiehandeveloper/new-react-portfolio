import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStore } from 'react-icons/fa';
import pepphome from '../../assets/pepp_home.png';
import peppmaps from '../../assets/pepp_maps.png';
import peppannouncements from '../../assets/pepp_announcements.png';
import netflixhome from '../../assets/netflix_home.png';
import netflixvideodetails from '../../assets/netflix_videodetails.png';
import netflixdownloads from '../../assets/netflix_downloads.png';
import twitterfeed from '../../assets/twitter_feed.png';
import twitteraccount from '../../assets/twitter_account.png';
import twitterprofile from '../../assets/twitter_profile.png';
import { FaGithub } from 'react-icons/fa';

import './projects.css';

function Projects() {
  return (
    <div id='projects' className='projectsContainer'>
      <h1 className='projectsTitle'>Projects</h1>
      <div className='peppContainer'>
        <div className='peppImages'>
          <img src={pepphome} alt='pepp homescreen' className='peppHome' />
          <img src={peppmaps} alt='pepp maps' className='peppMaps' />
          <img
            src={peppannouncements}
            alt='pepp announcements'
            className='peppAnnouncements'
          />
        </div>

        <div className='peppDescription'>
          <h2 className='peppTitle'>Pepperdine University</h2>
          <p className='peppContent'>
            Unified Pepperdine University App built using Flutter and Firebase.
            Funnels all communication and services from the university into one
            manageable app.
          </p>
          <div className='peppIcons'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://play.google.com/store/apps/details?id=com.pepperdinemobileapp.pepperdine'
              className='playStoreIcon'
            >
              <IoLogoGooglePlaystore size='30px' color='white' />
            </a>

            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://apps.apple.com/us/app/pepperdine-university/id6450375661'
              className='appStoreIcon'
            >
              <FaAppStore size='30px' color='white' />
            </a>
          </div>
        </div>
      </div>

      <div className='netflixContainer'>
        <div className='netflixImages'>
          <img src={netflixhome} alt='netflix home' className='netflixHome' />
          <img
            src={netflixvideodetails}
            alt='netflix video details'
            className='netflixVideoDetails'
          />
          <img
            src={netflixdownloads}
            alt='netflix downloads'
            className='netflixDownloads'
          />
        </div>
        <div className='netflixDescription'>
          <h2 className='netflixTitle'>Netflix Clone</h2>
          <p className='netflixContent'>
            Netflix Clone built with Swift 5 and UI Kit. Uses data from the TMBD
            API and Youtube API to play trailers. App uses CoreData to save
            user's movies.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/josiehandeveloper/Netflix-Clone'
            className='githubIcon'
          >
            <FaGithub size='30px' color='white' />
          </a>
        </div>
      </div>
      <div className='twitterContainer'>
        <div className='twitterImages'>
          <img
            src={twitteraccount}
            alt='twitter account'
            className='twitterAccount'
          />
          <img
            src={twitterprofile}
            alt='twitter profile'
            className='twitterProfile'
          />
          <img src={twitterfeed} alt='twitter feed' className='twitterFeed' />
        </div>
        <div className='twitterDescription'>
          <h2 className='twitterTitle'>Twitter Clone</h2>
          <p className='twitterContent'>
            Twitter Clone uses Firebase Authentication to onboard users onto the
            app. Users and tweets are saved into Firestore Database. Users can
            create a personalized profile and even add an image if they would
            like to.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/josiehandeveloper/TwitterClone'
            className='githubIcon'
          >
            <FaGithub size='30px' color='white' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
