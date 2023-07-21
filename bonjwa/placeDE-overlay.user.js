// ==UserScript==
// @name         Bonjwa r/placeDE Overlay
// @namespace    http://tampermonkey.net/
// @version      5
// @description  try to take over the canvas!
// @author       Chris-GW, nama17, mp1404
// @match        https://garlic-bread.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Chris-GW/pixel/raw/main/placeDE-overlay.user.js
// @downloadURL  https://github.com/Chris-GW/pixel/raw/main/placeDE-overlay.user.js
// ==/UserScript==
let url = "https://raw.githubusercontent.com/Chris-GW/pixel/main/overlay.png"

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("garlic-bread-embed")[0]
        .shadowRoot.children[0]
        .children[0]
        .getElementsByTagName("garlic-bread-camera")[0]
        .children[0]
        .shadowRoot.children[0]
        .appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                return i;
            })())
    }, false);
}
