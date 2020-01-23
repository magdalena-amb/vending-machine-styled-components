import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import styled from 'styled-components';

const StyledSardines = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif);
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledMessage= styled(Message)`
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
`
class Sardines extends Component {
  render() {
    return (
      <StyledSardines>
        <StyledMessage>
          <h1>you don't eat the sardines. the sardines, they eat you!</h1>
          <Link to='/'>Go Back</Link>
        </StyledMessage>
      </StyledSardines>
    );
  }
}

export default Sardines;


