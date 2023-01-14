<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT food_class.id, food_class.food_name, food_class.menu_id, menu_class.menu_name FROM food_class INNER JOIN menu_class ON food_class.menu_id = menu_class.id";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$food = array();

do {
    $itemData = new stdClass();
    $itemData->id = $row["id"];
    $itemData->name = $row["food_name"];
    $itemData->menu_id = $row["menu_id"];
    $itemData->menu_name = $row["menu_name"];
    array_push($food, $itemData);
} while($row = $result->fetch_assoc());

$total = count($food);

$foodClass = new stdClass();
$foodClass->total = $total;
$foodClass->food = $food;

echo json_encode($foodClass);
exit;
?>