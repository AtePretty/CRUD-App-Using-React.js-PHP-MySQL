<?php
    include_once("../Connection.php");
    $con = connection();
 
    $id = $_POST['food_id'];

    $sql = "DELETE FROM `food_class` WHERE id = '$id'";
    $con->query($sql) or die ($con->error);
?>