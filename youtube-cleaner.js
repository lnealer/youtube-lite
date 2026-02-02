var cleanYoutubeTimer;
function main() {
    cleanYoutubeTimer = setInterval(() => {cleanYoutube()}, 500);
    setTimeout(() => { clearInterval();}, 3000);
}

function cleanYoutube() {
    let elementsToRemove = [...document.getElementsByClassName('style-scope ytd-rich-grid-renderer')];
    elementsToRemove.push(...document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer'));
    if ( elementsToRemove.length > 0) {
        remove(elementsToRemove)
    }
}

function remove(elementsToRemove) {
    [...elementsToRemove].forEach(function(element) {
    if (element) {
        element.remove();
    }
  })
}

function shouldClean(url) {
    var exclude_matches = ['https://www.youtube.com/feed/subscriptions', 'https://www.youtube.com/@.*/videos']
    return exclude_matches.every((p) => !url.match(p));
}

function onNavigation(e) {
    if (cleanYoutubeTimer) {
        clearInterval(cleanYoutubeTimer);
    }
    if (!shouldClean(e.destination.url)) {
        return;
    }
    main();
}


navigation.addEventListener("navigate", e => {onNavigation(e);});
if (shouldClean(window.location.href)) {
    main()
}



