import React, { Component } from "react";
import styled from 'styled-components';

const StyledMessage = styled.div`
  padding: 2rem;
  margin: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
  text-align: center;
  width: 25%;
`

class Message extends Component {
  render() {
    return <StyledMessage>{this.props.children}</StyledMessage>;
  }
}
export default Message;
