var http = require('http'),
httpProxy = require('http-proxy'),
HttpProxyRules = require('http-proxy-rules');

// Set up proxy rules instance
var proxyRules = new HttpProxyRules({
    rules: {
        '.*/test': 'http://localhost:8080/cool', // Rule (1)
        '.*/test2/': 'http://localhost:8080/cool2/', // Rule (2)
        '/posts/([0-9]+)/comments/([0-9]+)': 'http://localhost:8080/p/$1/c/$2', // Rule (3)
        '/author/([0-9]+)/posts/([0-9]+)/': 'http://localhost:8080/a/$1/p/$2/' // Rule (4)
        },
    default: 'http://localhost:3000' // default target
});

// Create reverse proxy instance
var proxy = httpProxy.createProxy();

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(function(req, res) {

    // a match method is exposed on the proxy rules instance
    // to test a request to see if it matches against one of the specified rules
    var target = proxyRules.match(req);
    if (target) {
        return proxy.web(req, res, {
          target: target
    });
}

res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('The request url and path did not match any of the listed rules!');
}).listen(8080);
//}).listen(8080, cb);
