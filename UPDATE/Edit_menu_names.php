<?php
    include_once("../Connection.php");
    $con = connection();

    $dining_id = $_POST['dining_id'];
    $menu_name = $_POST['menu_name'];
    $small_desc = $_POST['small_desc'];
    $menu_id = $_POST['menu_id'];
    $img = $_FILES['menu_img'];

    if(isset($img)) {
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

                    $sql = "UPDATE `menu_class` SET dining_id = '$dining_id', menu_name = '$menu_name', small_desc = '$small_desc', menu_img = '$new_img_name' WHERE id = '$menu_id'";
                    $con->query($sql) or die ($con->error);
                }
            }
        }
    } else {
        $sql = "UPDATE `menu_class` SET dining_id = '$dining_id', menu_name = '$menu_name', small_desc = '$small_desc' WHERE id = '$menu_id'";
        $con->query($sql) or die ($con->error);
    }
?>

<!-- Can't update the data -->

<!-- I got it, if we are sending data as a variable we need to enclos it in a quote
$small_desc   ------ WRONG
'$small_desc' ------ RIGHT
-->