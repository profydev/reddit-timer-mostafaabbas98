import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

const HeaderCom = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  & .logo a img {
    display: block;
  }
`;

const NavCom = styled.nav`
  display: flex;
  gap: 26px;
  & li {
    list-style-type: none;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
  }
`;

function Header() {
  return (
    <HeaderCom>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <NavCom>
        <li>
          <Link to="/search:javascript">Search</Link>
        </li>
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </NavCom>
    </HeaderCom>
  );
}

export default Header;
