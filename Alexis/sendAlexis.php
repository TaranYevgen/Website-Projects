<?php
header('Access-Control-Allow-Origin: *');

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$projectBudget = $_POST['projectBudget'];
$message = $_POST['message'];

$subject = "=?utf-8?B?".base64_encode("Alexis")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContentType: text/html; charset=utf-8\r\n";

$success = mail("pon4ikiller91@gmail.com", $subject, $projectBudget, $message, $headers);
echo "Your message has been sent!", $success;
?>