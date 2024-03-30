<?php

include '../services/QuestionsService.php';

$service = new QuestionsService();
$questions = $service->getQuestions();
$service->renderResult($questions);
