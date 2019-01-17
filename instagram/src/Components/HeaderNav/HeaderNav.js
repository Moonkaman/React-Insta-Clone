import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import instaLogo from '../../imgs/instalogo.png';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
//import './HeaderNav.css';

const NavHeaderContainer = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid lightgray;
  position: fixed;
  width: 100vw;
  background: white;
`

const NavHeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InstaLogo = styled.i`
  font-size: 30px;
  position: relative;
  border-right: 1px solid black;
  padding-right: 18px;
`

const InstaCursiveLogo = styled.img`
  height: 32px;
  width: auto;
  margin-left: 15px;
  position: relative;
  top: 8px;
`

const HeaderButtons = styled.i`
  font-size: 22px;
  color: gray;
  margin: 0 15px;
`

const HeaderNav = props => {
  return (
    <NavHeaderContainer>
      <NavHeaderFlex>
        <div>
          <InstaLogo className="fab fa-instagram insta-logo"></InstaLogo>
          <InstaCursiveLogo className='insta-cursive' src={instaLogo} alt="" />
        </div>
        <div>
          <SearchBar searchInput={props.searchInput} handleSearchChange={props.handleSearchChange} handleSearch={props.handleSearch} />
        </div>
        <div>
          <HeaderButtons className="far fa-compass"></HeaderButtons>
          <HeaderButtons className="far fa-heart"></HeaderButtons>
          <HeaderButtons className="far fa-user"></HeaderButtons>
        </div>
      </NavHeaderFlex>
    </NavHeaderContainer>
  )
}

HeaderNav.propTypes = {
  searchInput: PropTypes.string,
  handleSearchChange: PropTypes.func,
  handleSearch: PropTypes.func
}

export default HeaderNav;
