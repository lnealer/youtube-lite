
function main() {
    var cleanYoutubeTimer = setInterval(() => {cleanYoutube()}, 250);
    setTimeout(() => { clearInterval(cleanYoutubeTimer);}, 5000);
}

function cleanYoutube(timer) {
    let elementsToRemove = getElementsToRemove();
    if ( elementsToRemove.length > 0) {
        remove(elementsToRemove)
    }
}

function getElementsToRemove() {
    let elementsToRemove = [...document.getElementsByClassName('style-scope ytd-rich-grid-renderer')];
    elementsToRemove.push(...document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer'))
    return elementsToRemove;
}


function remove(elementsToRemove) {
  [...elementsToRemove].forEach(function(element) {
    if (element) {
        element.remove();
    }
  })
}

main()
