// ==UserScript==
// @name    Garrett's Facebook Changes - Political
// @include http://facebook.com/*
// @include http://*.facebook.com/*
// @include https://facebook.com/*
// @include https://*.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @grant   none
// ==/UserScript==
$(document).ready(function () {
  var style = $('<style>.removed_wrapper { margin: 30px 0 50px; padding: 0 12px; text-align: center; } .removed_wrapper span { padding: 4px; background-color: #e9ebee; text-shadow: 1px 1px 0 #ffffff; color: #90949c; } .removed_wrapper div { height: 2px; border-bottom: 1px solid #90949c; box-shadow: 1px 1px #ffffff; margin: -11px; }</style>')
  var words = [
    'Obama',
    'Clinton',
    'Trump',
    'Republican',
    'Democrat',
    'Fox News',
    'Bible',
    'Sponsored',
    'People You May Know'
  ];
  $('html > head').append(style);
  function loopForever() {
    setInterval(function () {
      $('#rightCol').css('display', 'none');
      $('#contentArea').css('width', '100%');
      $('._5qxm').css('background-color', '#ffffff');
      $('._5z6o').css('width', '25%');
      $('._4a6n').css('color', '#000000');
      $('._4a6n').css('font-size', '14px');
      $('._4a6n').css('font-weight', 'normal');
      $('._4a6n').css('padding', '0');
      $.each(words, function (key, value) {
        $('._5pat:contains(' + value + ')').replaceWith('<div class="removed_wrapper"><span>REMOVED -' + value + '</span><div></div></div>');
      });
    }, 1000);
  }
  $(loopForever);
});
