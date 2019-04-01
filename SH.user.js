// ==UserScript==
// @name         色花自抓種
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sehuatang.org/*
// @grant        none
// @run-at         document-end
// ==/UserScript==

(function() {
    'use strict';
console.log(document.querySelector("[id*='aid']").href)
    if (document.querySelector("[id*='aid']"))
        {document.querySelector("[id*='aid']").click();
         window.open('', '_self', '').close();
        }
})();
