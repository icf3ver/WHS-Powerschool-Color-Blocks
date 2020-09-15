// defaults
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
      orange_1: 'ORANGE',
      orange_2: '---',
      yellow_1: 'YELLOW',
      yellow_2: '---',
      green_1: 'GREEN',
      green_2: '---',
      blue_1: 'BLUE',
      blue_2: '---',
      tan_1: 'TAN',
      tan_2: '---',
      red_1: 'RED',
      red_2: '---',
      purple_1: 'PURPLE',
      purple_2: '---',
      grey_1: 'GREY',
      grey_2: '---',
    });
});

// When the tab is updated update the content style
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.url != null && tab.url.match('wellesley.powerschool.com')) {
    chrome.tabs.executeScript(null, {file: 'content.js'});
  }
});