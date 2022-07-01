chrome.runtime.onMessage.addListener(function (params, sender, sendResponse) {
  // Fill button clicked
  if (params[0] == "fill") {
    const apiKey = params[1];
    let inputs = document.getElementsByTagName("input");

    const apiCall =
      "https://api.jotform.com/form/" +
      adminFormID +
      "/submissions?apiKey=" +
      adminApi;

    fetch(apiCall)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.content.length; i++) {
          if (data.content[i].answers[7].answer == apiKey) {
            let name = data.content[i].answers[3].answer;
            let email = data.content[i].answers[4].answer;
            let phoneNumber = data.content[i].answers[6].answer.full;
            let birthdate = data.content[i].answers[10].answer;
            let address = data.content[i].answers[9].answer;

            // Selective fill
            let divs = document.getElementsByClassName("extension-check-box");
            if (divs.length != 0) {
              for (let i = 0; i < divs.length; i++) {
                if (divs[i].children[0].children[0].checked == true) {
                  const qid = divs[i].parentElement.id.split("_").pop();
                  const type = divs[i].children[0].children[0].name
                    .split("-")
                    .pop();

                  function fill(index, value) {
                    let info = document.getElementsByName(
                      "q" + qid + "_" + type + index
                    )[0];
                    if (!info) {
                      info = document.getElementsByName(
                        "q" + qid + "_" + type + qid + index
                      )[0];
                    }

                    if (info) {
                      info.value = value;
                    }
                  }

                  if (type == "name" && name != undefined) {
                    if (name.first != undefined) {
                      fill("[first]", name.first);
                    }
                    if (name.last != undefined) {
                      fill("[last]", name.last);
                    }
                  } else if (email != undefined && type == "email") {
                    fill("", email);
                  } else if (
                    phoneNumber != undefined &&
                    type == "phoneNumber"
                  ) {
                    fill("[full]", phoneNumber);
                  } else if (birthdate != undefined && type == "birthdate") {
                    let birthdateField = document.getElementById(
                      "lite_mode_" + qid
                    );
                    if (birthdateField == null) {
                      let tmp = document.getElementsByTagName("select");

                      for (let i = 0; i < tmp.length; i++) {
                        if (tmp[i].name.indexOf("q" + qid + "_") != -1) {
                          if (tmp[i].name.indexOf("month") != -1) {
                            tmp[i].value = getMonth(birthdate.month);
                          }
                          if (tmp[i].name.indexOf("day") != -1) {
                            if (birthdate.day[0] == "0") {
                              tmp[i].value = birthdate.day[1];
                            } else {
                              tmp[i].value = birthdate.day;
                            }
                          }
                          if (tmp[i].name.indexOf("year") != -1) {
                            tmp[i].value = birthdate.year;
                          }
                        }
                      }
                    } else {
                      birthdateField.value =
                        birthdate.month +
                        "-" +
                        birthdate.day +
                        "-" +
                        birthdate.year;
                    }
                  } else if (type == "address" && address != undefined) {
                    if (address.addr_line1 != undefined) {
                      fill("[addr_line1]", address.addr_line1);
                    }
                    if (address.addr_line2 != undefined) {
                      fill("[addr_line2]", address.addr_line2);
                    }
                    if (address.city != undefined) {
                      fill("[city]", address.city);
                    }
                    if (address.postal != undefined) {
                      fill("[postal]", address.postal);
                    }
                    if (address.state != undefined) {
                      fill("[state]", address.state);
                    }
                  }
                }
              }

              for (let i = 0; i < divs.length; i++) {
                divs[i].remove();
                i--;
              }

              document
                .getElementsByClassName("heading-container-extension")[0]
                .remove();

              break;
            }

            // Fill
            for (let i = 0; i < inputs.length; i++) {
              if (inputs[i].name == undefined) {
                continue;
              }

              const qid = inputs[i].id.split("_").pop();

              // First name
              if (
                name != undefined &&
                name.first != undefined &&
                (inputs[i].name.indexOf("name[first]") != -1 ||
                  inputs[i].name.indexOf("name" + qid + "[first]") != -1)
              ) {
                inputs[i].value = name.first;
              }
              // Last name
              else if (
                name != undefined &&
                name.last != undefined &&
                (inputs[i].name.indexOf("name[last]") != -1 ||
                  inputs[i].name.indexOf("name" + qid + "[last]") != -1)
              ) {
                inputs[i].value = name.last;
              }
              // Email
              else if (
                email != undefined &&
                inputs[i].name.indexOf("mail") != -1
              ) {
                inputs[i].value = email;
              }
              // Phone
              else if (
                phoneNumber != undefined &&
                inputs[i].name.indexOf("phone") != -1
              ) {
                inputs[i].value = phoneNumber;
              }
              // Birthdate
              else if (
                birthdate != undefined &&
                inputs[i].id.indexOf("lite_mode") != -1 &&
                inputs[
                  i
                ].parentElement.parentElement.parentElement.parentElement.children[0].innerText
                  .toLowerCase()
                  .indexOf("birthdate") != -1
              ) {
                inputs[i].value =
                  birthdate.month + "-" + birthdate.day + "-" + birthdate.year;
              }
              // Address

              if (
                address != undefined &&
                address.addr_line1 != undefined &&
                inputs[i].name.indexOf("[addr_line1]") != -1
              ) {
                inputs[i].value = address.addr_line1;
              } else if (
                address != undefined &&
                address.addr_line2 != undefined &&
                inputs[i].name.indexOf("[addr_line2]") != -1
              ) {
                inputs[i].value = address.addr_line2;
              } else if (
                address != undefined &&
                address.city != undefined &&
                inputs[i].name.indexOf("[city]") != -1
              ) {
                inputs[i].value = address.city;
              } else if (
                address != undefined &&
                address.postal != undefined &&
                inputs[i].name.indexOf("[postal]") != -1
              ) {
                inputs[i].value = address.postal;
              } else if (
                address != undefined &&
                address.state != undefined &&
                inputs[i].name.indexOf("[state]") != -1
              ) {
                inputs[i].value = address.state;
              }
            }
          }
          break;
        }
      });
  } else if (params[0] == "check") {
    let questions = params[1];
    let properties = params[2];
    // Clear all messages

    // Clear the messages that are attached to a question
    for (let i = 0; i < questions.length; i++) {
      let parent = document.getElementById("id_" + questions[i].qid);

      for (let j = 0; parent.childNodes && j < parent.childNodes.length; j++) {
        if (parent.childNodes[j].className == "message-container") {
          parent.childNodes[j].remove();
          j--;
        }
      }
    }

    // Clear the messages that are at the top of the page
    let parent = document.getElementsByClassName(
      "clearfix form-section page-section page_1"
    );

    for (let i = 0; i < parent[0].childNodes.length; i++) {
      if (parent[0].childNodes[i].className == "message-container") {
        parent[0].childNodes[i].remove();
        i--;
      }
    }
    chrome.storage.local.get(["categories"], function (result) {
      let results = checkRules(questions, properties, result.categories);
      results.forEach(function (result) {
        const div = document.createElement("div");
        div.className = "message-container";

        // Short message
        const shortMessage = document.createElement("div");
        shortMessage.textContent = result.suggestion.shortMessage;
        shortMessage.className = "short_message";

        // Long message
        const longMessage = document.createElement("span");
        longMessage.textContent = result.suggestion.longMessage;
        longMessage.className = "long_message";

        // Join elements
        div.append(shortMessage);
        shortMessage.append(longMessage);

        if (result.qid != -1) {
          let parent = document.getElementById("id_" + result.qid);
          parent.append(div);
        } else {
          let parent = document.getElementsByClassName(
            "clearfix form-section page-section page_1"
          );
          parent[0].prepend(div);
        }
      });

      // Styling
      let formColor = properties.background;

      let shortMessageFontColor;
      let longMessageFontColor;
      let longMessageBackgroundColor;

      if (
        formColor == "#ffffff" ||
        formColor == "#FFFFFF" ||
        formColor == "#fff"
      ) {
        shortMessageFontColor = "#ffaa00";
        longMessageFontColor = "black";
        longMessageBackgroundColor = "#ffc756";
      } else {
        shortMessageFontColor = invertColor(formColor);
        longMessageBackgroundColor = LightenDarkenColor(
          shortMessageFontColor,
          100
        );
        longMessageFontColor = invertColor(longMessageBackgroundColor, true);
      }

      // Styling
      // #fc984f ffaa00
      const style = document.createElement("style");
      style.textContent =
        `.short_message {
                             text-align: right;
                             color: ` +
        shortMessageFontColor +
        `;
                             font-style: italic;
                            }

                            .message-container{
                              padding: 10px;
                              width: 100%;
                            }

                            .long_message {
                              font-style: normal;
                              font-weight: normal;
                              line-height: 1.8;
                              color:` +
        longMessageFontColor +
        `;
                              padding: 20px;
                              text-align: justify;
                              width: 400px;
                              position: absolute;
                              visibility: hidden;
                              border-style: dashed;
                              border-color: ` +
        shortMessageFontColor +
        `;
                              background-color:` +
        longMessageBackgroundColor +
        `;
                            }

                            .short_message:hover .long_message {
                              visibility: visible;
                            }`;

      document.body.append(style);
    });
  } else if (
    params[0] == "select-fields" &&
    document.getElementsByClassName("extension-check-box").length == 0
  ) {
    console.log("hello");
    let labels = document.getElementsByTagName("label");

    for (let i = 0; i < labels.length; i++) {
      if (labels[i].id.indexOf("sublabel") != -1) {
        continue;
      }

      let type = "";

      if (labels[i].textContent.toLowerCase().indexOf("name") != -1) {
        type = "name";
      } else if (labels[i].textContent.toLowerCase().indexOf("mail") != -1) {
        type = "email";
      } else if (labels[i].textContent.toLowerCase().indexOf("phone") != -1) {
        type = "phoneNumber";
      } else if (labels[i].textContent.toLowerCase().indexOf("birth") != -1) {
        type = "birthdate";
      } else if (labels[i].textContent.toLowerCase().indexOf("address") != -1) {
        type = "address";
      }

      if (type == "") {
        continue;
      }

      const div = document.createElement("div");
      div.className = "extension-check-box";

      let label = document.createElement("LABEL");
      label.className = "container";

      let input = document.createElement("INPUT");
      input.className = "container";
      input.setAttribute("type", "checkbox");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "extension-check-box-" + type);

      let span = document.createElement("SPAN");
      span.className = "checkmark";

      label.append(input);
      label.append(span);

      div.append(label);
      labels[i].prepend(div);
      i++;
    }

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container-extension";

    const heading = document.createElement("div");
    heading.textContent =
      "Check the fields you want to fill and then click the fill button.";
    heading.className = "heading-extension";

    // Join
    headingContainer.append(heading);

    let parent = document.getElementsByClassName("form-section page-section");
    parent[0].prepend(headingContainer);

    const style = document.createElement("style");
    style.textContent = `.extension-check-box{                       
                              display: inline-block;
                          }

                          /* The container */
                        .container {
                          display: block;
                          position: relative;
                          padding-left: 35px;
                          margin-bottom: 18px;
                          cursor: pointer;
                          font-size: 22px;
                          -webkit-user-select: none;
                          -moz-user-select: none;
                          -ms-user-select: none;
                          user-select: none;
                        }

                        /* Hide the browser's default checkbox */
                        .container input {
                          position: absolute;
                          opacity: 0;
                          cursor: pointer;
                          height: 0;
                          width: 0;
                        }

                        /* Create a custom checkbox */
                        .checkmark {
                          position: absolute;
                          top: 0;
                          left: 0;
                          height: 25px;
                          width: 25px;
                          background-color: #eee;
                        }

                        /* On mouse-over, add a grey background color */
                        .container:hover input ~ .checkmark {
                          background-color: #ccc;
                        }

                        /* When the checkbox is checked, add a blue background */
                        .container input:checked ~ .checkmark {
                          background-color: purple;
                        }

                        /* Create the checkmark/indicator (hidden when not checked) */
                        .checkmark:after {
                          content: "";
                          position: absolute;
                          display: none;
                        }

                        /* Show the checkmark when checked */
                        .container input:checked ~ .checkmark:after {
                          display: block;
                        }

                        /* Style the checkmark/indicator */
                        .container .checkmark:after {
                          left: 9px;
                          top: 5px;
                          width: 5px;
                          height: 10px;
                          border: solid white;
                          border-width: 0 3px 3px 0;
                          -webkit-transform: rotate(45deg);
                          -ms-transform: rotate(45deg);
                          transform: rotate(45deg);
                        }
                        
                        .heading-extension {
                          text-align: right;
                          font-style: italic;
                          text-decoration-line: underline;
                          text-underline-offset: 3px;
                        }

                        .heading-container-extension{
                          padding: 10px;
                          width: 100%;
                        }`;

    document.body.append(style);
  }
});
