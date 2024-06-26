<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $text = json_decode(file_get_contents('php://input'), true)['text'];

    $pattern = '/^[А-Яа-я\s]+$/u';
    $isValid = preg_match($pattern, $text);

    echo json_encode(['valid' => $isValid]);
} else {
    echo json_encode(['error' => 'Недопустимый запрос']);
}
?>
