chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("pages/index.html");
    let tab = await chrome.tabs.create({ url });
    console.log(`Created tab ${tab.id}`);
});