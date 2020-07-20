import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import styled from 'styled-components'
import Logo from "../assets/LOGO.svg"
import data from "../data/data.json"
import MovieItem from '../components/MovieItem'


const MoviesList = () => {

  const Wrapper = styled.div`
  width: 60vw;
  background-color: gray
  `

  console.log("data", data)
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Wrapper>
            <>
              <img src={Logo} alt="logo" className="pt-4 pb-3" />
              <div> {data.data.films.map(item => <ListGroup>
                <ListGroup.Item className="m-2">
                  <MovieItem key={item.id} data={data.data.planets} title={item.title} />
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