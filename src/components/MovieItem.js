import React, { useState } from "react";
import styled from "styled-components";
import data from "../data/data";
import ArrowClose from "../assets/ARROW CLOSE.svg";
import ArrowOpen from "../assets/ARROW OPEN.svg";
import MovieContent from "./MovieContent";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  min-height: 48px;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  color: #00687f;
`;

const MovieContentWrapper = styled.div`
  height: ${(props) => props.height};
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
`;

const MovieItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const moviePlanet = [];
  const planets = data.data.planets;
  planets.forEach((planet) => {
    planet.filmConnection.films.forEach((film) => {
      if (film.id === props.id) {
        moviePlanet.push(planet);
      }
    });
  });

  return (
    <>
      <Wrapper>
        <Title>{props.title}</Title>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? ArrowClose : ArrowOpen}
          alt="arrowClose"
        />
      </Wrapper>
      {isOpen ? (
        <MovieContentWrapper>
          <MovieContent planets={moviePlanet} />
        </MovieContentWrapper>
      ) : null}
    </>
  );
};

export default MovieItem;
