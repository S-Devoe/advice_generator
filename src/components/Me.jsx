import React from 'react'
import styled from "styled-components"
function Me() {
  return (
    <Label>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io/home"  target="blank">Frontend Mentor.</a> Coded by
      Your <a href="https://github.com/S-Devoe" target="blank">DeeVoe.</a>
    </Label>
  );
}

const Label = styled.div`
padding:0 2rem ;
  font-size: 1rem;
  color: hsl(193, 38%, 86%);

  a {
    color: hsl(150, 100%, 66%);
  }
`;



export default Me