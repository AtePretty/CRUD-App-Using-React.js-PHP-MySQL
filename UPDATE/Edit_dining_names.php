<?php
    include_once("../Connection.php");
    $con = connection();
 
    $dining_name = $_POST['dining_name'];
    $dining_id = $_POST['dining_id'];

    $sql = "UPDATE `dining_class` SET dining_name = '$dining_name' WHERE id = '$dining_id'";
    $con->query($sql) or die ($con->error);
?>