import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logoImage' />
      <div className='navMenu'>
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          className='navMenuList'
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-100}
          className='navMenuList'
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-100}
          className='navMenuList'
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          className='navMenuList'
          duration={500}
        >
          Contact
        </Link>
      </div>
      <RiMenu3Fill
        className='mobileMenuIcon'
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className='mobileMenu'
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          className='mobileMenuListItem'
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-100}
          className='mobileMenuListItem'
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-100}
          className='mobileMenuListItem'
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          className='mobileMenuListItem'
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
