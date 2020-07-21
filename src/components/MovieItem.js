import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowClose from "../assets/ARROW CLOSE.svg";
import ArrowOpen from "../assets/ARROW OPEN.svg";
import MovieContent from "./MovieContent";
import data from "../data/data";
// import { Collapse } from "react-bootstrap";

const Title = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  color: #00687f;
`;

const Wrapper = styled.div`
height: ${(props) => props.height};
box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
`

const style = {
  collapsed: {
    display: "none",
  },
  expanded: {
    display: "block",
  },
};
const MovieItem = (props) => {
  const movieContentRef = React.useRef()

  const [isOpen, setIsOpen] = useState(false);



  const rightPlanets = [];
  const planets = data.data.planets;
  planets.forEach((planet) => {
    planet.filmConnection.films.forEach((film) => {
      if (film.id === props.id) {
        rightPlanets.push(planet);
      }
    });
  });
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px", minHeight: "48px" }}>
        <Title>{props.title}</Title>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? ArrowClose : ArrowOpen}
          alt="arrowClose"

        />
      </div>
      {/* <div style={isOpen ? style.collapsed : style.expanded}> */}
      {isOpen ?
        <Wrapper>
          <MovieContent
            planets={rightPlanets}

          /></Wrapper> : null}
      {/* </div> */}

      {/* <Collapse in={open}>
        <div id="example-collapse-text">
          <MovieContent planets={rightPlanets} />
        </div>
      </Collapse> */}
    </>
  );
};

export default MovieItem;
