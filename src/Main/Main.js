import React, { useMemo, useState } from "react";
import { useStyle } from "./Main.styles";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "../index.css";
import { rowData } from "./Data";
import { priceFormat } from "./PriceFormat";
import Popup from "../Popup/Popup";

function Main() {
  const [openPopup, setOpenPopup] = useState(false);
  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };
  const columnDefs = [
    { checkboxSelection: true, headerCheckboxSelection: true, width: 50, sortable: false },
    {
      field: "wbc",
      headerName: "WBC",
      width: 100,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 300,
      cellClassRules: {
        subheading: (param) => Boolean(param.data.subheading),
      },
    },
    {
      field: "labourHour",
      headerName: "Labour Hour",
      width: 200,
      valueFormatter: (param) => priceFormat(param.value) || "-",
    },
    {
      field: "labour",
      headerName: "Labour",
      width: 200,
      valueFormatter: (param) => (param.value ? `$${priceFormat(param.data.labour)}` : "-"),
    },
    {
      field: "material",
      headerName: "Material",
      width: 200,
      valueFormatter: (param) => (param.value ? `$${priceFormat(param.data.material)}` : "-"),
    },
    {
      field: "total",
      cellRenderer: (param) => {
        let total = param.data.labour + param.data.material;
        return total ? `$${priceFormat(total)}` : "-";
      },
    },
  ];

  const defaultColumn = {
    resizable: false,
  };
  const gridOptions = {
    defaultColDef: defaultColumn,
    rowHeight: 25,
    headerHeight: 25,
    rowClassRules: {
      headingRow: (param) => Boolean(param.data.heading),
    },
    domLayout: "autoHeight",
    rowClass: "allRows",
    rowSelection: "multiple",
    rowMultiSelectWithClick: true,
    suppressRowClickSelection: true,
    suppressHorizontalScroll: true,
    suppressVerticalScroll: true,
  };
  const classes = useStyle();
  return (
    <Box className={`ag-theme-quartz ${classes.gridContainer}`}>
      <AgGridReact
        className={classes.AgGridMain}
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
        rowSelection="multiple"
        rowMultiSelectWithClick
      />
      <Box className={classes.popupOpen}>
        <Button onClick={handlePopup}>View Sansone</Button>
        <Popup handlePopup={handlePopup} openPopup={openPopup} />
      </Box>
    </Box>
  );
}

export default Main;
