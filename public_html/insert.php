<?php 


    $link =mysql_connect('localhost','root','')or die('No se puede conectar: '.mysql_error());
    echo "Conexion establecida";   
    mysql_select_db('tienda') or die ('Sin Conexion');
    $query="INSERT INTO videos (Titulo,Director,Duracion,Categoria,Stock,Image) VALUES ('".$_POST['Titulo']."','".$_POST['Director']."','".$_POST['Duracion']."','".$_POST['Categoria']."','".$_POST['Stock']."','".$_POST['Image']."')";
    
    $result=mysql_query($query) or die('consulta Fallida'.mysql_error());
?>