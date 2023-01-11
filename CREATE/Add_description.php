<?php
    include_once("../Connection.php");
    $con = connection();
 
    $desc = $_POST['desc'];
    $menu_id = $_POST['menu_id'];

    /*
        I want to make a condition that checks if $menu_id exists in the database.
        If it exists, then I only want to UPDATE the $desc,
        Else I will INSERT both the $desc and the $menu_id.
     */

    $sql = "INSERT INTO `menu_description`(`description`, `menu_id`) VALUES ('$desc', '$menu_id')";
    $con->query($sql) or die ($con->error);

    // $allMenu = array();

    // do {
    //     if(in_array($row['menu_id'], $allMenu)) {
    //         $allMenu = $allMenu;
    //     } else {
    //         array_push($row['menu_id']);
    //     }
    // } while($row = $result->fetch_assoc());

    // do {
    //     if($menu_id == $row['menu_id']) {
    //         $sql = "UPDATE menu_description SET description = '$desc_ref' WHERE menu_id = '$menu_id'";
    //         $con->query($sql) or die ($con->error);
    //         exit();
    //     }
    // } while($row = $result->fetch_assoc());
?>