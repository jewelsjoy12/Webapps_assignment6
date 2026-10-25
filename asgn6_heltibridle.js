var $ = function (id) {
  return document.getElementById(id);
}

function processInfo() {
  // Define Variables
  var firstName = $("firstname").value;
  var lastName = $("lastname").value;
  var numPets = $("numpets").value;

  // Check for errors
  var errorFlag = "N";
  $("firstname_error").innerHTML = "";
  $("lastname_error").innerHTML = "";
  $("numpets_error").innerHTML = "";


  if (firstName.length <= 0) {
    $("firstname_error").innerHTML = "Please enter first name";
    errorFlag = "Y";
  }

  if (lastName.length <= 0) {
    $("lastname_error").innerHTML = "Please enter last name";
    errorFlag = "Y";
  }

  if (numPets.length <= 0) {
    $("numpets_error").innerHTML = "Please enter the number of pets you have";
    errorFlag = "Y"
  }

  if (errorFlag == "N") {

    // Process Name
    var fullName = lastName + ', ' + firstName;
    $("message").innerHTML = "Your name is listed as " + fullName + " and today's date is " + ".";

    // Process Pets
    for (counter = 1; counter <= numPets; counter++) {

      var myPetId = 'pet' + counter;

      petName = $(myPetId).value;

      $("message").innerHTML += "Your Pet #" + counter + " is named " + petName + ".";
    }
  }
}
window.onload = function () {
  $("mybutton").onclick = processInfo;
}