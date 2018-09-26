$(function() {
  $('.search-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSearch = {
      departure: $('#departure')
        .val()
        .trim(),
      arrival: $('#arrival')
        .val()
        .trim()
    };

    console.log(newSearch);
    var URL =
      '/flights/api/arrival/' +
      newSearch.arrival +
      '/departure/' +
      newSearch.departure;
    window.location.href = URL;
  });

  $('.find-reservation ').on('submit', function(event) {
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

  $('.selectedFlight').on('click', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // var id = $(this).data('id');
    var flightInfo = {
      id: $(this).data('id'),
      seats_available: $(this).data('seats')
    };

    var URL =
      '/flightId/' + flightInfo.id + '/seatsAva/' + flightInfo.seats_available;
    window.location.href = URL;
  });

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
        .trim(),
      cardType: $('#cardType').val(),
      cardNumber: $('#cardNumber')
        .val()
        .trim(),
      firstNameOnCard: $('#firstNameOnCard')
        .val()
        .trim(),
      lastNameOnCard: $('#lastOnNameCard')
        .val()
        .trim(),
      cardExp: $('#cardExp')
        .val()
        .trim(),
      cvcNumber: $('#cvcNumber')
        .val()
        .trim(),
      country: $('#country')
        .val()
        .trim(),
      street: $('#street')
        .val()
        .trim(),
      city: $('#city')
        .val()
        .trim(),
      state: $('#state')
        .val()
        .trim(),
      zipcode: $('#zipcode')
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

  $('.delete-res').on('click', function(event) {
    var id = $(this).data('id');
    $.ajax('/api/bookings/' + id, {
      type: 'DELETE'
    }).then(function() {
      window.location.href = '/';
    });
  });
});
