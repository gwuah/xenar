(function(global,factory) {

	let browser;

	// this will be for testing purposes
	const xfetch = function(url, method="GET") {
		return new Promise((req, err) => {
			let xhr = new XMLHttpRequest();
	    xhr.open(method.toUpperCase(), url, true);
	    xhr.onload = function xhr_onload() {
	    	if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
	        req(xhr)
	      } else {
	        err(xhr)
	      }
	    };
	    xhr.send(null)
	  })};

	// get root domain 
	const getRootDomain = function(url) {
	  // https://stackoverflow.com/a/23945027 (forgive my laziness -.-)
	  var hostname, domain, splitArr, arrLen;
	  if (url.indexOf("://") > -1) {
	      hostname = url.split('/')[2];
	  } else {
	      hostname = url.split('/')[0];
	  }

	  hostname = hostname.split(':')[0];
	  hostname = hostname.split('?')[0];

	  if(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(hostname) === true) {
	    return hostname;
	  }
	  
	  domain = hostname;
	  splitArr = domain.split('.');
	  arrLen = splitArr.length;
	  if(arrLen > 2) {
	    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
	  }
	  return domain;}
	
	const injectScript = function(file_path, node) {
		var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
  }


	// scan document for mining nodes
	const scanAndNeutalise = function(global, factory) {
		if (!global.Xenar) {
			// just to make sure lib was loaded
			injectScript(chrome.extension.getURL('js/xenar.js'), factory.body)
		} 

		const Xenar = global.Xenar();
		if (Xenar.scanHTML(factory).length > 0) {
			console.log("malicious script found");
			// notify user that a mining script has been found on page
		}

		// neutralise jsminers
		const jsMiner = Xenar.jsMiner();
		const miners = jsMiner.detectJSMiners();
		jsMiner.shutDownMiners(miners);

		// neutralise other known miners
	}

	const init = function(global, factory) {
		scanAndNeutalise(global, factory);
		setInterval(() => {
			scanAndNeutalise(global, factory)
		}, 10000);
	}












	// start application
	init(global, factory)

}(window, document))