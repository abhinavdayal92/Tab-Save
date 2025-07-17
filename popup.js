document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-button');
    const sessionNameInput = document.getElementById('session-name-input');
    const sessionsList = document.getElementById('sessions-list');

    function displaySavedSessions() {
    sessionsList.innerHTML = '';

    chrome.storage.local.get(null, function(items) {
        for (const sessionName in items) {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = 'session-item';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = sessionName;
        nameSpan.className = 'session-name';

        const restoreButton = document.createElement('button');
        restoreButton.textContent = 'Restore';
        restoreButton.className = 'restore-btn';
        restoreButton.dataset.sessionName = sessionName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.dataset.sessionName = sessionName;

        sessionDiv.appendChild(nameSpan);
        sessionDiv.appendChild(restoreButton);
        sessionDiv.appendChild(deleteButton);

        sessionsList.appendChild(sessionDiv);
        }
    });
    }

    saveButton.addEventListener('click', function() {
    const sessionName = sessionNameInput.value.trim();
    if (!sessionName) {
        alert('Please enter a name for the session.');
        return;
    }

    chrome.tabs.query({ currentWindow: true, pinned: false }, function(tabs) {
        const urlsToSave = tabs.map(tab => tab.url);
        const tabIdsToClose = tabs.map(tab => tab.id);

        chrome.storage.local.set({ [sessionName]: urlsToSave }, function() {
        console.log(`Session '${sessionName}' has been saved!`);
        chrome.tabs.remove(tabIdsToClose); 
        sessionNameInput.value = '';
        displaySavedSessions();
        });
    });
    });

    sessionsList.addEventListener('click', function(event) {
    const target = event.target;
    const sessionName = target.dataset.sessionName;

    if (!sessionName) return;

    if (target.classList.contains('restore-btn')) {
        chrome.storage.local.get(sessionName, function(data) {
        if (data[sessionName]) {
            chrome.windows.create({ url: data[sessionName] });
        }
        });
    }

    if (target.classList.contains('delete-btn')) {
        if (confirm(`Are you sure you want to delete the session "${sessionName}"?`)) {
        chrome.storage.local.remove(sessionName, function() {
            console.log(`Session '${sessionName}' deleted.`);
            displaySavedSessions();
        });
        }
    }
    });

    displaySavedSessions();
});
