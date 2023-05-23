//your JS code here. If required.

 function deleteElement() {
  var selectElement = document.getElementById("colorSelect");
  var selectChildren = selectElement.children[0];
	 selectChildren.remove();
}