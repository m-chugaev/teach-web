<?php

include '../services/QuestionsService.php';

$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$pageSize = isset($_GET['pageSize']) ? (int)$_GET['pageSize'] : 10;

$service = new QuestionsService();
$allQuestions = $service->getQuestions();

$questions = array_slice($allQuestions, ($page - 1) * $pageSize, $pageSize);

$result = [
    'questions' => $questions,
    'totalQuestions' => count($allQuestions),
];

$service->renderResult($result);