<?php
    include_once("../Connection.php");
    $con = connection();
 
    $food_name = $_POST['food_name'];
    $menu_id = $_POST['menu_id'];

    $sql = "INSERT INTO `food_class`(`food_name`, `menu_id`) VALUES ('$food_name', '$menu_id')";
    $con->query($sql) or die ($con->error);
?>