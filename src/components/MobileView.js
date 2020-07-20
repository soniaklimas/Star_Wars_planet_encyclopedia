import React from "react";
import { Row, Col } from "react-bootstrap"

const MobileView = (props) => {

  return (

    props.planetData.map((item, index) => (
      <div style={index % 2 !== 0 ? { backgroundColor: "yellow" } : null}>
        <Row>
          <Col xs={6}>Planet name</Col>
          <Col xs={6}>{item.name}</Col>
        </Row>
        <Row>
          <Col xs={6}>Rotation period</Col>
          <Col xs={6}>{item.rotationPeriod}</Col>
        </Row>
        <Row>
          <Col xs={6}>Orbital period</Col>
          <Col xs={6}>{item.orbitalPeriod}</Col>
        </Row>
        <Row>
          <Col xs={6}>Diameter</Col>
          <Col xs={6}>{item.diameter}</Col>
        </Row>
        <Row>
          <Col xs={6}>Climate</Col>
          <Col xs={6}>{item.climate}</Col>
        </Row>
        <Row>
          <Col xs={6}>Surface water</Col>
          <Col xs={6}>{item.surfaceWater}</Col>
        </Row>
        <Row>
          <Col xs={6}>Population</Col>
          <Col xs={6}>{item.population}</Col>

        </Row>
      </div>)
    )


  )
}

export default MobileView;