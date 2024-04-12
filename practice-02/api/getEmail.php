<?php

include '../services/SessionManager.php';
include '../services/CheckEmailService.php';

SessionManager::safeStart();

$service = new CheckEmailService();
$history = $service->getRequestsHistory();
$service->renderResult($history);