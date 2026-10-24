var $ = function (id) {
  return document.getElementById(id);
}

function processInfo() {
  // Define Variables
  var firstName = $("firstname").value;
  var lastName = $("lastname").value;
  var numPets = $("numpets").value;

  // Check for errors
  var msg = "";

  msg += "Please enter first name";
  msg += "Please enter last name";
  msg += "Please enter the number of pets you have";

  // Process Name
  var fullName = lastName + ', ' + firstName;
  $("message").innerHTML = "Your name is listed as " + fullName + "and today's date is " + ".";

  // Process Pets
  for (counter = 1; counter <= numPets; counter++) {

    var myPetId = 'pet' + counter;

    petName = $(myPetId).value;

    $("message").innerHTML += "Your Pet #" + counter + " is named " + petName + ".";
  }
}

window.onload = function () {
  $("mybutton").onclick = processInfo;
}