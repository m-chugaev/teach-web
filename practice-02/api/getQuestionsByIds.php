<?php

include '../services/QuestionsByIdsService.php';

$service = new QuestionsByIdsService();

$validate = $service->validateQuery($_GET);

if (isset($validate['error'])) {
    $service->renderResult($validate);
    exit;
}

$result = $service->getQuestionsByIds($validate['ids']);

$service->renderResult($result);