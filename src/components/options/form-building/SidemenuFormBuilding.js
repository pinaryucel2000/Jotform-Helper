import React, { useState } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Collapse from "@material-ui/core/Collapse";
import { categories } from "./categories";
import useStyles from "../../../style/SidemenuFormBuilding-style";

export default function SidemenuFormBuilding({ setPage }) {
  const [selection, setSelection] = useState("");
  const classes = useStyles();
  function handleChange(name) {
    setSelection(name);
    setPage(name);
  }
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem
            name="API"
            className={classes.menuItem}
            selected={selection === "API"}
            onClick={() => handleChange("API")}
          >
            <ListItemIcon>
              <VpnKeyIcon fontSize="medium" />
            </ListItemIcon>
            <Typography className={classes.typography} variant="inherit">
              API
            </Typography>
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            selected={selection === "Preferences"}
            onClick={() => {
              handleClick();
              setSelection("Preferences");
            }}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="medium" />
            </ListItemIcon>
            <Typography className={classes.typography} variant="inherit">
              Preferences
            </Typography>
          </MenuItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MenuList component="div" disablePadding>
              {categories.map((category) => (
                <MenuItem
                  name={category.name}
                  id={category.id}
                  button
                  onClick={() => {
                    handleChange(category.id);
                  }}
                >
                  <Typography className={classes.typographyNested}>
                    {category.name}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Collapse>
        </MenuList>
      </Paper>
    </div>
  );
}
