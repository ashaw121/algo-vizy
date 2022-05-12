import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <a
          href='https://github.com/ashaw121/algo-vizy'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
