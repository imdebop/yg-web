var httpProxy = require('http-proxy');
var HttpProxyRules = require('http-proxy-rules');

var options = {
    //hostnameOnly:true,
    //target: 'http://localhost:3000',
    router: {
        '192.168.253.159:8080': 'http://localhost:3000',
        //forward: 'localhost:8080'
        //'hoge.example.com': '127.0.0.1:9090'
    }

}
httpProxy.createServer(options).listen(8080);


//var forward = require('http-port-forward');
 
// forward all local 1088 port http requests to 88 port. 
//forward(8080, 3000);
//forward(3000, 8080);