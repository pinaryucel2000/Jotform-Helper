/*global chrome*/
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import JotformEmbed from "react-jotform-embed";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../../../style/Form-style";
import { formID, adminApi } from "../../constants";
import { decrypt } from "../../util";

const Form = () => {
  const classes = useStyles();
  const [form, setForm] = useState(null);
  useEffect(() => {
    chrome.storage.local.get(["APIKey"], function (result) {
      let apiKey = decrypt(result.APIKey);

      const apiCall =
        "https://api.jotform.com/form/" +
        formID +
        "/submissions?apiKey=" +
        adminApi;

      fetch(apiCall)
        .then((response) => response.json())
        .then((data) => {
          let tmp = "http://form.jotform.com/" + formID + "?apiKey=" + apiKey;
          for (let i = 0; i < data.content.length; i++) {
            if (data.content[i].answers[7].answer == apiKey) {
              // Name
              let name = data.content[i].answers[3].answer;

              if (name.first != undefined) {
                tmp = tmp + "&name[first]=" + name.first;
              }
              if (name.last != undefined) {
                tmp = tmp + "&name[last]=" + name.last;
              }

              // Email
              let email = data.content[i].answers[4].answer;
              if (email != undefined) {
                tmp = tmp + "&email=" + email;
              }

              // Phone number
              let phoneNumber = data.content[i].answers[6].answer.full;
              if (phoneNumber != undefined) {
                tmp = tmp + "&phoneNumber=" + phoneNumber;
              }

              // Birthdate
              let birthdate = data.content[i].answers[10].answer;
              if (birthdate != undefined) {
                tmp =
                  tmp +
                  "&birthdate[day]=" +
                  birthdate.day +
                  "&birthdate[month]=" +
                  birthdate.month +
                  "&birthdate[year]=" +
                  birthdate.year;
              }

              // Address
              let address = data.content[i].answers[9].answer;
              if (address != undefined) {
                console.log(address);
                tmp =
                  tmp +
                  "&address[addr_line1]=" +
                  address.addr_line1 +
                  "&address[addr_line2]=" +
                  address.addr_line2 +
                  "&address[city]=" +
                  address.city +
                  "&address[postal]=" +
                  address.postal +
                  "&address[state]=" +
                  address.state;
              }
              break;
            }
          }
          setForm(tmp);
        });
    });
  });

  return (
    <Grid className={classes.root}>
      {form ? (
        <JotformEmbed src={form} />
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Grid>
  );
};

export default Form;
