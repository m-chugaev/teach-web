<?php

include '../services/RandomQuestionFrequency.php';

$service = new RandomQuestionFrequency();
$randomQuestions = $service->getRandomQuestions();
header('Content-Type: application/json');
echo json_encode($randomQuestions);