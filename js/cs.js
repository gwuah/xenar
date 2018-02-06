(function(global, factory) {

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

	// inject script into current page so we can acess window object
	function injectScript(file_path, node) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);}

	const init = function(global, factory) {
		injectScript(chrome.extension.getURL('js/xenar.js'), factory.body)
		injectScript(chrome.extension.getURL('js/scanner.js'), factory.body)
		
		// test
		// xfetch("https://coinhive.com/")
		// 	.then(data => console.log("data recieved"))
		// 	.catch(err => console.log(err))
	}

	init(global, factory);

})(window, document)