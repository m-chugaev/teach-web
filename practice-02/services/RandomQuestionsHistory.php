<?php
session_start();

class RandomQuestionsHistory
{
    public static function addToHistory($question)
    {
        if (!isset($_SESSION['random_questions_history'])) {
            $_SESSION['random_questions_history'] = array();
        }

        // Add the question to the history
        array_push($_SESSION['random_questions_history'], $question);

        // Limit the history to 10 entries
        if (count($_SESSION['random_questions_history']) > 10) {
            array_shift($_SESSION['random_questions_history']);
        }
    }

    public static function getHistory()
    {
        if (isset($_SESSION['random_questions_history'])) {
            return $_SESSION['random_questions_history'];
        }
        return array();
    }
}
?>
