function functionHome() {
	console.debug("functionHome");
	document.getElementById("departure").value = "TECNUN";
	document.getElementById("destination").value = "Antiguo";
	document.getElementById("fromtecnun").disabled = true;
	
	var str = document.getElementById("time").innerHTML; 
	var res = str.replace("Arriving", "Departure");
	document.getElementById("time").innerHTML = res;
	
		departure.disabled=true;
	destination.disabled=false;


}