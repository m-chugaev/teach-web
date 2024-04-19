<?php

class CommentsService {
    private $commentsFilePath = 'C:\xampp\htdocs\practice-02\commnets.json'; // Укажите путь к файлу с комментариями

    public function getComments() {
        return json_decode(file_get_contents($this->commentsFilePath), true);
    }

    public function saveComment($comment) {
        $comments = $this->getComments();
        $comments[] = ['comment' => $comment, 'date' => date('Y-m-d H:i:s')];
        file_put_contents($this->commentsFilePath, json_encode($comments));
    }
}
?>
