<?php

//var_dump($_POST);
if(empty($_POST)){
    echo "<h3>You did not insert data</h3>";
    exit;
}

//Validate all data
$name = "";
$email = "";
$subject = "";
$message = "";
$recipient = "gleb.zavizenov@gmail.com";

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['message'])){
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
}

//Sending an email
$headers = array(
    'From' => 'gleb.portfolio@gmail.com',
    'Reply To' => $name . '<' . $email . '>'
);

if(mail($recipient, $subject, $message, $headers)){
    echo '<h3>Message was successfully sent!</h3>';
} else {
    echo '<h3>We are sorry that email did not get through</h3>';
}

?>