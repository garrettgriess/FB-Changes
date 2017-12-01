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
	if (window.top == window.self) {
		var words = [
			'Trump',
			'President',
			'Sponsored',
			'Suggested Post',
			'People You May Know',
			'Topics to Follow',
			'Buy and Sell Groups Near You',
			'Events You May Like',
			'Facebook Sports',
			'are now friends.',
			'years of friendship on Facebook!',
			'foxnews.com',
			'Fox News',
			'bible',
			'jesus',
			
			'16WMPO.com',
			'24online.news',
			'24wpn.com',
			'24x365live.com',
			'247NewsMedia.com',
			'a-news24.com',
			'ABCNews.com.co',
			'actualidadpanamericana.com',
			'AlabamaObserver.com',
			'AmericanFlavor.news',
			'AmericanNews.com',
			'AmericanPeopleNetwork.com',
			'AmericanPoliticNews.co',
			'AmericanPresident.co',
			'AmericanToday.us',
			'AMPosts.com',
			'ANews24.org/',
			'AngryPatriotMovement.com',
			'Anonjekloy.tk',
			'AntiNews.com',
			'ArmyUSANews.com',
			'AsAmericanAsApplePie.org',
			'AssociatedMediaCoverage.com',
			'Attitude.co.uk',
			'Aurora-News.us',
			'AwarenessAct.com',
			'BabylonBee.com',
			'BB4SP.com',
			'BeforeItsNews.com',
			'BenjaminFulford.typepad.com',
			'BestThings.us',
			'BlackInsuranceNews.com',
			'Blog.VeteranTV.net',
			'BlueLineStrong.net',
			'BlueVision.news',
			'BlueVisionPost.com',
			'BostonLeader.com',
			'BreakingNews247.net',
			'BreakingNews365.net',
			'BreakingNewsBlast.com',
			'BreakingTop.world',
			'BostonTribune.com',
			'BuzzFeedUSA.com',
			'CannaSOS.com',
			'Channel18News.com',
			'Channel24news.com',
			'ChristianTimesNewspaper.com',
			'ChristianToday.info',
			'CivicTribune.com',
			'CivicTribune.com',
			'City-Herald.com',
			'ClashDaily.com',
			'CNewsGo.com',
			'CNN-Business-News.ga',
			'CNNews3.com',
			'Coed.com',
			'CoffeeBreakForYou.com',
			'Conservative7.com',
			'Conservative101.com',
			'ConservativeArmy88.com',
			'ConservativeDailyPost.com',
			'ConservativeFlashNews.com',
			'ConservativeInfoCorner.com',
			'ConservativePaper.com',
			'ConservativePoliticus.com',
			'ConservativeSpirit.com',
			'ConservativeView.info',
			'DailyBuzzLive.com',
			'DailyFeed.news',
			'DailyInfoBox.com',
			'DailyNews10.com',
			'DailyNews5.com',
			'DailyNewsPosts.info',
			'DailySidNews.com',
			'DailySnark.com',
			'DailyStormer.com',
			'DailySurge.com',
			'DailyThings.world',
			'DailyUSAUpdate.com',
			'DamnLeaks.com',
			'DefenseUsa.club',
			'DemocraticMoms.com',
			'DemocraticUnderground.com',
			'DenverInquirer.com',
			'DepartedMe.com',
			'DepartedMedia.com',
			'Disclose.tv',
			'DIYHours.net',
			'DonaldTrumpPOTUS45.com',
			'Duffelblog.com',
			'EmpireHerald.com',
			'EmpireNews.net',
			'EmpireSports.co',
			'En-Volve.com',
			'ENHLive.com',
			'FactRider.com',
			'FederalistTribune.com',
			'FedsAlert.com',
			'FirstPost.com',
			'FlashNewsCorner.com',
			'FloridaSunPost.com',
			'FocusNews.info',
			'ForFreedomWorld.com',
			'Fox-News24.com',
			'FreedomDaily.com',
			'FreedomCrossroads.us',
			'FreedomsFinalStand.com',
			'FreedomJunkshun.com',
			'FreeInfoMedia.com',
			'FreeRepublic.com',
			'FreeWoodPost.com',
			'FreshDailyReport.com',
			'GiveMeLiberty01.com',
			'GlobalPoliticsNow.com',
			'GlobalRevolutionNetwork.com',
			'Guerilla.news',
			'GummyPost.com',
			'HalfwayPost.com',
			'HealthyCareAndBeauty.com',
			'HealthyWorldHouse.com',
			'HeightPost.com',
			'HigherPerspectives.com',
			'HoustonChronicle-TV.com',
			'Huzlers.com',
			'IdeaSpots.com',
			'ILoveNativeAmericans.us',
			'IndiaTimes.com',
			'IndependentMinute.com',
			'InterestingDailyNews.com',
			'Inverse.com',
			'IsThatLegit.com',
			'JewsNews.co.il',
			'KBC14.com',
			'KCST7.com',
			'KF13.com',
			'KMT11.com',
			'Konkonsagh.biz',
			'KRB7.com',
			'KTY24news.com',
			'KY12News.com',
			'LadyLibertysNews.com',
			'LastDeplorables.com',
			'LearnProgress.org',
			'Liberty-Courier.com',
			'LiberalPlug.com',
			'LibertyAlliance.com',
			'Local31News.com',
			'LondonWebNews.com',
			'MacedoniaOnline.eu',
			'MadWorldNews.com',
			'MajorThoughts.com',
			'MediaMaxZone.com',
			'Mentor2day.com',
			'MetropolitanWorlds.com',
			'Minds.com',
			'MIssissippiHerald.com',
			'Nation.com.pk',
			'NationalReport.net',
			'NativeAmericans.us',
			'NativeStuff.us',
			'NBC.com.co',
			'NeonNettle.com',
			'Nephef.com',
			'NewPoliticsToday.com',
			'News4KTLA.com',
			'NewsBreakHere.com',
			'NewsForMeToday.com',
			'NewsBreaksHere.com',
			'NewsBreakingsPipe.com',
			'NewsBySquad.com',
			'NewsConservative.com',
			'NewsDaily12.com',
			'NewsExaminer.net',
			'NewsFeedHunter.com',
			'NewsForMeToday.com',
			'NewsLeak.co',
			'Newslo.com',
			'NewsJustForYou1.blogspot.com',
			'NewsOfTrump.com',
			'NewsPhD.com',
			'NewsUpToday.com',
			'NewzMagazine.com',
			'NNettle.com',
			'NotAllowedTo.com',
			'Now8News.com',
			'Nunadisbereel.com',
			'NYDailyNews-TV.com',
			'ObserverOnline.news',
			'OnePoliticalPlaza.com',
			'OurLandoftheFree.com',
			'OpenMagazines.com',
			'PatriotCrier.com',
			'PatriotUSA.website',
			'Persecutes.com',
			'PoliticalMayhem.news',
			'Politicalo.com',
			'Politicass.com',
			'Politicono.com',
			'Politicops.com',
			'Politicot.com',
			'PoliticsPaper.com',
			'PoliticsUSANews.com',
			'PositiveDaily.com',
			'Postcard.news',
			'President45DonaldTrump.com',
			'Prntly.com',
			'ProudLeader.com',
			'PuppetStringNews.com',
			'React365.com',
			'ReadConservatives.news',
			'RealNewsRightNow.com',
			'RearFront.com',
			'RedCountry.us',
			'RedInfo.us',
			'RedPolitics.us',
			'RedRockTribune.com',
			'ReflectionofMind.org',
			'Religionlo.com',
			'ReligionMind.com',
			'Revolutions2040.com',
			'Rogue-Nation3.com',
			'RumorJournal.com',
			'SatiraTribune.com',
			'Smag31.com',
			'Snoopack.com',
			'SocialEverythings.com',
			'SouthernConservativeExtra.com',
			'Spinzon.com',
			'States-TV.com',
			'StillnessInTheStorm.com',
			'StGeorgeGazette.com',
			'Success-Street.com',
			'SupremePatriot.com',
			'TDTAlliance.com',
			'TeaParty.org',
			'TeddyStick.com',
			'TEOinfo.com',
			'ThatViralFeed.net',
			'The-Insider.co',
			'ThePremiumNews.com',
			'The-Postillon.com',
			'TheBigRiddle.com',
			'TheConservativeTreehouse.com',
			'TheExaminer.site',
			'TheGatewayPundit.com',
			'The-Global-News.com',
			'TheInternetPost.net',
			'TheLastLineOfDefense.org',
			'TheMiamiGazette.com',
			'TheMoralOfTheStory.us',
			'TheNationalMarijuanaNews.com',
			'TheNet24h.com',
			'TheNewYorkEvening.com',
			'ThePoliticalInsider.com',
			'TheRacketReport.com',
			'TheRealShtick.com',
			'TheRightists.com',
			'TheRooster.com',
			'ThePeoplesCube.com',
			'TheSeattleTribune.com',
			'TheSmokersClub.com',
			'TheSolExchange.com',
			'TheTrumpMedia.com',
			'TheUSA-News.com',
			'TheUSAConservative.com',
			'TheWashingtonPress.com',
			'TheWorldUpdate.com',
			'ThirdEstateNewsGroup.com',
			'Times.com.mx',
			'TMZWorldNews.com',
			'TopInfoPost.con',
			'TrueAmericans.me',
			'TrueTrumpers.com',
			'UndergroundNewsReport.com',
			'UniversePolitics.com',
			'UrbanImageMagazine.com',
			'Urdoca.com',
			'USTruthWIre.com',
			'USA360-TV.com',
			'USA-Radio.com',
			'USA-Television.com',
			'USADailyInfo.com',
			'USADailyPost.us',
			'USADailyTime.com',
			'USADoseNews.com',
			'USAFirstInformation.com',
			'USANews4U.us',
			'USANewsToday.com',
			'USAPoliticsNow.com',
			'USAPolitics24hrs.com',
			'USAPoliticsToday.com',
			'USAPoliticsZone.com',
			'USASnich.com',
			'USATodayNews.me',
			'USAWorldBox.com',
			'USHealthyAdvisor.com',
			'USHealthyLife.com',
			'USHerald.com',
			'USInfoNews.com',
			'USADailyThings24.com',
			'USANewsflash.com',
			'USANewsHome.com',
			'USPoliticsInfo.com',
			'USPOLN.com',
			'USPostman.com',
			'USASupreme.com',
			'USAConservativeReport.com',
			'VeteransForDonaldTrump.com',
			'ViralActions.com',
			'VoxTribune.com',
			'WashingtonEvening.com',
			'WashingtonFeed.com',
			'WashingtonPost.com.co',
			'WazaNews.tk',
			'WeConservative.com',
			'WeekendPoliticalNews.com',
			'WeLoveNative.com',
			'WeTheProudPatriots.com',
			'Werk35.com',
			'WestfieldPost.com',
			'WhatDoesItMean.com',
			'WhyDontYouTryThis.com',
			'WorldNewsCircle.com',
			'WorldNewsDailyReport.com',
			'WorldPoliticsNow.com',
			'World.Politics.com',
			'WorldTruth.tv',
			'WRPM33.com',
			'WY21news.com',
			'YourNewsWire.com'
		];
		var style = $('<style>#contentArea { width: 100% !important; left: 0; } #rightCol { display: none; }</style><style>.removedNote { z-index:9999; margin: 30px 0 50px; padding: 0 12px; text-align: center; cursor: pointer; } .removedNote span { padding: 4px; background-color: #e9ebee; text-shadow: 1px 1px 0 #ffffff; color: #90949c; } .removedNote div { height: 2px; border-bottom: 1px solid #90949c; box-shadow: 1px 1px #ffffff; margin: -11px; }</style>');
		var ggf = 0;
		var ggi = 0;
		$('html > head').append(style);
		$('body').append('<div id="count" style="position:fixed;top:2px;right:10px;color:#000000;font-weight:bold;opacity:0.4;z-index:9999;cursor:pointer;font-size:2.5em;letter-spacing:-4px;">0</div>');
		$('._2s1y').css({
			'background': '#00779b repeating-linear-gradient(350deg, #009ecf 0px, #009ecf 40px, #00779b 40px, #00779b 80px, #006482 80px, #006482 120px, #005069 120px, #005069 160px, #006482 160px, #006482 200px, #00779b 200px, #00779b 240px) repeat fixed 0 0',
			'opacity': '0.85'
		});
		//Un-Hide Post
		$(document).on('click', '.removedNote', function () {
			$(this).next('.removedPost').fadeToggle();
		});
		//Start Loop Automatically
			$(startLoop);
		//Start Loop (or reset) Manually with Double Click
		$('div#count').dblclick(function () {
			$(startLoop);
		});
	}
    	//Loop Interval and Click to Stop
	function startLoop() {
		var loop = setInterval(function () {
			$(loopActions);
		}, 750);
		$('div#count').click(function () {
			ggf = 0;
			clearInterval(loop);
		});
	}
	//Loop Functions
	function loopActions() {
		$('#count').text(ggf++);
		$('._2s1y').css('background-position', '0 ' + - ggf + 'px');
		$('._5qxm').css({
			'background-color': '#ffffff',
			'background-image': 'none'
		});
		$('._5z6o').css('width', '25%');
		$('._4a6n').css({
			'color': '#000000',
			'font-size': '14px',
			'font-weight': 'normal',
			'padding': '0'
		});
		$.each(words, function (key, value) {
			$('._5pat:contains(' + value + ')').not('.hidden_elem').hide().removeClass('_5pat').addClass('removedPost').before('<div class="removedNote"><span>REMOVED -' + value + ' </span><div></div></div>');
		});
	}
});
