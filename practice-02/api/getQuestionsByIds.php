<?php

include '../services/QuestionsService.php';

$idsParam = isset($_GET['ids']) ? $_GET['ids'] : '';

$service = new QuestionsService();

if (empty($idsParam)) {
    $service->renderResult(['error' => 'Идентификаторы не найдены']);
    exit;
}

$ids = array_map('intval', explode(',', $idsParam));

foreach ($ids as $id) {
    if ($id <= 0) {
        $service->renderResult(['error' => 'Идентификаторы должны быть положительными числами']);
        exit;
    }
}

$result = $service->getQuestionsByIds($ids);

$service->renderResult($result);