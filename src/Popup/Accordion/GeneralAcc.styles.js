import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  accordion: {
    backgroundColor: "#EFEFEF",
    boxShadow: "none !important",
    margin: "0 2px 5px ",

    "&.Mui-expanded": {
      borderRadius: "0 !important",
      margin: "0 2px 7px  !important",
    },

    "& .accordianSummary": {
      minHeight: "35px !important",
      padding: "0 8px !important",
      backgroundColor: theme.palette.AccorColor,
      fontSize: "13px ",
      fontWeight: "500",
      textTransform: "capitalize",
      color: "#636363",

      "& .MuiAccordionSummary-content": {
        margin: "0 ",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    "& .accordianDetails": {
      padding: "15px 200px",
      "& .detailBox": {
        padding: "5px 0",
        fontSize: "13px",
        textTransform: "capitalize",
        "& .label": {
          minWidth: "200px !important",
          display: "inline-block",
          textAlign: "end",
        },
        "& .text": {
          marginLeft: "10px",
          fontWeight: "500",
        },
      },
    },
  },
}));
