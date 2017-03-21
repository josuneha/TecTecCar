function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("The field must be complete");
		field.focus();
		return false;
	}else { return true; }
}
function email(field) {
	var valid = "@tecnun.es"
	var ok = "yes";
	var temp;
	if (field.value.length<10) {
		alert("Incorrect!You must be Tecnun student...");
		field.focus();
		field.select();
	return false;}
	else{
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (field.value.indexOf("@tecnun.es") == "-1") ok = "no";
	}
	if (ok == "no") {
		alert("Incorrect!You must be Tecnun studient...");
		field.focus();
		field.select();
		return false;
   	}
	return true;
}
}
function validate() {	
	
	if(noEntry(document.forms[0].elements[0]) == false) return;
	if(noEntry(document.forms[0].elements[1]) == false) return;
	if(noEntry(document.forms[0].elements[2]) == false) return;
	if(noEntry(document.forms[0].elements[3]) == false) return;
	if(noEntry(document.forms[0].elements[4]) == false) return;
	if(noEntry(document.forms[0].elements[5]) == false) return;
	else if(email(document.forms[0].elements[5]) == false) return;
	if(noEntry(document.forms[0].elements[5]) == false) return;
	if(noEntry(document.forms[0].elements[6]) == false) return;
	if(noEntry(document.forms[0].elements[7]) == false) return;

	document.forms[0].submit();
}
