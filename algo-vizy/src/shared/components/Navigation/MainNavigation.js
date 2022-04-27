import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';

function MainNavigation(props) {
  return (
    <React.Fragment>
      <MainHeader>
        <button className='main-navigation__menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Algo-Vizy</Link>
        </h1>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
