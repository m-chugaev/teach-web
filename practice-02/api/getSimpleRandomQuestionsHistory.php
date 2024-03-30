<?php

include '../services/SessionManager.php';
include '../services/SimpleRandomQuestionsService.php';

SessionManager::safeStart();

$service = new SimpleRandomQuestionsService();
$history = $service->getRequestsHistory();
$service->renderResult($history);