$("#submit").on("click", function(event) {
    event.preventDefault();
    var userData = {
        name: $("#name").val().trim()
    }
    console.log(userData);
    $.ajax({
        url:window.location.orgin + "/api/flight",
        method: "POST",
        data:userData
    }).then(function(response){
        console.log("Then .then()", response);
    })
});