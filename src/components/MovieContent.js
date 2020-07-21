import React from "react";
import DataTable from 'react-data-table-component';
import MobileView from '../components/MobileView';
import { FaSort } from "react-icons/fa";
const MovieContent = (props) => {
  const sortIcon = <FaSort />;
  const customStyles = {
    rows: {
      style: {
        height: "60px",
        fontSize: "12px",
        boxShadow: "0px 2px 1px rgba(196, 196, 196, 0.2)",



      }
    },
    row: {
      style: {
        borderBottom: "0px solid transparent"

      }
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',

      },
    },
  };
  const columns = [{
    name: "Planet Name", selector: "name", sortable: true, cell: row => <div style={{ color: "#00687F" }}>{row.name}</div>
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
        noHeader={true}
        customStyles={customStyles}
        responsive={false}
        fontIcon={sortIcon}
        data={props.planets} /> : <MobileView planetData={props.planets} />
  )
}

export default MovieContent;