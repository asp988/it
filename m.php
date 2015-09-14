<?php
$message = $_GET["message"];
$message = wordwrap($message, 200);
mail('it.sphere.ua@gmail.com', 'Maintance order', $message);
?>