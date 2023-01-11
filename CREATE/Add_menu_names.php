<?php
    include_once("../Connection.php");
    $con = connection();

    $dining_id = $_POST['dining_id'];
    $menu_name = $_POST['menu_name'];
    $small_desc = $_POST['small_desc'];

    if(isset($_FILES['menu_img'])) {
        $img = $_FILES['menu_img'];

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

                    $sql = "INSERT INTO `menu_class`(`dining_id`, `menu_name`, `small_desc`, `menu_img`) VALUES ('$dining_id', '$menu_name', '$small_desc', '$new_img_name')";
                    $con->query($sql) or die ($con->error);
                }
            }
        }
    } else {
        $sql = "INSERT INTO `menu_class`(`dining_id`, `menu_name`, `small_desc`) VALUES ('$dining_id', '$menu_name', '$small_desc')";
        $con->query($sql) or die ($con->error);
    }
?>