console.log('ExtensionTemplate: popup');

function openSidebar() {
    chrome.runtime.sendMessage({action: 'open_side_panel'});
    window.close();
}

function openExtensionTab() {
    chrome.runtime.sendMessage({action: 'open_extension_tab'});
    window.close();
}

addEventListener('load', () => {
    const sidebarButton = document.querySelector('#sidebar-button');
    const newTabButton = document.querySelector('#new-tab-button');
    sidebarButton.addEventListener('click', openSidebar);
    newTabButton.addEventListener('click', openExtensionTab);
});
