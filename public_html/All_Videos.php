<?php 
    $link =mysql_connect('localhost','root','')or die('No se puede conectar: '.mysql_error());
    
    
    mysql_select_db('tienda',$link) or die ('Sin Conexion');
    $query="Select * From videos";
    $result=mysql_query($query) or die('consulta Fallida'.mysql_error());
    $Videos=  array();
    while($row=mysql_fetch_array($result)){
        $id=$row['id'];
        $titulo=$row['Titulo'];
        $categoria=$row['Categoria'];        
        $duracion=$row['Duracion'];
        $director=$row['Director'];
        $stock=$row['Stock'];
        $Image=$row['Image'];
        $Videos[]=array(
            'id'=>$id,
            'Titulo'=>$titulo,
            'Categoria'=>$categoria,           
            'Duracion'=>$duracion,
            'Director'=>$director,
            'Stock'=>$stock,
            'Image'=>$Image);
    }
    $json_string=json_encode($Videos);
    /*$json_string=str_replace("{", "[", $json_string);
    $json_string=str_replace("}", "]", $json_string);*/
    
    
    //echo '{"data":'.$json_string.'}';
    echo $json_string;
   // echo '{"data":[["Trident","Internet Explorer 4.0","Win 95+","4","X"],["Trident","Internet Explorer 4.0","Win 95+","4","X"]]}';
?>
