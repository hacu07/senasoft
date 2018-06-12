<?php

$host = "localhost";
$user= "root";
$pass = "";
$database = "modelosclasicos";

$conexion = new mysqli($host,$user,$pass,$database);

if($conexion -> connect_error){
	die("No se conecto a BD" . $conexion -> connect_error);
}
?>