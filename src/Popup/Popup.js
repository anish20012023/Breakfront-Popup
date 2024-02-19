import { Box, Button, IconButton, List, ListItem, ListItemButton, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./Popup.styles";
import CloseIcon from "@mui/icons-material/Close";
import GeneralAcc from "./Accordion/GeneralAcc";
const sideLink = [
  { id: 0, txt: "general" },
  { id: 1, txt: "addresses" },
  { id: 2, txt: "contacts" },
  { id: 3, txt: "Quotes/Orders" },
  { id: 4, txt: "scheduling" },
  { id: 5, txt: "phases" },
  { id: 6, txt: "tasks" },
  { id: 7, txt: "documents" },
  { id: 8, txt: "sharing" },
  { id: 9, txt: "general" },
  { id: 10, txt: "entry time" },
];

function Popup({ handlePopup, openPopup }) {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();
  return (
    <Modal open={openPopup} className={classes.popupModal}>
      <Paper className="mainBox" elevation={0}>
        <header className={classes.popupHeader}>
          <Box className="header-leftbox">
            <img src="images/bag.svg" alt="" />
            <Box>
              <Typography>sansone</Typography>
              <Typography variant="body2">southeastern family homes of SC, LLC</Typography>
            </Box>
          </Box>
          <Box className="header-rightbox">
            <Box component={"span"}>Opportunity 36735</Box>
            <IconButton onClick={handlePopup}>
              <CloseIcon />
            </IconButton>
          </Box>
        </header>
        <Box className={classes.popupGridContainer}>
          <Box className="sideBarGridItem">
            <List>
              {sideLink.map((link, index) => (
                <ListItem key={index}>
                  <ListItemButton onClick={() => setSelected(index)} selected={link.id === selected}>
                    {link.txt}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className="mainContent">{selected === 0 && <GeneralAcc />}</Box>
        </Box>
        {/* bottomBox */}
        <Box className={classes.bottomBar}>
          <Button className="borderBtn">Deactivate</Button>
          <Button className="borderBtn">Delete</Button>
          <Button className="borderBtn">Print</Button>
          <Button className="bcgBtn">Edit</Button>
        </Box>
      </Paper>
    </Modal>
  );
}

export default Popup;
