import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ArrowClose from "../assets/ARROW CLOSE.svg"
import ArrowOpen from "../assets/ARROW OPEN.svg"


const MovieItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h5>{props.title}</h5>
        <img src={!open ? ArrowClose : ArrowOpen} alt="arrowClose"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        />
      </div>


      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  )
}

export default MovieItem;