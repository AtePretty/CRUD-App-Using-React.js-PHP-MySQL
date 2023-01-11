<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT menu_class.id, menu_class.menu_name, dining_class.dining_name, menu_class.menu_img, menu_class.small_desc FROM menu_class INNER JOIN dining_class ON menu_class.dining_id=dining_class.id";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$dining = array();

do {
    $itemData = new stdClass();
    $itemData->id = $row["id"];
    $itemData->menu = $row["menu_name"];
    $itemData->dining = $row["dining_name"];
    $itemData->img = $row["menu_img"];
    $itemData->description = $row["small_desc"];
    array_push($dining, $itemData);
} while($row = $result->fetch_assoc());

$total = count($dining);

$diningClass = new stdClass();
$diningClass->total = $total;
$diningClass->dining = $dining;

echo json_encode($diningClass);
exit;
?>