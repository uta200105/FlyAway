var orm = require('../config/orm.js');
var jets = {
  findJoinTables: function(condition1, condition2, condition3, cb) {
    orm.findJoinTables(
      'bookings',
      'flights',
      'flight_id',
      condition1,
      condition2,
      condition3,
      function(res) {
        cb(res);
      }
    );
  },
  selectWhere: function(condition1, condition2, condition3, cb) {
    orm.selectWhere('flights', condition1, condition2, condition3, function(
      res
    ) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create('bookings', cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(condition1, condition, cb) {
    orm.update('flights', condition1, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('bookings', condition, function(res) {
      cb(res);
    });
  }
};

module.exports = jets;
