<?php
// ���������
$message = $_GET["message"];

// �� ������ ���� �����-�� ������ ������ ������� 200 �������� �� ���������� wordwrap()
$message = wordwrap($message, 200);

// ����������
mail('it.sphere.ua@gmail.com', 'Maintance order', $message);
?>