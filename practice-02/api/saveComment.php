<?php
include '../services/CommentsService.php';

$service = new CommentsService();
$data = json_decode(file_get_contents('php://input'), true);
$service->saveComment($data['comment']);

echo 'Комментарий сохранен';
?>
