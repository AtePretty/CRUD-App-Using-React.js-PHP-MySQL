<?php
    include_once("../Connection.php");
    $con = connection();
 
    $menu_id = $_POST['menu_id'];

    $sql = "DELETE FROM `menu_class` WHERE id = '$menu_id'";
    $con->query($sql) or die ($con->error);
?>