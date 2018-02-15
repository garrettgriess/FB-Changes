// ==UserScript==
// @name    Garrett's Facebook Changes - Notifications
// @include https://www.facebook.com/GIIndependent/notifications/
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @grant   none
// ==/UserScript==
$(document).ready(function () {
    var words = [
        'like your',
        'likes your',
        'reacted to your'
    ];
    var loop = setInterval(function () {
        $.each(words, function (key, value) {
            $('._4vba:contains(' + value + ')').hide();
        });
    }, 1000);
});