// ==UserScript==
// @name         色抓自抓種
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sehuatang.org/*
// @run-at         document-end
// ==/UserScript==
(function() {
    'use strict';
    var delay = 2000 //1000=1秒，依照個人網速調整
    console.log(document.querySelector("[id*='aid']").href)
    if (document.querySelector("[id*='aid']"))
    {
        //抓下載連結
        var seedUrl = document.querySelector("[id*='aid']").href;
        //建立下載行為
        var link = document.createElement('a');
        link.href = seedUrl;
        link.download="";
        link.click();
        //delay
        setTimeout(ClosePop , delay);
        function ClosePop(){
            window.close()
        }
    }
})();
