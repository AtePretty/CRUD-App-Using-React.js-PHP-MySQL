<?php
function connection() {
    header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Headers: Content-Type");
    // header("Access-Control-Allow-Methods: PUT, GET, POST");

    $host = "localhost";
    $username = "root";
    $password = "xwTc8Jv2Q[5BlxYW";
    $database = "dining_database";

    $con = new mysqli($host, $username, $password, $database);

    if($con->connect_error) {
        echo $con->connect_error;
    } else {
        return $con;
    }
}
?>