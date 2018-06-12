<?php

//Captura la opcion a ejecutar
$opc = $_POST["opc"];

switch ($opc) {
	case 1:
		$sql = "SELECT idOficina, ciudad FROM oficinas";
		leerDatos($sql);
	break;
	case 2:
		$idOficina = $_POST['idOficina'];
		$sql = "SELECT apellido, nombre,telOficina,correoE,idJefe,cargo from empleados WHERE idOficina = {$idOficina}";
		leerDatos($sql);
	break;

}



function leerDatos($sql){
	include('conexion.php');

	$result = $conexion->query($sql);
	$rows = array();

	if ($result != NULL && $result->num_rows > 0) {
		
		while (( $r = mysqli_fetch_assoc($result) )) {
			$rows[] = $r;
		}
		mysqli_free_result($result);
	}
	mysqli_close($conexion);
	echo json_encode($rows);
}


function actualizarRegistro($sql){
	include('conexion.php');
	if ($conexion->query($sql) === TRUE) {
		$respuesta = array("ok"=> "actualizo");
	}else{
		$respuesta = array("ok"=> "error");
	}

	echo json_encode($respuesta);
}
?>