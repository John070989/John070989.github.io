<?php
session_start();

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$address = htmlspecialchars($_POST["address"]);
//$city = htmlspecialchars($_POST["city"]);
//$tarif = htmlspecialchars($_POST["select"]);
/* Устанавливаем e-mail адресата */
$myemail = "mts.kazan@yandex.ru, webmts@yandex.ru, tatarstan-letai@yandex.ru";
$tema = "Заполнена форма на сайте http://tatarstan-letai.ru";

$message_to_myemail = "Заполнена форма на сайте http://tatarstan-letai.ru

Имя отправителя: $name 
Телефон: $phone 
Адрес: $address 
";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: Сайт Таттелеком Казань";
mail($myemail, $tema, $message_to_myemail, $from)

?>
