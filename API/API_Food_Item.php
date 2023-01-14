<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT item_class.id, item_class.item_name, item_class.food_id, food_class.food_name FROM item_class INNER JOIN food_class ON item_class.food_id = food_class.id";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$item = array();

do {
    $itemData = new stdClass();
    $itemData->id = $row["id"];
    $itemData->name = $row["item_name"];
    $itemData->food_id = $row["food_id"];
    $itemData->food_name = $row["food_name"];
    array_push($item, $itemData);
} while($row = $result->fetch_assoc());

$total = count($item);

$itemClass = new stdClass();
$itemClass->total = $total;
$itemClass->item = $item;

echo json_encode($itemClass);
exit;
?>