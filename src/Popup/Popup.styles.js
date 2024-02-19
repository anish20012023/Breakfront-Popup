import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  popupModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiPaper-root.mainBox": {
      width: "99%",
      height: "97%",
      borderRadius: "0px ",
      backgroundColor: "#F2F2F2",
      "&:focus": {
        outline: "none",
      },
    },
  },
  popupHeader: {
    height: "45px",
    backgroundColor: theme.palette.PrimaryBgColor,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px 0 25px",
    color: "#fff",
    // header left box
    "& .header-leftbox": {
      display: "flex",
      alignItems: "center",
      height: "100%",
      gap: "10px",

      "& img": {
        width: "30px",
      },
      "& div": {
        "& p.MuiTypography-body1": {
          textTransform: "uppercase",
          lineHeight: "15px",
        },
        "& p.MuiTypography-body2": {
          fontSize: "11px",
          lineHeight: "12px",
          textTransform: "capitalize",
          opacity: 0.8,
        },
      },
    },
    // header rightbox
    "& .header-rightbox": {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      "&>span": {
        fontSize: "13px",
      },
      "& button.MuiIconButton-root": {
        color: "#fff",
        padding: "2px",
        "& svg": {
          fontSize: "18px",
        },
        "& span": {
          display: "none",
        },
      },
    },
  },
  // popup grid
  popupGridContainer: {
    height: "calc(100% - 90px)",
    display: "flex",

    "& .sideBarGridItem": {
      borderRight: `2px solid ${theme.palette.AccorColor}`,
      height: "100%",
      width: "180px",

      "& ul": {
        padding: "0",
        textTransform: "capitalize",
        fontSize: "14px",
        color: "#636363",
        fontWeight: "500",
        "& li": {
          padding: "0",
          "& div.Mui-selected": {
            color: theme.palette.PrimaryBgColor,
            background: theme.palette.secondaryHeader,
          },
        },
      },
    },
    "& .mainContent": {
      width: "calc(100% - 180px)",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none !important",
      },
    },
  },
  bottomBar: {
    background: theme.palette.secondaryHeader,
    borderTop: `1.5px solid ${theme.palette.AccorColor}`,
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& .MuiButton-root": {
      border: "1.5px solid",
      borderRadius: "20px",
      padding: "3px 20px !important",
      fontSize: "11px",
      textTransform: "capitalize",
      color: theme.palette.PrimaryBgColor,
      marginRight: "15px",
    },
    "& .bcgBtn.MuiButton-root": {
      backgroundColor: theme.palette.PrimaryBgColor,
      color: "#fff",
      borderColor: theme.palette.PrimaryBgColor,
    },
  },
}));
