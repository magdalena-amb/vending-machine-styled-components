import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import vendingMachineImg from "./VendingMachine.png";
import styled from 'styled-components';

const StyledVendingMachine =  styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${vendingMachineImg});
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
class VendingMachine extends Component {
  render() {
    return (
      <StyledVendingMachine>
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
            <StyledLink to='/soda'>Soda</StyledLink>
            <StyledLink to='/chips'>Chips</StyledLink>
            <StyledLink to='/sardines'>Sardines</StyledLink>
        </Message>
      </StyledVendingMachine>
    );
  }
}

export default VendingMachine;
