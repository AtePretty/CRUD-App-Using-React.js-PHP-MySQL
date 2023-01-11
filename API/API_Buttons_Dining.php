<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT * FROM dining_class";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$dining = array();

do {
    $itemData = new stdClass();
    $itemData->id = $row["id"];
    $itemData->name = $row["dining_name"];
    array_push($dining, $itemData);
} while($row = $result->fetch_assoc());

$total = count($dining);

$diningClass = new stdClass();
$diningClass->total = $total;
$diningClass->dining = $dining;

echo json_encode($diningClass);
exit;
?>