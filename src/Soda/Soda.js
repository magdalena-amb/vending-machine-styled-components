import React, { Component } from "react";
import Message from "../Message/Message";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const StyledSoda = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`
const StyledImg= styled.img`
  animation: ${spin} 1s linear infinite;
`

class Soda extends Component {
  render() {
    return (
      <StyledSoda>
        <StyledImg src={sodaImg} alt='coca cola can' />
        <Message>
          <h1>SODAAAAA IS MY FAVORITE</h1>
          <h3>But now I drink sparkling water instead</h3>
          <p>(I still miss Soda)</p>
          <Link to='/'>Go Back</Link>
        </Message>
        <StyledImg src={sodaImg} alt='coca cola can' />
      </StyledSoda>
    );
  }
}

export default Soda;
