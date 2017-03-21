function limita(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  if(elemento.value.length >= maximoCaracteres ) {
    alert("EXCEEDED LIMIT OF CHARACTERS");
	return false;
  }
  else {
    return true;
  }
}