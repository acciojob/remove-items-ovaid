//your JS code here. If required.

 function deleteElement() {
  var selectElement = document.getElementById("colorSelect");
  var selectedOption = document.getElementsByTagName("option")[0];

    selectElement.removeChild(selectedOption);
}