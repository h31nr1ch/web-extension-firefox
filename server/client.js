var connection = new WebSocket('ws://192.168.1.102:8887');

connection.onopen = function () {
  connection.send('Ping');
};
