<?php
session_start();


if (!isset($_SESSION['shown_questions'])) {
    $_SESSION['shown_questions'] = array();
}

$question_of_day = null;
$today = date('Y-m-d');
if (!isset($_SESSION['last_question_date']) || $_SESSION['last_question_date'] !== $today) {
    include_once 'services/QuestionsService.php';
    $questionsService = new QuestionsService();
    $all_questions = $questionsService->getQuestionsText();

    foreach ($all_questions as $question) {
        if (!in_array($question, $_SESSION['shown_questions'])) {
            $question_of_day = $question;
            break;
        }
    }

    if ($question_of_day === null) {
        $_SESSION['shown_questions'] = array();
        $question_of_day = $all_questions[0];
    }

    $_SESSION['last_question_date'] = $today;

    $_SESSION['shown_questions'][] = $question_of_day;
} else {
    $question_of_day = $_SESSION['shown_questions'][count($_SESSION['shown_questions']) - 1];
}

echo json_encode($question_of_day);
?>
