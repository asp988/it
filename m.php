<?php
// Сообщение
$message = $_GET["message"];

// На случай если какая-то строка письма длиннее 200 символов мы используем wordwrap()
$message = wordwrap($message, 200);

// Отправляем
mail('it.sphere.ua@gmail.com', 'Maintance order', $message);
?>