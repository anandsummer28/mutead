// Check if the current site is "hotstar" or "jiocinema" or "youtube"
const hostname = window.location.hostname;
const isHotstar = hostname.includes('hotstar.com');
const isJioCinema = hostname.includes('jiocinema.com');
const isYoutube = hostname.includes('youtube.com');

if (isHotstar || isJioCinema || isYoutube) {
  const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            // for JioCinema
            if (isJioCinema && node.nodeType === Node.ELEMENT_NODE && node.classList.contains('mui-style-5kj990-adTag')) {
              chrome.runtime.sendMessage({ action: 'muteTabVolume' }, (response) => {
                console.log('JioCinema Tab muted!');
              });
            }
            
            // for hotstar
            if (isHotstar && node.getAttribute && node.getAttribute('data-testid') === 'ad-head')  {
              chrome.runtime.sendMessage({ action: 'muteTabVolume' }, (response) => {
                console.log('Hotstar Tab muted!');
              });
            }

            // for Youtube
            if (isYoutube && node.nodeType === Node.ELEMENT_NODE && node.classList.contains('ytp-ad-player-overlay-layout')) {
              chrome.runtime.sendMessage({ action: 'muteTabVolume' }, (response) => {
                console.log('Youtube Tab muted!');
              });
            }
          });

          mutation.removedNodes.forEach((node) => {
            // for Jio Cinema
            if (isJioCinema && node.nodeType === Node.ELEMENT_NODE && node.classList.contains('mui-style-5kj990-adTag')) {
              setTimeout(() => {chrome.runtime.sendMessage({action: 'restoreTabVolume'}, (response) => console.log('JioCinema Tab unmuted!'))}, 2500);
            }

            // for hotstar
            if (isHotstar && node.getAttribute && node.getAttribute('data-testid') === 'ad-details') { 
              setTimeout(() => {chrome.runtime.sendMessage({action: 'restoreTabVolume'}, (response) => console.log('HotStar Tab unmuted!'))}, 0);
            }

             // for Youtube
            if (isYoutube && node.nodeType === Node.ELEMENT_NODE && node.classList.contains('ytp-ad-player-overlay-layout')) {
              setTimeout(() => {chrome.runtime.sendMessage({action: 'restoreTabVolume'}, (response) => console.log('Youtube Tab unmuted!'))}, 0);
            }
          });
        }
      });
    });

  observer.observe(document.body, { childList: true, subtree: true });
}