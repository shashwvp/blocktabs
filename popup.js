async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query({}, function() {});
    return tab;
  }

getCurrentTab().then(tabList => alert(tabList[0]));