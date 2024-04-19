<?php
include '../services/CommentsService.php';

$service = new CommentsService();
$comments = $service->getComments();

header('Content-Type: application/json');
echo json_encode($comments);
?>
