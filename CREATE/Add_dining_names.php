<?php
    include_once("../Connection.php");
    $con = connection();
 
    $dining_name = $_POST['dining_name'];

    $sql = "INSERT INTO `dining_class`(`dining_name`) VALUES ('$dining_name')";
    $con->query($sql) or die ($con->error);
?>