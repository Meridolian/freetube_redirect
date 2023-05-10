chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    // check if url match youtube domain
    if (details.url.startsWith("https://www.youtube.com")) {
        // open freetube in case it is not open yet
        chrome.tabs.update({url: "freetube://"});
        // wait 750ms to be sure app is running
        // then open youtube url on freetube
        setTimeout(() => {
            chrome.tabs.update({url: "freetube://" + (details.url)});
        }, 750);
        // prevent browser from loading the youtube page
        return { cancel: true };
    }
});
