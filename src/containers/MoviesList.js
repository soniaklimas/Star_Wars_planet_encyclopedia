import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import styled from 'styled-components'
import Logo from "../assets/LOGO.svg"
import data from "../data/data.json"
import MovieItem from '../components/MovieItem'


const MoviesList = () => {

  const Wrapper = styled.div`
  width: ${props => props.width > 480 ? "60vw" : "100%"};
  background-color: gray;

  `
  const width = window.innerWidth;
  const planets = data.data.films.map(film => data.data.planets.map(planet => planet.filmConnection.films.filter(item => item.id === film.id)))

  return (
    <Container className="mt-5">
      <Row>
        <Col className="px-0">
          <Wrapper width={width}>
            <>
              <img src={Logo} alt="logo" className="pt-4 pb-3" />
              <div> {data.data.films.map(item => <ListGroup>
                <ListGroup.Item className="m-2 px-3" className={width < 480 ? "px-0" : ""}>
                  <MovieItem key={item.id} data={data.data.planets} id={item.id} title={item.title} />
                </ListGroup.Item>
              </ListGroup>)}
              </div>
            </>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviesList;