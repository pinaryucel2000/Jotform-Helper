chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  setTimeout(function () {
    callback("");
  }, 2000);
  return true; //This is the point, noreturn true, The above returned undefined instead of"hi!"
});
