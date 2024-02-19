import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  gridContainer: {
    width: "95%",
    padding: "10px",
    margin: "0 auto",
  },
  AgGridMain: {
    "& .ag-row.headingRow": {
      backgroundColor: "#bfe6ff",
      fontWeight: "700 !important",
      textTransform: "uppercase !important",
    },
    "& .ag-row.allRows": {
      fontSize: "11px",
      fontWeight: "400",
      textTransform: "capitalize",
    },

    "& .ag-cell.subheading": {
      fontWeight: "500 !important",
    },
    "& .ag-cell .ag-checkbox-input-wrapper": {
      fontSize: "11px !important",
      backgroundColor: "transparent",
      boxShadow: "none !important",

      // checkbox custom
      "&::before": {
        content: '""',
        backgroundImage: "url(images/unchecked.svg)",
        backgroundSize: "cover",
      },
      "&.ag-checked::before": {
        backgroundImage: "url(images/checked.svg)",
      },
      "&::after": {
        content: "none",
      },
    },
    "& .ag-header-cell": {
      "& .ag-input-wrapper": {
        fontSize: "11px !important",
        backgroundColor: "transparent",
        boxShadow: "none !important",
      },

      borderRight: "1px solid #dddddd",

      // header checkbox custom

      "& .ag-checkbox-input-wrapper": {
        "&::before": {
          content: '""',
          backgroundImage: "url(images/unchecked.svg)",
          backgroundSize: "cover",
        },
        "&.ag-indeterminate::before": {
          backgroundImage: "url(images/stop.svg)",
        },
        "&.ag-checked::before": {
          backgroundImage: "url(images/checked.svg)",
        },
        "&::after": {
          content: "none",
        },
      },
    },

    "& .ag-header-container": {
      "& .ag-header-row": {
        fontSize: "12px",
      },
    },
  },

  // popup

  popupOpen: {
    padding: theme.spacing(2),
    "& button.MuiButton-root": {},
  },
}));
