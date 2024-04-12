// service
// render result json

<?php

include("../services/CheckEmailService.php");

SessionManager::safeStart();

$history = $service->getRequestsHistory();
$service = new CheckEmailService();
$service->saveRequest();
$check = $service->checkEmail(); // Здесь возвращаем итог строчку
$service->renderResult($check); // Сюда передаём итог строчку