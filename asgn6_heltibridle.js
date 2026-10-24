var $ = function (id) {
  return document.getElementById(id);
}

function processInfo() {
  alert("Hello World");
}

window.onload = function () {
  $("mybutton").onclick = processInfo;
}