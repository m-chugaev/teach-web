<?php


// service
// render result json


include "../services/CheckEmailService.php";
include '../services/SessionManager.php';


SessionManager::safeStart();
$service = new CheckEmailService();
$service->saveRequest();
$check = $service->checkEmail(); // Здесь возвращаем итог строчку
$service->renderResult($check); // Сюда передаём итог строчку