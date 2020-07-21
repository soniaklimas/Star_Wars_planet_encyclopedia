import React from "react";
import styled from "styled-components";


const MobileView = (props) => {
  const Wrapper = styled.div`
  background-color: ${(props) => (props.index % 2 !== 0 ? "rgba(229, 229, 229, 0.5)" : null)};
  padding: 21px 0;
`;
  const MobileRow = styled.div`
  font-size: 14px;
  display: flex;
  padding: 0 10px
`;

  const MobileCol = styled.div`
font-size: 14px;
width: 50%;
padding: 5px 48px 5px 0px;
`;
  return (

    props.planetData.map((item, index) => (
      <Wrapper index={index}  >
        <MobileRow>
          <MobileCol xs={6}>Planet name</MobileCol>
          <MobileCol xs={6}>{item.name}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Rotation period</MobileCol>
          <MobileCol xs={6}>{item.rotationPeriod}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Orbital period</MobileCol>
          <MobileCol xs={6}>{item.orbitalPeriod}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Diameter</MobileCol>
          <MobileCol xs={6}>{item.diameter}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Climate</MobileCol>
          <MobileCol xs={6}>{item.climate}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Surface water</MobileCol>
          <MobileCol xs={6}>{item.surfaceWater}</MobileCol>
        </MobileRow>
        <MobileRow>
          <MobileCol xs={6}>Population</MobileCol>
          <MobileCol xs={6}>{item.population}</MobileCol>

        </MobileRow>
      </Wrapper>)
    )


  )
}

export default MobileView;