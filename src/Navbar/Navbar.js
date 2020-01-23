import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNavbar= styled.div`
  background: rgba(69, 90, 100, 1);
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-around;
`
const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  text-decoration: none;
  color: rgba(144, 164, 174, 1);
  transition: all 0.5s ease;

  &:hover {
    text-decoration: underline;
  }

  &.${activeClassName} {
    color: white;
  }
`

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <StyledNavLink exact  to='/'>
          Home
        </StyledNavLink>
        <StyledNavLink exact to='/chips'>
          Chips
        </StyledNavLink>
        <StyledNavLink exact to='/soda'>
          Soda
        </StyledNavLink>
        <StyledNavLink exact to='/sardines'>
          Sardines
        </StyledNavLink>
      </StyledNavbar>
    );
  }
}
export default Navbar;
