document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-button');
    const restoreButton = document.getElementById('restore-button');

    saveButton.addEventListener('click', function() {
    chrome.tabs.query({ currentWindow: true, pinned: false }, function(tabs) {
        const tabsToSave = tabs.map(tab => tab.url);
        const tabIdsToClose = tabs.map(tab => tab.id);

        chrome.storage.local.set({ 'saved_tabs': tabsToSave }, function() {
        console.log('Tabs have been saved!');
        chrome.tabs.remove(tabIdsToClose);
        });
        });
    });

    restoreButton.addEventListener('click', function() {
    chrome.storage.local.get('saved_tabs', function(data) {
        if (data.saved_tabs) {
        data.saved_tabs.forEach(function(url) {
            chrome.tabs.create({ url: url });
        });
        }
    })  ;
    });
});
