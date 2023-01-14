<?php
    include_once("../Connection.php");
    $con = connection();
 
    $name = $_POST['food_name'];
    $id = $_POST['food_id'];
    $menu_id = $_POST['menu_id'];

    $sql = "UPDATE `food_class` SET food_name = '$name', menu_id = '$menu_id' WHERE id = '$id'";
    $con->query($sql) or die ($con->error);
?>