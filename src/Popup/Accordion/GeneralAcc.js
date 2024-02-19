import React from "react";
import { useStyles } from "./GeneralAcc.styles";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { generalData, oprtData, quoteData } from "./AccorData";
function GeneralAcc() {
  const classes = useStyles();
  return (
    <Box>
      <Accordion className={classes.accordion} defaultExpanded>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          Genaral Information
        </AccordionSummary>
        <AccordionDetails className="accordianDetails">
          {generalData.map((item, index) => (
            <Box key={index} className="detailBox">
              <span className="label">{item.lable}</span>
              <span className="text">{item.text}</span>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} defaultExpanded>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          Opportunity Information
        </AccordionSummary>
        <AccordionDetails className="accordianDetails">
          {oprtData.map((item) => (
            <Box className="detailBox">
              <span className="label">{item.lable}</span>
              <span className="text">{item.text}</span>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} defaultExpanded>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          quote/Order Defaults
        </AccordionSummary>
        <AccordionDetails className="accordianDetails">
          {quoteData.map((item) => (
            <Box className="detailBox">
              <span className="label">{item.lable}</span>
              <span className="text">{item.text}</span>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default GeneralAcc;
