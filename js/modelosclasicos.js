

function ejecutarAjax(datos,opc) {
	$.ajax({
		type : 'POST',
		url: 'php/leerDatos.php',
		data : datos,

		success : function(response){
			leerDatos(response,opc);
		},
		error : function(xhr, status){
			console.log("ERROR: " + status);
		},

	});
}

function leerDatos(responseJSON, opc){
	var response = JSON.parse(responseJSON);
	switch(opc){
		case 1:
			if (response.length > 0) {
				cargarSelectOficinas(response);
			}
		break;
		case 2:
			if (response.length > 0) {
				cargarTablaOficina(response);
			}
		break;
	}
}



function consultarOficinas(){
	var parametros = {'opc' : 1};
	ejecutarAjax(parametros,1);
}

function consultarDatosOficinas(idOficina){
	var parametros = {'opc' : 2, 'idOficina' : idOficina};
	ejecutarAjax(parametros,2)
}


function cargarSelectOficinas(response){
	var txt = "<option value ='0'>Seleccionar Opcion</option>";
	for (var i = 0; i < response.length; i++ ){
		txt += "<option value='"+response[i]['idOficina']+"'>"+response[i]['ciudad']+"</option>";
	}
	$("#lista").html(txt);
}


function cargarTablaOficina(response){
	var txt = "<thead><th>Apellido</th><th>Nombre</th><th>Telefono Oficina</th><th>Correo</th><th>Jefe</th><th>Cargo</th></thead>";
	txt += "<tbody>";
	for (var i = 0; i < response.length; i++) {
		txt += "<tr><td>"+response[i]['apellido']+"</td><td>"+response[i]['nombre']+"</td><td>"+response[i]['telOficina']+"</td><td>"+response[i]['correoE']+"</td><td>"+response[i]['idJefe']+"</td><td>"+response[i]['cargo']+"</td></tr>";
	}
	txt += "</tbody>";
	$('#tabla').html(txt);
}
