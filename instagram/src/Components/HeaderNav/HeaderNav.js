import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './HeaderNav.css';

import instaLogo from '../../imgs/instalogo.png';

const HeaderNav = props => {
  return (
    <div className='header-nav-cont'>
      <div className="header-nav-flex">
        <div>
          <i className="fab fa-instagram insta-logo"></i>
          <img className='insta-cursive' src={instaLogo} alt="" />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    </div>
  )
}

HeaderNav.propTypes = {

}

export default HeaderNav;
