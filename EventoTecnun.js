function functionTecnun() {
	console.debug("functionTecnun");
	document.getElementById("destination").value = "TECNUN";
	document.getElementById("departure").value = "Antiguo";

	document.getElementById("totecnun").disabled = true;
	var str = document.getElementById("time").innerHTML; 
	var res = str.replace("Departure", "Arriving");
	document.getElementById("time").innerHTML = res;
	
	destination.disabled=true;
	departure.disabled=false;

	

}