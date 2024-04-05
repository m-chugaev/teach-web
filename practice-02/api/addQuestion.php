<?php

include '../services/SessionManager.php';
include '../services/AddQuestionService.php';

SessionManager::safeStart();

$service = new AddQuestionService();
$service->addQuestion();
$service->renderResult(['ok']);