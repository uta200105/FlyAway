//Import Mysql connection
var connection = require('../config/connection.js');

//Helper functions
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  console.log('what i this obj: ' + ob[0]);
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + '=' + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectWhere: function(tableInput, condition1, condition2, cb) {
    var queryString =
      "SELECT *, DATE_FORMAT(arrival_datetime, '%M/%e/%Y') AS formatted_day, DATE_FORMAT(depart_datetime, '%h:%i %p') AS formatted_departure, DATE_FORMAT(arrival_datetime, '%h:%i %p') AS formatted_arrival FROM " +
      tableInput;
    queryString += ' WHERE ';
    queryString += condition1;
    queryString += ' AND ';
    queryString += condition2;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      } else {
        cb(result);
      }
    });
  },

  findJoinTables: function(
    tableOne,
    tableTwo,
    tableTwoForeignKey,
    condition1,
    condition2,
    condition3,
    cb
  ) {
    var queryString = 'SELECT * FROM ';
    (queryString += tableOne), (queryString += ' LEFT JOIN ');
    (queryString += tableTwo), (queryString += ' on ');
    queryString += tableOne;
    queryString += '.';
    queryString += tableTwoForeignKey;
    queryString += '=';
    queryString += tableTwo;
    queryString += '.id';
    queryString += ' WHERE ';
    queryString += condition1;
    queryString += ' AND ';
    queryString += condition2;
    queryString += ' AND ';
    queryString += condition3;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, condition1, condition, cb) {
    // console.log('What is this: ' + objColVals);
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += condition1;
    // queryString += objToSql(objColVals);
    queryString += ' -1 ';
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      } else {
        cb(result);
      }
    });
  }
};

module.exports = orm;
