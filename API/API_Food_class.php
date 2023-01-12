<?php
header("Content-Type: application/json");
include_once("../Connection.php");
$con = connection();

$sql = "SELECT item_class.id, item_class.item_name, item_class.item_img, item_class.food_id, food_class.food_name, food_class.menu_id, menu_class.menu_name, menu_description.description FROM item_class INNER JOIN food_class ON item_class.food_id = food_class.id INNER JOIN menu_class ON food_class.menu_id = menu_class.id INNER JOIN menu_description ON menu_class.id = menu_description.menu_id";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$foodData = array();
$food_ids = array();

$allItems = array();

do {
    $item = new stdClass();
    $item->name = $row["item_name"];
    $item->id = $row["id"];        
    $item->img = $row["item_img"];

    $itemArray = array();
    $itemArray =  $item;
    array_push($allItems, $itemArray);

    $foodArray = array();
    array_push($foodArray, $itemArray);
        
    $foodList = new stdClass();
    $foodList->name = $row["food_name"];
    $foodList->id = $row["food_id"];
    $foodList->item = $foodArray;

    if (!in_array($row["food_id"], $food_ids, true)) {
        array_push($food_ids, $row["food_id"]);
        array_push($foodData, $foodList);
    } else {
        for ($i = 0; $i < count($foodData); $i++) {
            if ($row["food_id"] === $foodData[$i]->id) {
                array_push($foodData[$i]->item, $itemArray);
            }
        }
        
    }

    
} while($row = $result->fetch_assoc());

$foodClass = new stdClass();
$foodClass->item_total = count($allItems);
$foodClass->food_total = count($food_ids);
$foodClass->food = $foodData;

echo json_encode($foodClass);
exit;
?>