<?php

include '../services/QuestionsService.php';

$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$pageSize = isset($_GET['pageSize']) ? (int)$_GET['pageSize'] : 10;

$service = new QuestionsService();
$result = $service->getPaginatedQuestions($page, $pageSize);

$service->renderResult($result);