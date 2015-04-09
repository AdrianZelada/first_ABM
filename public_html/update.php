<?php     
    $link =mysql_connect('localhost','root','')or die('No se puede conectar: '.mysql_error());        
    mysql_select_db('tienda') or die ('Sin Conexion');
    $query="UPDATE videos SET Titulo='".$_POST['Titulo']."',Director='".$_POST['Director']."',Duracion='".$_POST['Duracion']."',Categoria='".$_POST['Categoria']."', Stock='".$_POST['Stock']."',Image='".$_POST['Stock']."' WHERE id='".$_POST['id']."'";
    $result=mysql_query($query) or die('consulta Fallida'.mysql_error());
    echo $query;
?>
