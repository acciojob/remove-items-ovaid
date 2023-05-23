
function deleteElement() {
  var selectElement = document.getElementById("colorSelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  
  if (selectedOption) {
    selectElement.removeChild(selectedOption);
  }
}
