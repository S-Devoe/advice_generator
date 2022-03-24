import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import content from '../styles/content.css'

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      setData(response.data)
    })
    .catch(error =>{
        console.error("Error fetching data....", error)
        setError(error)
    })
    .finally(()=>{
        setLoading(false)
    })
  }, []);


  if(loading) return "Loading..."
  if(error) return "Error..."
  // console.log(data);

  function refreshPage(){
    window.location.reload(true);
  }
  
  return (
    <Container>
        <Content>
          <h1> Advice #{data.slip.id}</h1>
          <p>"{data.slip.advice}"</p>

          <Line onClick={refreshPage}>
          </Line>
          <Bottom>
              <img src="./images/icon-dice.svg" alt="icon" />
          </Bottom>
        </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 40%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 10rem;



  @media screen and (min-width: 950px) {
    padding: 10%  20%;
  }
`

const Content = styled.div`
position: relative;
  text-align: center;
  width: 100vw;
  max-width: 100%;
  height: 400px;
  border-radius: 10px;
  background: hsl(217, 19%, 24%);

  h1 {
    padding-top: 3rem;
    font-size: 13px;
    text-transform: uppercase;
    font-family: "Manrope", sans-serif;
    letter-spacing: 0.25rem;
    color: hsl(150, 100%, 66%);
  }

  p {
    font-size: 1.5rem;
    font-family: "Manrope", sans-serif;
    color: hsl(193, 38%, 86%);
    padding: 2rem 1rem 1rem;
  }



`;


const Line = styled.div`
  padding: 2rem;
  margin: 2rem;
  background-image: url("./images/pattern-divider-mobile.svg");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media screen and (min-width: 950px) {
    display:flex ;
    background-image: url("./images/pattern-divider-desktop.svg");
    align-self:center ;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  background-color: hsl(150, 100%, 66%);
  cursor: pointer;



  @media screen and (min-width: 950px) {
    &:hover {
      background-color: hsl(150, 100%, 66%);
      box-shadow: rgba(82, 255, 168, 1) 0px 0px 20px;
    }

  }
`;

export default Main;
