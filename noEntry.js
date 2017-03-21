function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("THIS FIELD MUST BE FILLED UP");
		field.focus();
		return false;
	} 
	if (document.getElementById("s").selectedIndex =="0") {
		alert("FILL THE RATING");
		return false;
	} else { 
	   return true; 
	}
}

			