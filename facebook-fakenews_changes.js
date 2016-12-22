// ==UserScript==
// @name    Garrett's Facebook Changes - Fake News
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
    '21stcenturywire.com',
    '70news.wordpress.com',
    'abcnews.com.co',
    'activistpost.com',
    'addictinginfo.org',
    'americannews.com',
    'americannewsx.com',
    'amplifyingglass.com',
    'anonews.co',
    'beforeitsnews.com',
    'bigamericannews.com',
    'bipartisanreport.com',
    'bluenationreview.com',
    'breitbart.com',
    'burrardstreetjournal.com',
    'callthecops.net',
    'christiantimes.com',
    'christwire.org',
    'chronicle.su',
    'civictribune.com',
    'clickhole.com',
    'coasttocoastam.com',
    'collective-evolution.com',
    'consciouslifenews.com',
    'conservativeoutfitters.com',
    'countdowntozerotime.com',
    'counterpsyops.com',
    'creambmp.com',
    'dailybuzzlive.com',
    'dailycurrant.com',
    'dailynewsbin.com',
    'dcclothesline.com',
    'demyx.com',
    'denverguardian.com',
    'derfmagazine.com',
    'disclose.tv',
    'duffelblog.com',
    'duhprogressive.com',
    'empireherald.com',
    'empirenews.net',
    'empiresports.co',
    'en.mediamass.net',
    'endingthefed.com',
    'enduringvision.com',
    'flyheight.com',
    'fprnradio.com',
    'freewoodpost.com',
    'geoengineeringwatch.org',
    'globalassociatednews.com',
    'globalresearch.ca',
    'gomerblog.com',
    'govtslaves.info',
    'gulagbound.com',
    'hangthebankers.com',
    'humansarefree.com',
    'huzlers.com',
    'ifyouonlynews.com',
    'infowars.com',
    'intellihub.com',
    'itaglive.com',
    'jonesreport.com',
    'lewrockwell.com',
    'liberalamerica.org',
    'libertymovementradio.com',
    'libertytalk.fm',
    'libertyvideos.org',
    'lightlybraisedturnip.com',
    'nationalreport.net',
    'naturalnews.com',
    'ncscooper.com',
    'newsbiscuit.com',
    'newsexaminer.com',
    'newslo.com',
    'newsmutiny.com',
    'newswire-24.com',
    'nodisinfo.com',
    'now8news.com',
    'nowtheendbegins.com',
    'occupydemocrats.com',
    'other98.com',
    'pakalertpress.com',
    'politicalblindspot.com',
    'politicalears.com',
    'politicops.com',
    'politicususa.com',
    'prisonplanet.com',
    'private-eye.co.uk',
    'react365.com',
    'realfarmacy.com',
    'realnewsrightnow.com',
    'redflagnews.com',
    'redstate.com',
    'rilenews.com',
    'rockcitytimes.com',
    'satiratribune.com',
    'stuppid.com',
    'theblaze.com',
    'thebostontribune.com',
    'thedailysheeple.com',
    'thedcgazette.com',
    'thefreethoughtproject.com',
    'thelapine.ca',
    'thenewsnerd.com',
    'theonion.com',
    'theracketreport.com',
    'therundownlive.com',
    'thespoof.com',
    'theuspatriot.com',
    'truthfrequencyradio.com',
    'twitchy.com',
    'unconfirmedsources.com',
    'USAToday.com.co',
    'usuncut.com',
    'veteranstoday.com',
    'wakingupwisconsin.com',
    'weeklyworldnews.com',
    'wideawakeamerica.com',
    'winningdemocrats.com',
    'witscience.org',
    'wnd.com',
    'worldnewsdailyreport.com',
    'worldtruth.tv',
    'yournewswire.com',
    'Sponsored',
    'People You May Know',
    'foxnews.com'
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
        $('._5pat:contains(' + value + ')').not('._5pat:contains("Garrett Griess")').replaceWith('<div class="removed_wrapper"><span>REMOVED -' + value + '</span><div></div></div>');
      });
    }, 1000);
  }
  $(loopForever);
});