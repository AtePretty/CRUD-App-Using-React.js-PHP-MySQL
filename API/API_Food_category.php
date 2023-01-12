<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT * FROM food_class";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$food = array();

do {
    $itemData = new stdClass();
    $itemData->id = $row["id"];
    $itemData->name = $row["food_name"];
    array_push($food, $itemData);
} while($row = $result->fetch_assoc());

$total = count($food);

$foodClass = new stdClass();
$foodClass->total = $total;
$foodClass->food = $food;

echo json_encode($foodClass);
exit;
?>