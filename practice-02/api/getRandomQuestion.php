<?php

include '../services/RandomQuestionService.php';

$service = new RandomQuestionService();
$question = $service->getRandomQuestion();
$service->renderResult($question);

