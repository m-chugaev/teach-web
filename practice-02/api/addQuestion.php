<?php

include '../services/SessionManager.php';
include '../services/QuestionsService.php'; 

SessionManager::safeStart();

$newQuestion = $_POST['newQuestion']; 

$questionsService = new QuestionsService(); 

$questionsService->addQuestion($newQuestion); 

$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$pageSize = isset($_GET['pageSize']) ? (int)$_GET['pageSize'] : 10;

$result = $questionsService->getPaginatedQuestions($page, $pageSize);
$questionsService->renderResult($result);