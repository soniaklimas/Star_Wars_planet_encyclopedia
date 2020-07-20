import React from "react";
import DataTable from 'react-data-table-component';
import MobileView from '../components/MobileView'
const MovieContent = (props) => {


  const columns = [{
    name: "Planet Name", selector: "name", sortable: true
  }, {
    name: "Rotation Period", selector: "rotationPeriod", sortable: true
  },
  {
    name: "Orbital period", selector: "orbitalPeriod", sortable: true
  },
  {
    name: "Diameter", selector: "diameter", sortable: true
  },
  {
    name: "Climates", selector: "climates", sortable: true
  },
  {
    name: "Surface water", selector: "surfaceWater", sortable: true
  },
  {
    name: "Population", selector: "population", sortable: true
  },

  ]
  console.log(window.innerWidth)
  return (
    window.innerWidth > 480 ?
      <DataTable
        columns={columns}

        data={props.planets} /> : <MobileView planetData={props.planets} />
  )
}

export default MovieContent;