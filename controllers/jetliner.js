var express = require('express');

var router = express.Router();

var jets = require('../models/jets.js');

//Get Route
router.get('/', function(req, res) {
  res.render('index');
});

router.get(
  '/flights/:departure/:arrival/:departdate/:departure2?/:arrival2?/:returningdate?',
  function(req, res) {
    var condition1 = `depart_place =  '${req.params.departure}'`;
    var condition2 = `arrive_place =  '${req.params.arrival}'`;
    var condition3 = `depart_date =  '${req.params.departdate}'`;
    console.log('params: ', req.params);
    jets.selectWhere(condition1, condition2, condition3, function(results) {
      var condition1 = `depart_place =  '${req.params.departure2}'`;
      var condition2 = `arrive_place =  '${req.params.arrival2}'`;
      var condition3 = `depart_date =  '${req.params.returningdate}'`;
      jets.selectWhere(condition1, condition2, condition3, function(results2) {
        res.render('fligths', { flights: results, flights2: results2 });
      });
    });
  }
);

router.get('/flightId/:id1/:seats1st/:id2?/:seats2nd?', function(req, res) {
  console.log(req.params.id1);
  res.render('purchase', {
    flightId: req.params.id1,
    seats: req.params.seats1st
  });
});

router.post('/api/bookings', function(req, res) {
  jets.create(
    [
      'flight_id',
      'first_name',
      'middle_name',
      'last_name',
      'date_of_birth',
      'email',
      'phone'
    ],
    [
      req.body.flightId,
      req.body.firstName,
      req.body.middleName,
      req.body.lastName,
      req.body.birth,
      req.body.email,
      req.body.phone
    ],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/bookings/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  var condition1 = 'seats_available = ' + req.body.seatsA;

  console.log('condition', condition);

  jets.update(condition1, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get(
  '/reservation/email/:email/firstName/:firstName/lastName/:lastName',
  function(req, res) {
    var condition1 = `email =  '${req.params.email}'`;
    var condition2 = `first_name =  '${req.params.firstName}'`;
    var condition3 = `last_name =  '${req.params.lastName}'`;
    jets.findJoinTables(condition1, condition2, condition3, function(data) {
      var hbsObject = {
        fligth: data
      };
      res.render('reservation', hbsObject);
    });
  }
);

router.get('/flightsatus/:flightNumer/:bookingNumber/:email', function(
  req,
  res
) {
  var condition1 = `flight_id =  '${req.params.flightNumer}'`;
  var condition2 = `booking_number =  '${req.params.bookingNumber}'`;
  var condition3 = `email =  '${req.params.email}'`;
  jets.findJoinTables(condition1, condition2, condition3, function(data) {
    var hbsObject = {
      fligth: data
    };
    res.render('flightstatus', hbsObject);
  });
});

router.delete('/api/bookings/:id', function(req, res) {
  var condition = 'booking_number = ' + req.params.id;
  jets.delete(condition, function(result) {
    if (result.affectedrows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get('*', function(req, res) {
  res.status(404).render('notfound');
});

module.exports = router;
