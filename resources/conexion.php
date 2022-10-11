<?php 

$conexion = new mysqli('localhost','root','','polling'); //base localhost
// $conexion = new mysqli('localhost','u604223767_polling','Desconocido1','u604223767_polling'); //base hostinger
$conexion->query("SET NAMES 'utf8'");

if($conexion->connect_error) { 
	die( 'Error: ('. $conexion->connect_errno .' )'. $conexion->connect_error); 
}
//agregando 
?>
