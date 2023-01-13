<?php
    include_once("../Connection.php");
    $con = connection();
 
    $dining_id = $_POST['dining_id'];

    $sql = "DELETE FROM `dining_class` WHERE id = '$dining_id'";
    $con->query($sql) or die ($con->error);
?>