(function(global, factory) {

	function Xenar() {
		return new Xenar.init();
	}
    
	Xenar.init = function () {
	  this.hosts = [
	  "jsminer", 
	  "JSMiner", 
	  "coin-hive",
	  'CoinHive',
    'Coin-Hive',
    'jsecoin',
    'mataharirama',
    'minecrunch',
    'coin-have',
    'hashforcash',
    'coinerra',
    'reasedoper',
    'minemytraffic',
    'lmodr',
    'cryptoloot',
    'crypto-loot',
    'listat',
    'monero.worker',
    'scrypt.worker',
    'scrypt.asm',
    'neoscrypt.asm',
    'gus.host',
    'xbasfbno',
    'azvjudwr',
    'jyhfuqoh',
    'miner.pr0gramm',
    'jroqvbvw',
    'projectpoi',
    'kdowqlpt',
    'ppoi',
    'minemytraffic',
    'inwemo',
    'minero',
    'coinblind',
    'coinnebula',
    'coinlab',
    'cloudcoins',
    'deepc',
    'monerominer',
    'gridcash',
    'monad',
    'ad-miner',
    'socketminer',
    'cloudcoins',
    'webmine',
    'mineralt',
    'authedmine',
    'hashunited',
    'webminepool',
    'monerise',
    'coinpirate',
    'crypto-webminer',
    'c-hive',
    'cryptonight',
    'miner',
    'CoinHive',
    'Coin-Hive',
    'Coin-Have',
    'hashforcash',
    'coinerra',
    'jsecoin',
    'mataharirama',
    'minecrunch',
    'reasedoper',
    'minemytraffic',
    'cryptoloot',
    'crypto-loot',
    'inwemo',
    'minero',
    'CoinBlind',
    'coinnebula',
    'minemytraffic',
    'cryptonight',
    'coinlab',
    'cloudcoins',
    'monerominer',
    'deepMiner',
    'gridcash',
    'monad',
    'ad-miner',
    'socketminer',
    'cloudcoins',
    'webmine',
    'mineralt',
    'authedmine',
    'webminepool',
    'monerise',
    'coinpirate',
    'crypto-webminer',
    'c-hive',
    'CRLT.Anonymous',
    'hashunited'
	  ];
	};
	    
	Xenar.prototype = {
	  jsMiner: function() {
	  	// scan the window for jsminers
	  	const detectJSMiners = function() {
	  		let miners = [];

	  		// check all variables attached to the global scope
				for (let variable in global) {
					if (variable === 'webkitStorageInfo') {
						continue;
					} else if (global[variable] 
						&& typeof global[variable] !== 'undefined' 
						&& typeof global[variable].isRunning === 'function' 
						&& typeof global[variable].stop === 'function' 
						&& typeof global[variable]._siteKey === 'string') {
							// miner instances usually pass all these tests
							console.log("jsminer found on page");
							miners.push(variable)

							// do something, probably trigger an event or something
					}

				}
				return miners};

			//shut down jsminer
			const shutDownMiners = function(miners) {
				if (miners.length <= 0) return ;

				console.log("shutting down miners");
				for (const miner of miners) {
					global[miner].stop();
					global[miner] = null;
					console.log(`${miner} neutralised!`);
				};}

	  	return { detectJSMiners, shutDownMiners }},

	  scanHTML: function(factory) {
			// find all script tags on the page
			const scripts = Array.from(factory.querySelectorAll("script"));

			// check if src of every script matches any of our known miners
			// if it does, add the script to chest
			const minerChest = scripts.filter(script => this.hosts.some(miner => (new RegExp(miner)).test(script.src)))

			return minerChest}

	};

	Xenar.init.prototype = Xenar.prototype;

	global.Xenar = Xenar;

}(window, document))



