$(function() {
  //The next event will trigger a search for rountrip flights
  $('.search-form-rt').on('submit', function(event) {
    event.preventDefault();

    var roundtrip = $('[name=rountt]:checked').val();
    console.log(roundtrip);
    var newSearch = {
      departure: $('#departure')
        .val()
        .trim(),
      arrival: $('#arrival')
        .val()
        .trim(),
      departure2: $('#arrival')
        .val()
        .trim(),
      arrival2: $('#departure')
        .val()
        .trim(),
      departdate: $('#depart_date')
        .val()
        .trim(),
      returningdate: $('#returning_date')
        .val()
        .trim()
    };

    var URL =
      '/flights/' +
      newSearch.departure +
      '/' +
      newSearch.arrival +
      '/' +
      newSearch.departdate +
      '/' +
      newSearch.departure2 +
      '/' +
      newSearch.arrival2 +
      '/' +
      newSearch.returningdate;

    window.location.href = URL;
  });

  //The next event will trigger a search for rountrip flights
  $('.search-form-ow').on('submit', function(event) {
    event.preventDefault();
    var newSearch = {
      departure: $('#departure-ow')
        .val()
        .trim(),
      arrival: $('#arrival-ow')
        .val()
        .trim(),
      departdate: $('#depart_date-ow')
        .val()
        .trim()
    };
    console.log(newSearch);
    var URL =
      '/flights/' +
      newSearch.departure +
      '/' +
      newSearch.arrival +
      '/' +
      newSearch.departdate;

    window.location.href = URL;
  });

  //The next event will find reservations
  $('.find-reservation').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var findReservation = {
      firstName: $('#firstName')
        .val()
        .trim(),
      lastName: $('#lastName')
        .val()
        .trim(),
      email: $('#email')
        .val()
        .trim()
    };

    var URL =
      '/reservation/email/' +
      findReservation.email +
      '/firstName/' +
      findReservation.firstName +
      '/lastName/' +
      findReservation.lastName;
    window.location.href = URL;
  });

  //The next event will find flight-status
  $('.find-flightStatus').on('submit', function(event) {
    event.preventDefault();

    var findFlightStatus = {
      flightNumer: $('#flightIdNumber')
        .val()
        .trim(),
      bookingNumber: $('#bookingNumber')
        .val()
        .trim(),
      email: $('#bookingEmail')
        .val()
        .trim()
    };
    var URL =
      '/flightsatus/' +
      findFlightStatus.flightNumer +
      '/' +
      findFlightStatus.bookingNumber +
      '/' +
      findFlightStatus.email;
    window.location.href = URL;
  });

  //The next event will find flight-list
  $('.flights-list').on('submit', function(event) {
    event.preventDefault();

    var rt1stFlight = $('#1stFlight').val();
    console.log(rt1stFlight);
    var rt2ndFlight = $('#2ndFlight').val();
    console.log(rt2ndFlight);

    if (rt1stFlight && rt2ndFlight === '1') {
      var flightInfo2 = {
        id1: $('#firstFlightID')
          .val()
          .trim(),
        seats1st: $('#seats_ava1st')
          .val()
          .trim(),
        id2: $('#secondFlightID')
          .val()
          .trim(),
        seats2nd: $('#seats_ava2nd')
          .val()
          .trim()
      };
      var URL =
        '/flightId/' +
        flightInfo2.id1 +
        '/' +
        flightInfo2.seats1st +
        '/' +
        flightInfo2.id2 +
        '/' +
        flightInfo2.seats2nd;
      window.location.href = URL;
    } else if (rt1stFlight === '1') {
      var flightInfo = {
        id1: $('#firstFlightID')
          .val()
          .trim(),
        seats1st: $('#seats_ava1st')
          .val()
          .trim()
      };
      var URL = '/flightId/' + flightInfo.id1 + '/' + flightInfo.seats1st;
      window.location.href = URL;
    }
  });
  //The next event will send the user info to a post route
  $('.data-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPurchase = {
      flightId: $('#lightId').val(),
      firstName: $('#firstName')
        .val()
        .trim(),
      middleName: $('#middleName')
        .val()
        .trim(),
      lastName: $('#lastName')
        .val()
        .trim(),
      birth: $('#birth')
        .val()
        .trim(),
      email: $('#email')
        .val()
        .trim(),
      phone: $('#phone')
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax('/api/bookings', {
      type: 'POST',
      data: newPurchase
    }).then(function() {
      console.log('created new Purchase');
      // Reload the page to get the updated list
      // location.reload();
    });

    var thisId = $('#lightId').val();
    // var thisSeats = $('#availableSeats').val();
    var flightData = {
      seatsA: $('#availableSeats').val()
    };

    //WORKING PUT (UPDATE ROUTE)----
    //Send the PUT request.
    $.ajax('/api/bookings/' + thisId, {
      type: 'PUT',
      data: flightData
    }).then(function() {
      console.log('changed seats available');
      // Reload the page to get the updated list
    });

    var URL =
      '/reservation/email/' +
      newPurchase.email +
      '/firstName/' +
      newPurchase.firstName +
      '/lastName/' +
      newPurchase.lastName;
    window.location.href = URL;
  });

  //The next event will trigger a delete route
  $('.delete-res').on('click', function(event) {
    var id = $(this).data('id');
    $.ajax('/api/bookings/' + id, {
      type: 'DELETE'
    }).then(function() {
      window.location.href = '/';
    });
  });
});
