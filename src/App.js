/*global chrome*/
import "./style/App.css";
import React, { useEffect, useState } from "react";
import FormBuilding from "./components/options/form-building/FormBuilding";
import FormFilling from "./components/options/form-filling/FormFilling";
import { categories } from "./components/options/form-building/categories";

function App() {
  const [settingsPage, setSettingsPage] = useState("building");

  const getRule = (categories, categoryID, ruleID) => {
    if (categories == undefined) {
      return 0;
    }
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id == categoryID) {
        for (let j = 0; j < categories[i].rules.length; j++) {
          if (categories[i].rules[j].id == ruleID) {
            return categories[i].rules[j];
          }
          break;
        }
        break;
      }
    }
    return 0;
  };

  // Initialize rule activity preferences.
  useEffect(() => {
    chrome.storage.local.get(["categories"], function (result) {
      let tmpCategories = [];
      for (let i = 0; i < categories.length; i++) {
        let tmpRules = [];
        for (let j = 0; j < categories[i].rules.length; j++) {
          if (
            getRule(
              result.categories,
              categories[i].id,
              categories[i].rules[j].id
            ) == 0
          ) {
            tmpRules.push({ id: categories[i].rules[j].id, active: true });
          } else {
            tmpRules.push(result.categories[i].rules[j]);
          }
        }
        tmpCategories.push({ id: categories[i].id, rules: tmpRules });
      }
      chrome.storage.local.set({ categories: tmpCategories });
    });
  }, []);

  return (
    <div>
      {settingsPage === "building" ? (
        <FormBuilding
          setSettingsPage={setSettingsPage}
          settingsPage={settingsPage}
        />
      ) : (
        <FormFilling
          setSettingsPage={setSettingsPage}
          settingsPage={settingsPage}
        />
      )}
    </div>
  );
}

export default App;
