import React from "react";
import styled from "styled-components";

const MobileView = (props) => {
  const Wrapper = styled.div`
    background-color: ${(props) =>
      props.index % 2 !== 0 ? "rgba(229, 229, 229, 0.5)" : null};
    padding: 15px 0;
  `;

  const MobileRow = styled.div`
    font-size: 14px;
    display: flex;
    padding: 0 10px;
  `;

  const MobileCol = styled.div`
    font-size: 14px;
    width: 50%;
    padding: 5px 48px 5px 0px;
  `;

  return props.planetData.map((item, index) => (
    <Wrapper index={index}>
      <MobileRow>
        <MobileCol>Planet name</MobileCol>
        <MobileCol style={{ color: "#00687F" }}>{item.name}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Rotation period</MobileCol>
        <MobileCol>{item.rotationPeriod}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Orbital period</MobileCol>
        <MobileCol>{item.orbitalPeriod}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Diameter</MobileCol>
        <MobileCol>{item.diameter}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Climate</MobileCol>
        <MobileCol>{item.climate}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Surface water</MobileCol>
        <MobileCol>{item.surfaceWater}</MobileCol>
      </MobileRow>
      <MobileRow>
        <MobileCol>Population</MobileCol>
        <MobileCol>{item.population}</MobileCol>
      </MobileRow>
    </Wrapper>
  ));
};

export default MobileView;
