var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "http",
        host: "193.124.93.177",
        port: parseInt("7951")
      },
      bypassList: ["193.124.93.177:7951"]
    }
  };

chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

function callbackFn(details) {
return {
    authCredentials: {
        username: "irp3010519",
        password: "ilYz70jJcI"
    }
};
}

chrome.webRequest.onAuthRequired.addListener(
        callbackFn,
        {urls: ["<all_urls>"]},
        ['blocking']
);
