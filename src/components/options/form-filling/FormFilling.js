import React, { useState, useEffect } from "react";
import SidemenuFormFilling from "./SidemenuFormFilling";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";
import TopMenu from "../TopMenu";
import useStyles from "../../../style/FormFilling-style";

const FormBuilding = ({ setSettingsPage, settingsPage }) => {
  const [page, setPage] = useState("");
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <TopMenu
          setSettingsPage={setSettingsPage}
          settingsPage={settingsPage}
        />
        <Paper className={classes.paper}>
          <SidemenuFormFilling setPage={setPage}></SidemenuFormFilling>
          <Form></Form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FormBuilding;
