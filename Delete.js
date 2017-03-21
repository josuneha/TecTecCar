function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("The field must be complete");
		field.focus();
		return false;
	}else { return true; }
}

function validate() {	
     if(noEntry(document.forms[0].elements[0]) == false) return;
	 if(noEntry(document.forms[0].elements[1]) == false) return;
     if(noEntry(document.forms[0].elements[2]) == false) return;

 
 
     document.forms[0].submit();
}
