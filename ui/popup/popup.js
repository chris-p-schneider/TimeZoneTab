console.log('ExtensionTemplate: popup');

function openSidepanel() {
    chrome.runtime.sendMessage({action: 'open_side_panel'});
    window.close();
}

function openExtensionTab() {
    chrome.runtime.sendMessage({action: 'open_extension_tab'});
    window.close();
}

addEventListener('load', () => {
    const sidepanelButton = document.querySelector('#sidepanel-button');
    const newTabButton = document.querySelector('#new-tab-button');
    sidepanelButton.addEventListener('click', openSidepanel);
    newTabButton.addEventListener('click', openExtensionTab);
});
