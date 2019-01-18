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
  position: relative;
  top: 3px;
`

const FlexContainer = styled.div`
  display: flex;
`

const LogoutForm = styled.form`
  display: block;
`

const LogoutBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  border: 2px solid black;
  font-weight: bold;
  padding: 5px 20px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  &:hover {
    color: white;
    background: black
  }
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
        <FlexContainer>
          <HeaderButtons className="far fa-compass"></HeaderButtons>
          <HeaderButtons className="far fa-heart"></HeaderButtons>
          <HeaderButtons className="far fa-user"></HeaderButtons>
        <LogoutForm><LogoutBtn onClick={props.logOut}>Sign Out</LogoutBtn></LogoutForm>
        </FlexContainer>
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
