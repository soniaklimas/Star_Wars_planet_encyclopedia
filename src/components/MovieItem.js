import React, { useState } from "react";
import styled from "styled-components";
import ArrowClose from "../assets/ARROW CLOSE.svg";
import ArrowOpen from "../assets/ARROW OPEN.svg";
import MovieContent from "./MovieContent";
import data from "../data/data";
import { Collapse } from "react-bootstrap";

const Title = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  color: #00687f;
`;

// const style = {
//   collapsed: {
//     display: "none",
//   },
//   expanded: {
//     display: "block",
//   },
// };
const MovieItem = (props) => {
  const [open, setOpen] = useState(false);

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
      <Title>{props.title}</Title>
      <img
        onClick={() => setOpen(!open)}
        src={open ? ArrowClose : ArrowOpen}
        alt="arrowClose"
        aria-controls="example-collapse-text"
        aria-expanded={open}
      />

      {/* <div style={isCollapsed ? style.collapsed : style.expanded}>
        <MovieContent
          planets={rightPlanets}
          aria-expanded={isCollapsed}
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        />
      </div> */}

      <Collapse in={open}>
        <div id="example-collapse-text">
          <MovieContent planets={rightPlanets} />
        </div>
      </Collapse>
    </>
  );
};

export default MovieItem;
