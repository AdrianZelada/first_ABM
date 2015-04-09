<?php
if (isset($_FILES['imagen'])) {
   $archivo = $_FILES['imagen'];
   $extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
   $time = time();
   $nombre = "{$_POST['name_file']}.$extension";
   if (move_uploaded_file($archivo['tmp_name'], "upload/$nombre")) {
      echo $nombre;
   } else {
      echo "no";
   }
}
?>