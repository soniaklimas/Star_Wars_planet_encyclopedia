import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'
import Logo from "../assets/LOGO.svg"


const MoviesList = () => {

  const Wrapper = styled.div`
  width: 60vw;
  background-color: gray
  `
  return (
    <Container className="mt-5"><Row><Col><Wrapper> <img src={Logo} alt="logo" className="pt-4 pb-3" /></Wrapper></Col></Row></Container>
  )
}

export default MoviesList;