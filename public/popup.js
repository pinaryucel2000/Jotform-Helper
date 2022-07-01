document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .getElementById("check-button")
      .addEventListener("click", onclick, false);

    function onclick() {
      const decrypt = (encryptedHex) => {
        const key = [5, 2, 9, 2, 0, 1, 6, 8, 4, 9, 54, 14, 72, 44, 61, 73];
        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        return decryptedText;
      };

      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.indexOf("/build/") != -1) {
          const formID = tabs[0].url.split("/").pop();

          chrome.storage.local.get(["APIKey"], function (result) {
            const apiKey = decrypt(result.APIKey);
            const apiCallGetQuestions =
              "https://api.jotform.com/form/" +
              formID +
              "/questions?apiKey=" +
              apiKey;

            const apiCallGetProperties =
              "https://api.jotform.com/form/" +
              formID +
              "/properties?apiKey=" +
              apiKey;

            fetch(apiCallGetQuestions)
              .then((response) => response.json())
              .then((questions) => {
                fetch(apiCallGetProperties)
                  .then((response) => response.json())
                  .then((properties) => {
                    let params = [];
                    params.push("check");
                    params.push(Object.values(questions.content));
                    params.push(properties.content);
                    chrome.tabs.sendMessage(tabs[0].id, params, decrypt);
                  });
              });
          });
        }
      });
    }
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .getElementById("fill-button")
      .addEventListener("click", onclick, false);

    function onclick() {
      const decrypt = (encryptedHex) => {
        const key = [5, 2, 9, 2, 0, 1, 6, 8, 4, 9, 54, 14, 72, 44, 61, 73];
        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        return decryptedText;
      };

      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.indexOf("/form/") != -1) {
          chrome.storage.local.get(["APIKey"], function (result) {
            const apiKey = decrypt(result.APIKey);
            let params = [];
            params.push("fill");
            params.push(apiKey);
            chrome.tabs.sendMessage(tabs[0].id, params, decrypt);
          });
        }
      });
    }

    function setInfo(res) {}
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .getElementById("select-fields-button")
      .addEventListener("click", onclick, false);

    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.indexOf("/form/") != -1) {
          let params = [];
          params.push("select-fields");
          chrome.tabs.sendMessage(tabs[0].id, params, setInfo);
        }
      });
    }

    function setInfo(res) {}
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .getElementById("preferences-button")
      .addEventListener("click", onclick, false);

    function onclick() {
      chrome.runtime.openOptionsPage();
    }
  },
  false
);

document.addEventListener("DOMContentLoaded", () => {
  chrome.extension.sendMessage({ action: "ping" }, function (resp) {
    console.log(JSON.stringify(resp));
  });
});
