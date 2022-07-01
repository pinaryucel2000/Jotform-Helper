/*global chrome*/
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import useStyles from "../../../style/API-style";
import { encryp, decrypt } from "../../util";

const API = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    key: "",
    showKey: false,
  });

  useEffect(() => {
    chrome.storage.local.get(["APIKey"], function (result) {
      setValues({ ...values, key: decrypt(result.APIKey) });
    });
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowKey = () => {
    setValues({ ...values, showKey: !values.showKey });
  };

  const handleMouseDownKey = (event) => {
    event.preventDefault();
  };

  const handleSave = () => {
    chrome.storage.local.set({ APIKey: encryp(values.key) });
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.headerContainer}>
        <Typography className={classes.typographyHeader1} variant="inherit">
          Update Your{" "}
        </Typography>
        <Typography className={classes.typographyHeader2} variant="inherit">
          API Key
        </Typography>
        <Divider className={classes.dividerHeader} />
      </Grid>
      <Grid className={classes.container}>
        <Typography className={classes.typographyTitle}>API Key</Typography>
        <Input
          className={classes.input}
          type={values.showKey ? "text" : "password"}
          value={values.key}
          onChange={handleChange("key")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowKey}
                onMouseDown={handleMouseDownKey}
              >
                {values.showKey ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button className={classes.button} onClick={handleSave}>
          <Typography className={classes.typographyButton} variant="inherit">
            Save
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default API;
