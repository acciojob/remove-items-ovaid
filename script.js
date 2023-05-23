//your JS code here. If required.

 function deleteEle() {
  var selectElement = document.getElementById("colorSelect");
  var selectChildren = selectElement.children[0];
	 selectChildren.remove();
}