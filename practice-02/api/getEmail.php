<?php

include '../services/SessionManager.php';
include '../services/CheckEmailService.php';

SessionManager::safeStart();

$service = new CheckEmailService();
$history = $service->getLatest();
$service->renderResult($history);