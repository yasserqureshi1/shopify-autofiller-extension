function openIndexPage() {
  chrome.tabs.create({ url: chrome.runtime.getURL("pages/index.html") });
}


function autofillPage() {
  chrome.storage.sync.get("formData", function (data) {
    var formData = data.formData;
    if (formData) {
      console.log(formData)

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, formData, function (response) {
          console.log(response)
        })

      })
    }
  })
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#openIndexButton").addEventListener("click", openIndexPage);
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#autofill").addEventListener("click", autofillPage);
});
