<?php     
    $link =mysql_connect('localhost','root','')or die('No se puede conectar: '.mysql_error());        
    mysql_select_db('tienda') or die ('Sin Conexion');
    $id = $_POST['id'];
    $query="DELETE FROM videos WHERE id=".$id;
    $result=mysql_query($query) or die('consulta Fallida'.mysql_error());
    
    echo $query;
?>