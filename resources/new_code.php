<?php 
    require('conexion.php');
    $code = $_GET['code'];
    $res = $conexion->query('SELECT code FROM barcode ORDER BY id DESC LIMIT 1');
    $res = $res->fetch_all(MYSQLI_ASSOC);

    if ($code != $res[0]['code']) {
        $result = $conexion->query('INSERT INTO `barcode`(`code`) VALUES ("'.$code.'")');
        if($result){
            echo 'success';
        }else{
            echo mysqli_error($conexion);
        }
    }
    echo 'same code';
    
?>