const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('mui-style-5kj990-adTag')) {
            chrome.runtime.sendMessage({ action: 'muteTabVolume' }, (response) => {
              console.log('Tab muted!');
            });
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('mui-style-5kj990-adTag')) {
            setTimeout(() => {chrome.runtime.sendMessage({action: 'restoreTabVolume'}, (response) => console.log('Tab unmuted!'))}, 2500);
          }
        });
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  