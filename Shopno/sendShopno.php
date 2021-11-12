<?php
header('Access-Control-Allow-Origin: *');

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "=?utf-8?B?".base64_encode("Shopno")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContentType: text/html; charset=utf-8\r\n";

$success = mail("pon4ikiller91@gmail.com", $subject, $message, $headers);
echo "Your message has been sent!", $success;
?>