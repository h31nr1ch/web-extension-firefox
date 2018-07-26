//https://stackoverflow.com/questions/7498648/how-to-do-this-curl-operation-in-node-js
var util = require('util');
var exec = require('child_process').exec;

var command = 'curl http://192.168.1.102/web-extension-firefox/server/id.dat'
child = exec(command, function(error,std_out,std_err){
  console.log(std_out);
});
