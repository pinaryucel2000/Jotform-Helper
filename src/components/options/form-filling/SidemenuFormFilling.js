import React, { useState } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import useStyles from "../../../style/SidemenuFormFilling-style";

export default function SidemenuFormFilling({ setPage }) {
  const [selection, setSelection] = useState("Information");
  const classes = useStyles();

  function handleChange(name) {
    setSelection(name);
    setPage(name);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem
            name="Information"
            className={classes.menuItem}
            selected={selection === "Information"}
            onClick={() => handleChange("Information")}
          >
            <ListItemIcon>
              <ContactPhoneIcon fontSize="medium" />
            </ListItemIcon>
            <Typography className={classes.typography} variant="inherit">
              Information
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
