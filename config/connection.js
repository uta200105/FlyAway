var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 'port',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'FlyAway_db'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});

module.exports = connection;
