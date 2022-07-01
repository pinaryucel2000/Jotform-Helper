/*global chrome*/
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { categories } from "./categories";
import "../../../style/Preferences.css";
import useStyles from "../../../style/Preferences-style";

const Preferences = ({ categoryID }) => {
  const classes = useStyles();
  const category = categories.find((object) => object.id === categoryID);
  console.log(category);
  const [checked, setChecked] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    let initialChecked = [];
    chrome.storage.local.get(["categories"], function (result) {
      let category = result.categories.filter((obj) => {
        return obj.id == categoryID;
      });

      for (let i = 0; i < category[0].rules.length; i++) {
        initialChecked.push(category[0].rules[i]);
      }

      setChecked(initialChecked);
    });
    let tmp = checked;
  }, [categoryID, change]);

  const handleChange = (ruleID) => {
    let categoryIndex;
    chrome.storage.local.get(["categories"], function (result) {
      let tmp = result.categories;
      for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].id == categoryID) {
          categoryIndex = i;
          for (let j = 0; j < tmp[i].rules.length; j++) {
            if (tmp[i].rules[j].id == ruleID) {
              tmp[i].rules[j].active = !tmp[i].rules[j].active;
              break;
            }
          }
          break;
        }
      }
      chrome.storage.local.set({ categories: tmp });
      setChange(!change);
    });

    chrome.storage.local.get(["categories"], function (result) {
      console.log(result.categories);
    });
  };

  const getChecked = (ruleID) => {
    if (checked.length == 0) {
      return false;
    }

    let c = checked.filter((obj) => {
      return obj.id == ruleID;
    });

    if (c.length == 0) {
      return false;
    }

    return c[0].active;
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.headerContainer}>
        <Typography className={classes.typographyHeader} variant="inherit">
          {category.name}
        </Typography>
        <Divider className={classes.dividerHeader} />
      </Grid>
      {category.rules.map((rule, index) => (
        <Grid>
          <Grid className={classes.ruleContainer}>
            <Typography className={classes.typographyRule}>
              {rule.name}
            </Typography>
            <div class="onoffswitch">
              <input
                onClick={() => {
                  handleChange(rule.id);
                }}
                type="checkbox"
                name="onoffswitch"
                class="onoffswitch-checkbox"
                id={rule.name}
                tabindex="0"
                checked={getChecked(rule.id)}
              ></input>
              <label class="onoffswitch-label" for={rule.name}>
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </Grid>
          <Divider className={classes.ruleDivider} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Preferences;
