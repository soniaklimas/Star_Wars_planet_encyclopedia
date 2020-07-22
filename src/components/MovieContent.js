import React from "react";
import DataTable from "react-data-table-component";
import MobileView from "../components/MobileView";

const MovieContent = (props) => {
  const customStyles = {
    table: {
      style: {
        width: "698px",
        margin: "0 auto",
      },
    },
    headRow: {
      style: {
        borderBottom: "1px solid #C4C4C4",
      },
    },
    headCells: {
      style: {
        textAlign: "right",
        "&:nth-of-type(1)": {
          color: "#00687F",
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
    },
    rows: {
      style: {
        "&:not(:last-of-type)": {
          borderBottomWidth: "0px",
        },
      },
    },
    cells: {
      style: {
        "&:nth-of-type(1)": {
          paddingLeft: "0px",
        },
      },
    },
  };

  const columns = [
    {
      name: "Planet Name",
      selector: "name",
      sortable: true,
      cell: (row) => <div style={{ color: "#00687F" }}>{row.name}</div>,
    },
    {
      name: "Rotation period",
      selector: "rotationPeriod",
      sortable: true,
      center: true,
    },
    {
      name: "Orbital period",
      selector: "orbitalPeriod",
      sortable: true,
      center: true,
    },
    {
      name: "Diameter",
      selector: "diameter",
      sortable: true,
      center: true,
    },
    {
      name: "Climate",
      selector: "climates",
      sortable: true,
      center: true,
    },
    {
      name: "Surface water",
      selector: "surfaceWater",
      sortable: true,
      center: true,
    },
    {
      name: "Population",
      selector: "population",
      sortable: true,
      center: true,
    },
  ];

  return window.innerWidth > 480 ? (
    <DataTable
      columns={columns}
      noHeader={true}
      customStyles={customStyles}
      responsive={false}
      data={props.planets}
    />
  ) : (
    <MobileView planetData={props.planets} />
  );
};

export default MovieContent;
