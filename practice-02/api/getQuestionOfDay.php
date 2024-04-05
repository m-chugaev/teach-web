<?php

include_once '../services/getQuestionOfDay.php';
$questionService = new QuestionsService();
$questionOfDay = $questionService->getQuestionOfDay();
echo json_encode($questionOfDay);
?>
