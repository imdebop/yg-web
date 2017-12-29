var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('3030', 'localhost', function(){
  console.log('client-> connected to server');
  client.write('Who needs a browser to communicate?\n');
  client.end();
});

//process.stdin.resume();

/*
process.stdin.on('data', function(data){
  client.write(data);
});
*/

client.on('data', function(data){
  console.log('client-> ' + data);
});

client.on('close', function(){
  console.log('client-> connection is closed');
});

module.exports = {
    client: client,

    set: function(){client.connect('3030', 'localhost', function(){});}

}