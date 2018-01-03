
var WebSocketClient = require('websocket').client;
var origin = 'ygsvr';
var horyuList = require('../app/horyuList');

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

var con;
var resObj;

client.on('connect', function(connection) {
    con = connection;
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
        horyuList.render(resObj, message.utf8Data);
        //resObj.send("horu_list to be rendered");
    });
    /*
    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
    */
});

function client_open(){
    client.connect('ws://localhost:4567/websocket', 
    null, [origin]
    //'echo-protocol'
    );
}

client_open();

module.exports = {
    client: client,
    send: function(str,res){
        resObj = res
        if (!con.connected){
            client_open();
        }
        con.sendUTF(str);
    }
}
