<?php

include '../services/QuestionOfDayService.php';

$service = new QuestionOfDayService();
$questionOfDay = $service->getQuestionOfDay();
$service->renderResult($questionOfDay);
