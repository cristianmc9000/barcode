<?php 
    $code = $_GET['code'];
    
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="theme-color" content="#673ab7">
	<meta name="MobileOptimized" content="width">
	<meta name="HandheldFriendly" content="true">
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="../css/materialize.min.css"  media="screen,projection"/>
	<script type="text/javascript" src="../js/materialize.min.js"></script>
	<script type="text/javascript" src="../js/jquery.js"></script>
    <title>Resultado</title>
</head>
<body>
    <div class="container row">
        <div class="center">
            <h4><?php echo $code ;?></h4>
            <a href="#" onclick="back()" class="waves-effect waves-light btn">Regresar</a>
        </div>
    </div>
</body>
</html>

<script>
    $(document).ready(function(){
        var sound = new Audio("../sounds/barcode.wav");
        sound.play();
    })
    function back(){
       window.location.href = '../index.html'
    }
</script>