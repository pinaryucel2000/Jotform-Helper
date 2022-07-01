import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../style/TopMenu-style";

const TopMenu = ({ setSettingsPage, settingsPage }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.topContainer}>
      <Button
        onClick={() => {
          setSettingsPage("building");
        }}
      >
        {settingsPage === "building" ? (
          <Typography
            className={classes.underlinedTypography}
            variant="inherit"
          >
            Form Building
          </Typography>
        ) : (
          <Typography className={classes.typography} variant="inherit">
            Form Building
          </Typography>
        )}
      </Button>
      <Button
        onClick={() => {
          setSettingsPage("filling");
        }}
      >
        {settingsPage === "filling" ? (
          <Typography
            className={classes.underlinedTypography}
            variant="inherit"
          >
            Form Filling
          </Typography>
        ) : (
          <Typography className={classes.typography} variant="inherit">
            Form Filling
          </Typography>
        )}
      </Button>
    </Grid>
  );
};

export default TopMenu;
