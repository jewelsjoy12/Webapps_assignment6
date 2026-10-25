var $ = function (id) {
  return document.getElementById(id);
}

function processInfo() {
  // Define my variables
  var firstName = $("firstname").value;
  var lastName = $("lastname").value;
  var numPets = $("numpets").value;

  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth() + 1;
  var todayDay = today.getDate();

  // Reset messages if submit button is clicked again
  $("firstname_error").innerHTML = "";
  $("lastname_error").innerHTML = "";
  $("numpets_error").innerHTML = "";
  $("message").innerHTML = "";

  // Check for errors
  var errorFlag = "N";

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
    var msgText = "Your Name is listed as " + fullName + " and today's date is " + todayMonth + "-" + todayDay + "-" + todayYear + ".";

    // Process Pets
    for (counter = 1; counter <= numPets; counter++) {
      var myPetId = 'pet' + counter;
      var petName = $(myPetId).value;

      if (petName.length > 0) {
        msgText = msgText + " Your Pet #" + counter + " is named " + petName + ".";
      }
    }

    var displayMessage = $("message");
    displayMessage.innerHTML = msgText;
  }
}
window.onload = function () {
  $("mybutton").onclick = processInfo;
}