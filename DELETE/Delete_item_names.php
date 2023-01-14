<?php
    include_once("../Connection.php");
    $con = connection();
 
    $item_id = $_POST['item_id'];

    $sql = "DELETE FROM `item_class` WHERE id = '$item_id'";
    $con->query($sql) or die ($con->error);
?>