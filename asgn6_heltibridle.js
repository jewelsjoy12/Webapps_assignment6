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

  $("message").innerHTML = "Your Pet #" + " is named " + petName;

  // Process Name
  var fullName = lastName + ', ' + firstName;
  $("message").innerHTML = "Your name is listed as " + fullName + "and today's date is " + ".";

  // Process Pets
  var petName = $("pet1").value;
  $("message").innerHTML = "Your Pet #" + " is named " + petName;
}

window.onload = function () {
  $("mybutton").onclick = processInfo;
}