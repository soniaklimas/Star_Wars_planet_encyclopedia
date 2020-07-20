import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ArrowClose from "../assets/ARROW CLOSE.svg"
import ArrowOpen from "../assets/ARROW OPEN.svg"
import MovieContent from './MovieContent';
import data from "../data/data"


const MovieItem = (props) => {
  const [open, setOpen] = useState(false);
  const rightPlanets = [];
  const planets = data.data.planets;
  planets.forEach(planet => {
    planet.filmConnection.films.forEach(film => {
      if (film.id === props.id) {
        rightPlanets.push(planet)
      }
    }
    )
  })

  return (
    <>
      <div className="d-flex justify-content-between">
        <h5>{props.title}</h5>
        <img src={open ? ArrowClose : ArrowOpen} alt="arrowClose"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        />
      </div>


      <Collapse in={open}>
        <div id="example-collapse-text">
          <MovieContent planets={rightPlanets} />
        </div>
      </Collapse>
    </>
  )
}

export default MovieItem;