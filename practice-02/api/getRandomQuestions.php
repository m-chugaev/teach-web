<?php
include '../questions.php';

$randomQuestions = [
    $questions[1],
    $questions[3],
    $questions[5],
    $questions[7],
    $questions[8],
];

header('Content-Type: application/json; charset=utf-8');
echo json_encode($randomQuestions);