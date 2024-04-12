<?php


// service
// render result json


include "../services/CheckEmailService.php";
include '../services/SessionManager.php';


SessionManager::safeStart();
$service = new CheckEmailService($_POST['email'] ?? '');
$service->save();
$check = $service->checkEmail(); // Здесь возвращаем итог строчку
$service->renderResult($check); // Сюда передаём итог строчку