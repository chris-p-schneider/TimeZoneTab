console.log('ExtensionTemplate: popup');

function openSidebar() {
    chrome.runtime.sendMessage({action: 'open_side_panel'});
    window.close();
}

addEventListener('load', () => {
    const sidebarButton = document.querySelector('#sidebar-button');
    sidebarButton.addEventListener('click', openSidebar);
});
