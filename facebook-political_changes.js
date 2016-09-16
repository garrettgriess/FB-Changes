// ==UserScript==
// @name    Garrett's Facebook Changes
// @include http://facebook.com/*
// @include http://*.facebook.com/*
// @include https://facebook.com/*
// @include https://*.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @grant   none
// ==/UserScript==
$(document).ready(function () {
  var style = $('<style>.removed_wrapper { margin: 30px 0 50px; padding: 0 12px; text-align: center; } .removed_wrapper span { padding: 4px; background-color: #e9ebee; text-shadow: 1px 1px 0 #ffffff; color: #90949c; } .removed_wrapper div { height: 2px; border-bottom: 1px solid #90949c; box-shadow: 1px 1px #ffffff; margin: -11px; }</style>')
  var words = [
    'Obama',
    'Bernie',
    'Hillary',
    'Clinton',
    'Trump',
    'Republican',
    'Democrat',
    'politic',
    'FOX News',
    'Jill Stein',
    'Bible',
    'Sponsored'
  ];
  $('html > head').append(style);
  function loopForever() {
    setInterval(function () {
      $('#rightCol').css('display', 'none');
      $('#contentArea').css('width', '100%');
      $.each(words, function (key, value) {
        $('._5pat:contains(' + value + ')').replaceWith('<div class="removed_wrapper"><span>REMOVED -' + value + '</span><div></div></div>');
      });
    }, 1000);
  }
  $(loopForever);
});
