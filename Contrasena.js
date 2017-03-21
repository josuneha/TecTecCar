function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("You have to complete!");
		field.focus();
		return false;
	}else { return true; }
}

function validate() {	
     if(noEntry(document.forms[0].elements[0]) == false) return;
     if(noEntry(document.forms[0].elements[1]) == false) return;
     if(noEntry(document.forms[0].elements[2]) == false) return;
     
     if(document.forms[0].elements[1].value != document.forms[0].elements[2].value){
		alert("The password must be the same!");
		document.forms[0].elements[1].focus();
		document.forms[0].elements[1].select();
		return;
     }
     document.forms[0].submit();
}
