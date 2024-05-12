<?php
require "DataBase.php";
$db = new DataBase();
$response = array();
if (isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password'])) {
    if ($db->dbConnect()) {
        if ($db->signUp("users", $_POST['fullname'], $_POST['email'], $_POST['username'], $_POST['password'])) {
            $response['status'] = "success";
            $response['message'] = "Sign Up Success";
        } else {
            $response['status'] = "error";
            $response['message'] = "Sign up Failed";
        }
    } else {
        $response['status'] = "error";
        $response['message'] = "Error: Database connection";
    }
} else {
    $response['status'] = "error";
    $response['message'] = "All fields are required";
}

echo json_encode($response);
?>
