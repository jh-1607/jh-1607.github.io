// Script that makes the website do funny things (Soon)

// Root path
var root = window.location.href;

// Handles reset button functionality.
function reset() {
    if (location.pathname.includes("pages")) {
        window.location = window.location.href.split("pages")[0] + "index.html";
    } else {
        // Do nothing.
        // TODO: Add stuff.
    }
}

