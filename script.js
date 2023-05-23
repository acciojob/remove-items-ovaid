//your JS code here. If required.

 let selectElement = document.getElementsByTagName("select")[0];
function deleteElement() {

    let selectedValue = selectElement.value ;// "blue"
   let childrenList = selectElement.children; 
     for(let i = 0 ; i < childrenList.length; i++) {
         if(selectedValue === childrenList[i].value){
             
			 childrenList[i].remove();
         }
     }