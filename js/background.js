(function(global, factory) {

	// determine browser type
	let browser = global.chrome ? global.chrome : undefined ;

	// blacklist
	let blacklist = [
		'*://coinhive.com/*',
		'*://coin-hive.com/*',
		'*://coinhive.com/lib*',
    '*://coin-hive.com/lib*',
    '*://cnhv.co/lib*',
    '*://coinhive.com/captcha*',
    '*://coin-hive.com/captcha*',
    '*://cnhv.co/captcha*',
    '*://*/miner.pr0gramm.com/*',
    '*://miner.pr0gramm.com/*',
    '*://*/coin-have.com/*',
    '*://coin-have.com/*',
    '*://*/hashforcash.us/*',
    '*://hashforcash.us/*',
    '*://*/hashforcash.com/*',
    '*://hashforcash.com/*',
    '*://*/coinerra.com/*',
    '*://coinerra.com/*',
    '*://*/pr0gramm.com/*',
    '*://pr0gramm.com/*',
    '*://minecrunch.co/web/*',
    '*://mine-crunch.co/web/*',
    '*://jsecoin.com/server*',
    '*://*.jsecoin.com/server*',
    '*://*.35.190.24.124.com/server*',
    '*://load.jsecoin.com/*',
    '*://*.load.jsecoin.com/*',
    '*://server.jsecoin.com/*',
    '*://*.server.jsecoin.com/*',
    '*://static.reasedoper.pw/*',
    '*://mataharirama.xyz/*',
    '*://listat.biz/*',
    '*://crypto-loot.com/lib*',
    '*://cryptoloot.com/lib*',
    '*://gus.host/*',
    '*://*/gus.host/*',
    '*://xbasfbno.info/*',
    '*://*/xbasfbno.info/*',
    '*://azvjudwr.info/*',
    '*://*/azvjudwr.info/*',
    '*://jyhfuqoh.info/*',
    '*://*/jyhfuqoh.info/*',
    '*://jroqvbvw.info/*',
    '*://*/jroqvbvw.info/*',
    '*://projectpoi.com/*',
    '*://*/projectpoi.com/*',
    '*://kdowqlpt.info/*',
    '*://*/kdowqlpt.info/*',
    '*://ppoi.org/*',
    '*://*/ppoi.org/*',
    '*://inwemo.com/*',
    '*://*/inwemo.com/*',
    '*://lmodr.biz/*',
    '*://mine-my-traffic.com/*',
    '*://minemytraffic.com/*',
    '*://coinblind.com/lib/*',
    '*://coinnebula.com/lib/*',
    '*://coinlab.biz/*',
    '*://deepc.cc/*',
    '*://*/coinlab.biz/*',
    '*://gridcash.net/*',
    '*://*/gridcash.net/*',
    '*://socketminer.com/*',
    '*://*/socketminer.com/*',
    '*://ad-miner.com/*',
    '*://*/ad-miner.com/*',
    '*://cloudcoins.co/*',
    '*://*/cloudcoins.co/*',
    '*://webmine.cz/*',
    '*://*/webmine.cz/*',
    '*://hashunited.com/*',
    '*://*/hashunited.com/*',
    '*://mineralt.io/*',
    '*://*/mineralt.io/*',
    '*://authedmine.com/*',
    '*://*/authedmine.com/*',
    '*://easyhash.io/*',
    '*://*/easyhash.io/*',
    '*://webminepool.com/*',
    '*://*/webminepool.com/*',
    '*://monerise.com/*',
    '*://*/monerise.com/*',
    '*://coinpirate.cf/*',
    '*://*/coinpirate.cf/*',
    '*://crypto-webminer.com/*',
    '*://*/crypto-webminer.com/*',
    '*://webmine.pro/*',
    '*://*/webmine.pro/*',
    '*://*/monad.network/*',
    '*://monerominer.rocks/scripts/*',
    '*://cdn.cloudcoins.co/javascript/*',
    '*://minero.pw/miner.min.js*',
      // CoinHive
	  '*://*.coin-hive.com/*',
	  '*://*.coinhive.com/*',
	  'wss://*.coinhive.com/*',
	  'ws://*.coinhive.com/*',
	  'wss://*.coin-hive.com/*',
	  'ws://*.coin-hive.com/*',
	  '*://*/*coinhive*.js*',
	  '*://*/*coin-hive*.js*',

	  // JSECoin
	  '*://*.jsecoin.com/*',

	  // CryptoLoot
	  'wss://*.crypto-loot.com/*',
	  
	  // Minr
	  '*://*.host.d-ns.ga/*',
	  'wss://*.host.d-ns.ga/*',
	  'ws://*.host.d-ns.ga/*',
	  
	  // Others
	  '*://*.reasedoper.pw/*',
	  '*://*.mataharirama.xyz/*',
	  '*://*.listat.biz/*',
	  '*://*.lmodr.biz/*',
	  '*://*.minecrunch.co/*',
	  '*://*.minemytraffic.com/*',
	  '*://*.crypto-loot.com/*',
	  'wss://*.crypto-loot.com/*',
	  '*://*.2giga.link/*',
	  'wss://*.2giga.link/*',
	  '*://*.ppoi.org/*',
	  '*://*.coinerra.com/*',
	  '*://*.coin-have.com/*',
	  '*://*.kisshentai.net/*',
	  '*://*.joyreactor.cc/ws/ch/*',
	  '*://*.ppoi.org/lib/*',
	  '*://*.coinnebula.com/lib/*',
	  '*://*.afminer.com/code/*',
	  '*://*.coinblind.com/lib/*',
	  '*://*.webmine.cz/miner*',
	  '*://*.papoto.com/lib/*',
	  
	  // Specific scripts
	  '*://*/*javascriptminer*.js*',
	  '*://*/*miner.js*',
	  '*://*/*miner.min.js*',
	  '*://*/*xmr.js*',
	  '*://*/*xmr.min.js*',
	  '*://*/*coinlab.js*',
	  '*://*/*c-hive.js*',
	  '*://*/*cloudcoins*.js*',
	  '*://*/*miner.js*',
	  
	  // Specific script hosts
	  '*://miner.pr0gramm.com/xmr.min.js*',
	  '*://*.kiwifarms.net/js/Jawsh/xmr/xmr.min.js*',
	  '*://anime.reactor.cc/js/ch/cryptonight.wasm*',
	  '*://cdn.cloudcoins.co/javascript/cloudcoins.min.js*',
	  '*://*.kissdoujin.com/Content/js/c-hive.js*',
	  '*://*.coinlab.biz/lib/coinlab.js*',
	  '*://*.monerominer.rocks/scripts/miner.js*',
	  '*://*.monerominer.rocks/miner.php*',
	  '*://*.minero.pw/miner.min.js*'
  ]

	// notify module
	const Notify = function(details) {
		// Get information on the tab that requested the Crypto Miner.
    chrome.tabs.get(details.tabId, function (tab) {

      // Create a notification to be displayed immediately.
      options = {
        type: 'list',
        title: `Crypto Miner Script Blocked`,
        message: `${tab.title}`,
        items: [
          { title: 'Title', message: `${tab.title}` },
          { title: 'URL', message: `${tab.url}` },
          { title: 'Script URL', message: `${details.url}` }
        ],
        iconUrl: './img/gear-48.png',
        buttons: [{ title: 'View More' }, { title: 'Disable Notifications' }]
      }
      chrome.notifications.create(null, options, function () {})
    })}

   //  function () {
		 //  chrome.storage.local.get('blockCount', function (values) {
		 //    storedCount = values['blockCount'] || 0
		 //    count = parseInt(storedCount) + 1
		 //    chrome.storage.local.set({'blockCount': count}, function() {})
	  // }




























  function logURL(requestDetails) {
	  console.log(localStorage);
	  console.log(requestDetails);
	  Notify(requestDetails);

	  return { cancel: true }
	}

	// intercept all http reqs and block
	chrome.webRequest.onBeforeRequest.addListener(logURL, {urls: blacklist}, ["blocking"]);

}(window, document))