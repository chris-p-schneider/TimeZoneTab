function getCurrentWindow() {
  return chrome.windows.getCurrent();
}

function getCurrentTab() {
  const [currentTab] = chrome.tabs.query({
    active: true, 
    lastFocusedWindow: true
  });
  return currentTab;
}

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: false })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'open_side_panel') {
    chrome.tabs.query({active: true, currentWindow: true}, 
      ([tab]) => {
        chrome.sidePanel.open({ tabId: tab.id });
      }
    );
  }
  else if (message.action === 'open_extension_tab') {
    chrome.tabs.create({
      url: "./ui/tab/tab.html"
    });
  }
});