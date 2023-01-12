<?php
    include_once("../Connection.php");
    $con = connection();

    $food_id = $_POST['food_id'];
    $item_name = $_POST['item_name'];

    if(isset($_FILES['item_img'])) {
        $img = $_FILES['item_img'];

        $img_name = $img['name'];
        $img_size = $img['size'];
        $img_temp_name = $img['tmp_name'];
        $img_error = $img['error'];

        if($img_error === 0) {
            if($img_size < 10000000) {
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);

                $allowed_exs = array("jpg", "jpeg", "png");

                if(in_array($img_ex_lc, $allowed_exs)) {
                    $new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
                    $img_upload_path = "../public/uploads/".$new_img_name;
                    move_uploaded_file($img_temp_name, $img_upload_path);

                    $sql = "INSERT INTO `item_class`(`food_id`, `item_name`, `item_img`) VALUES ('$food_id', '$item_name', '$new_img_name')";
                    $con->query($sql) or die ($con->error);
                }
            }
        }
    } else {
        $sql = "INSERT INTO `item_class`(`food_id`, `item_name`) VALUES ('$food_id', '$item_name')";
        $con->query($sql) or die ($con->error);
    }
?>