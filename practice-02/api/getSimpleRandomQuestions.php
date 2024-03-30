<?php

include '../services/SessionManager.php';
include '../services/SimpleRandomQuestionsService.php';

SessionManager::safeStart();

$service = new SimpleRandomQuestionsService();
$service->saveRequest();
$randomQuestions = $service->getRandomQuestions();
$service->renderResult($randomQuestions);