function checkRules(questions, properties, preferences) {
  const getRule = (categoryID, ruleID) => {
    for (let i = 0; i < preferences.length; i++) {
      if (preferences[i].id == categoryID) {
        for (let j = 0; j < preferences[i].rules.length; j++) {
          if (preferences[i].rules[j].id == ruleID) {
            return preferences[i].rules[j];
          }
        }
        break;
      }
    }
    return 0;
  };

  let suggestions = [];

  // Checks if there exists a header with a non-empty subheader in the form.
  let greetingExists = false;

  // Count of headers in the form. Subheader can be empty.
  let headerCount = 0;

  questions.forEach(function (question) {
    let type = question.type;

    // Ask one thing at a time (category 4 rule 1)
    if (
      getRule(4, 1).active &&
      // Short text question and long text question
      (((type == "control_textbox" || type == "control_textarea") &&
        question.text.indexOf(" and ") != -1) ||
        // Single choice or yes no question with yes no options
        ((type == "control_radio" || type == "control_yesno") &&
          question.text.indexOf(" and ") != -1 &&
          question.options.toLowerCase().indexOf("yes") != -1 &&
          question.options.toLowerCase().indexOf("no") != -1))
    ) {
      suggestions.push({ qid: question.qid, suggestion: getMessages(4, 1) });
    }

    // Greet your respondents with a title and an introduction
    if (!greetingExists && type == "control_head" && question.subHeader != "") {
      greetingExists = true;
    }

    if (type == "control_head") {
      headerCount++;
    }

    // Identify your form fields

    if (getRule(1, 4).active && type == "control_dropdown") {
      let countOfOptions = 0;
      for (let i = 0; i < question.options.length; i++) {
        if (question.options[i] == "|") {
          countOfOptions++;
        }
      }
      countOfOptions++;

      if (countOfOptions < 5) {
        suggestions.push({
          qid: question.qid,
          suggestion: getMessages(1, 4),
        });
      }
    }

    // Use contracted versions of words
    if (
      getRule(2, 3).active &&
      ((question.text != undefined &&
        (question.text.indexOf(" am ") != -1 ||
          question.text.indexOf(" is ") != -1 ||
          question.text.indexOf(" are ") != -1)) ||
        (question.subHeader != undefined &&
          (question.subHeader.indexOf(" am ") != -1 ||
            question.subHeader.indexOf(" is ") != -1 ||
            question.subHeader.indexOf(" are ") != -1)))
    ) {
      suggestions.push({ qid: question.qid, suggestion: getMessages(2, 3) });
    }

    // Give shortcuts: Field label
    if (
      getRule(4, 2).active &&
      (question.text == undefined || question.text == "")
    ) {
      suggestions.push({ qid: question.qid, suggestion: getMessages(4, 2) });
    }

    // Use the predefined form element
    const questionTextLowerCase = question.text.toLowerCase();

    if (
      getRule(5, 1).active &&
      (question.type == "control_textbox" ||
        question.type == "control_textarea") &&
      (questionTextLowerCase.indexOf("name") != -1 ||
        questionTextLowerCase.indexOf("date") != -1 ||
        questionTextLowerCase.indexOf("mail") != -1 ||
        questionTextLowerCase.indexOf("phone") != -1 ||
        questionTextLowerCase.indexOf("address") != -1)
    ) {
      suggestions.push({ qid: question.qid, suggestion: getMessages(5, 1) });
    }

    // Use pictures of your products
    if (
      getRule(6, 2).active &&
      (question.type == "control_payment" || question.type == "control_paypal")
    ) {
      let payment = document.getElementById("id_" + question.qid);
      let products = payment.getElementsByClassName(
        "form-product-item-detail new_ui"
      );

      for (let i = 0; i < products.length; i++) {
        let backgroundImage =
          products[i].childNodes[1].childNodes[0].style.backgroundImage;

        if (
          backgroundImage.indexOf("https://jotform.com/images/") != -1 ||
          backgroundImage.indexOf("null") != -1 ||
          backgroundImage.indexOf("https://cdn.jotfor.ms/assets/") != -1
        ) {
          suggestions.push({
            qid: question.qid,
            suggestion: getMessages(6, 2),
          });
          break;
        }
      }
    }

    // Eliminate passive sentences
    if (
      getRule(2, 1).active &&
      ((question.text != undefined && isPassive(question.text)) ||
        (question.subHeader != undefined && isPassive(question.subHeader)))
    ) {
      suggestions.push({ qid: question.qid, suggestion: getMessages(2, 1) });
    }
  });

  // Never forget “Thanks” page
  if (
    getRule(1, 6).active &&
    properties.thanktext.toLowerCase().indexOf("thank you") == -1
  ) {
    suggestions.push({ qid: -1, suggestion: getMessages(1, 6) });
  }

  // Consider the colors
  let formColor;
  if (properties.background.split("#").pop() == "fff") {
    formColor = hexToRgb("ffffff");
  } else {
    formColor = hexToRgb(properties.background.split("#").pop());
  }

  let fontColor = hexToRgb(properties.fontcolor.split("#").pop());

  if (getRule(3, 6).active && contrast(formColor, fontColor) < 4.5) {
    suggestions.push({ qid: -1, suggestion: getMessages(3, 6) });
  }

  if (getRule(1, 1).active && !greetingExists) {
    suggestions.push({ qid: -1, suggestion: getMessages(1, 1) });
  }

  if (getRule(1, 3).active && headerCount >= 2) {
    suggestions.push({ qid: -1, suggestion: getMessages(1, 3) });
  }

  return suggestions;
}
