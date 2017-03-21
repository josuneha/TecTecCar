function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("You must fill all the fields");
		field.focus();
		return false;
	}else { return true; }
}
function EsValido(field) {
	var valid = ",.0123456789"
	var ok = "yes";
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}
	if (ok == "no") {
		alert("Incorrect! Only positive numbers are allowed");
		field.focus();
		field.select();
		return false;
   	}
	return true;
}


		
function validate() {
	
     if(noEntry(document.forms[0].elements[4]) == false) return;
     if(noEntry(document.forms[0].elements[5]) == false) return;
     if(noEntry(document.forms[0].elements[6]) == false) return;
	 if(noEntry(document.forms[0].elements[7]) == false) return;
     if(noEntry(document.forms[0].elements[8]) == false) return;
     if(noEntry(document.forms[0].elements[9]) == false) return;
     else if(EsValido(document.forms[0].elements[9]) == false) return;
     if(noEntry(document.forms[0].elements[10]) == false) return;
	 if(noEntry(document.forms[0].elements[11]) == false) return;
	 
     alert("Su ruta ha sido introducida");
     document.forms[0].submit();
}

function cargarSelect2(valor) {
					 var arrayValores=new Array( 
						 new Array(1,1,"Super Amara - Avda Tolosa"), 
						 new Array(1,2,"Aulario"), 
						 new Array(1,3,"Ondarreta - Iglesia San Sebastian"), 
						 new Array(2,1,"Arco"), 
						 new Array(2,2,"Astoria"), 
						 new Array(2,3,"Venta del Curro"), 
						 new Array(3,1,"Fosters Hollywood"), 
						 new Array(3,2,"Jesuitas"), 
						 new Array(3,3,"Gasolinera de Larramendi"), 
						 new Array(3,4,"Azoka - Plaza Cataluña"),
						 new Array(4,1,"Avenida de la Libertad con Okendo"),
						 new Array(4,2,"Bellas Artes"),
						 new Array(4,3,"Hotel Londres"),
						 new Array(4,4,"Buen Pastor"),
						 new Array(4,5,"La Perla"),
						 new Array(5,1,"Colegio Aleman"),
						 new Array(5,2,"Munto"),
						 new Array(5,3,"Aldapeta"),
						 new Array(5,4,"Bera Bera"),
						 new Array(6,1,"Paseo Mons"),
						 new Array(6,2,"Zarategi"),
						 new Array(7,1,"Cristinaenea"),
						 new Array(7,2,"Hospital Quiron"));
					 if(valor==0) {                      
						 document.getElementById("select2").disabled=true; 
					 }else{                    
						 document.getElementById("select2").options.length=0; 
						 document.getElementById("select2").options[0]=new Option("Selecciona una opcion", "0");
						 for(i=0;i<arrayValores.length;i++) {
							 if(arrayValores[i][0]==valor) { 
								 document.getElementById("select2").options[document.getElementById("select2").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]); 
							 } 
						 }
						 
						 document.getElementById("select2").disabled=false;
					} 
				} 
            
function seleccinado_select2(value) {
	var v1 = document.getElementById("select1"); 
	var valor1 = v1.options[v1.selectedIndex].value; 
	var text1 = v1.options[v1.selectedIndex].text; 
	var v2 = document.getElementById("select2"); 
	var valor2 = v2.options[v2.selectedIndex].value; 
	var text2 = v2.options[v2.selectedIndex].text;
}



