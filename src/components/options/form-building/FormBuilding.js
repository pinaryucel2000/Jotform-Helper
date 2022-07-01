import React, { useState, useEffect } from "react";
import SidemenuFormBuilding from "./SidemenuFormBuilding";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "./API";
import Preferences from "./Preferences";
import TopMenu from "../TopMenu";
import useStyles from "../../../style/FormBuilding-style";

const FormBuilding = ({ setSettingsPage, settingsPage }) => {
  const classes = useStyles();
  const [page, setPage] = useState("API");

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <TopMenu
          setSettingsPage={setSettingsPage}
          settingsPage={settingsPage}
        />
        <Paper className={classes.paper}>
          <SidemenuFormBuilding setPage={setPage}></SidemenuFormBuilding>
          {page === "API" ? (
            <API></API>
          ) : (
            <Preferences categoryID={page}></Preferences>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FormBuilding;
