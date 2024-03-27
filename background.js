chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'muteTabVolume') {
        chrome.tabs.update(sender.tab.id, {
            "muted": true
          });
        sendResponse({}); // Indicate asynchronous response
        return true; // Indicate asynchronous response        
    } else if (message.action === 'restoreTabVolume') {
        chrome.tabs.update(sender.tab.id, {
            "muted": false
          });
        sendResponse({}); // Indicate asynchronous response
        return true; // Indicate asynchronous response 
    } else {
        sendResponse({});
        return true;
    }
  });
  