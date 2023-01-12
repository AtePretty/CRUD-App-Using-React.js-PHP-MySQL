<?php

// creates a JSON file that we use as an API to the website
header("Content-Type: application/json");

// access our database from a server
include_once("../Connection.php");
$con = connection();

// join 4 tables using foreign keys, order does not matter
$sql = "SELECT item_class.id, item_class.item_name, item_class.item_img, item_class.food_id, food_class.food_name, food_class.menu_id, menu_class.menu_name, menu_description.description FROM item_class INNER JOIN food_class ON item_class.food_id = food_class.id INNER JOIN menu_class ON food_class.menu_id = menu_class.id INNER JOIN menu_description ON menu_class.id = menu_description.menu_id";
$result = $con->query($sql) or die($con->error);
$row = $result->fetch_assoc();

$menuData = array();
$allMenu = array();
$allFood = array();
$allItems = array();

do {
    $menu = new stdClass();
    $menu->menu_name = $row["menu_name"];
    $menu->menu_id = $row["menu_id"];
    $menu->menu_desc = $row["description"];

    $foodList = new stdClass();
    $foodList->food_name = $row["food_name"];
    $foodList->food_id = $row["food_id"];
    
    $item = new stdClass();
    $item->item_name = $row["item_name"];
    $item->item_id = $row["id"];        
    $item->item_img = $row["item_img"];

    $itemArray = array();
    $itemArray =  $item;
    array_push($allItems, $itemArray);

    $foodArray = array();
    array_push($foodArray, $itemArray);
    
    /*
        If the current value of $row["food_id"] cannot be be found in $allFood array, then we append.
        We also stored the $foodArray to the key value food_item in the $foodList object.
    */
    if (!in_array($row["food_id"], $allFood, true)) {
        array_push($allFood, $row["food_id"]);
        $foodList->food_item = $foodArray;
        $menuArray = array();
        array_push($menuArray, $foodList);

        /*
            If the current value of $row["menu_id"] cannot be be found in $allMenu array, then we append.
            And we stored all data dircetly to the $menuData array.
        */
        if (!in_array($row["menu_id"], $allMenu, true)) {
            array_push($allMenu, $row["menu_id"]);
            $menu->menu_food = $menuArray;
            array_push($menuData, $menu);
        } else {
            /*
                If it exists, then just append the $foodList directly to the $menuData by accessing it's inner values
            */
            for ($i = 0; $i < count($menuData); $i++) {
                if ($row["menu_id"] === $menuData[$i]->menu_id) {
                    array_push($menuData[$i]->menu_food, $foodList);
                }
            }
        }
    } else {
        /*
            If it exists, then just append the $itemArray directly to the $menuData by accessing it's inner values, twice to get to the menu_food array
        */
        for ($i = 0; $i < count($menuData); $i++) {
            for ($j = 0; $j < count($menuData[$i]->menu_food); $j++) {
                if ($row["food_id"] === $menuData[$i]->menu_food[$j]->food_id) {
                    array_push($menuData[$i]->menu_food[$j]->food_item, $itemArray);
                }
            }
        }
    }
} while($row = $result->fetch_assoc());

$foodClass = new stdClass();
$foodClass->item_total = count($allItems);
$foodClass->food_total = count($allFood);
$foodClass->menu_total = count($allMenu);
$foodClass->menu = $menuData;

echo json_encode($foodClass);
exit;
?>


<!-- Please note that there is an existing bug in the code,
one of the data is duplicated in the API. I'm still looking
for it. -->