// ==UserScript==
// @name         搶票腳本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tixcraft.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @run-at         document-end
// ==/UserScript==
//window.open('https://tixcraft.com')
//alert(document.getElementsByName('yt0').parentNode);
//alert(document.querySelector('input[name="yt0"]').value);
//alert(window.location.href.match('https://tixcraft.com/activity/game/'))
var $ = window.jQuery;
(function() {
    'use strict';
    //
    if(window.location.href.match('https://tixcraft.com/activity/detail/19_JackyWu')){
        window.location.replace('https://tixcraft.com/activity/game/19_JackyWu');
    }
    //若按鈕出現=點擊，沒出現重整網頁
    if(window.location.href.match('https://tixcraft.com/activity/game/')){
        if (document.querySelector('input[name="yt0"]')) {
            document.querySelector('input[name="yt0"]').click();
        } else {
            location.reload();
        }
    }
       //挑選場次
       if (document.querySelector("[id$='_10']")) {
           document.querySelector("[id$='_10']").click();}
//當範例使用，純數字ID需要UNICODE寫法
//   if (document.querySelector('#\\35 181_13')) {
//       document.querySelector('#\\35 181_13').click();}

       //預設 2張票 & 勾選同意 & focus 驗證碼
    if(window.location.href.match('https://tixcraft.com/ticket/ticket/')){
        $(document).ready(function() {
        $('[id^="TicketForm_ticketPrice_"]').val(2);
        });

        $(document).ready(function() {
        $(document).xpathEvaluate('//*//*[@id="TicketForm"]/div[2]/div[3]/label').click();
        });

        $(document).ready(function() {
        $(document).xpathEvaluate('//*[@id="TicketForm_verifyCode"]').focus();
        });
    }

    //預設 信用卡 & 移動按鈕到上方
    if(window.location.href.match('https://tixcraft.com/ticket/payment')){
        document.getElementById('PaymentForm_payment_id_36').parentNode.click();
        var curr = document.querySelector(".mTop.aC");
        curr.parentNode.prepend(curr);
    }
})();

$.fn.xpathEvaluate = function (xpathExpression) {
   $this = this.first();
   xpathResult = this[0].evaluate(xpathExpression, this[0], null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
   result = [];
   while (elem = xpathResult.iterateNext()) {
      result.push(elem);
   }
   $result = jQuery([]).pushStack( result );
   return $result;
}
