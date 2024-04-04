<?php
session_start();

// Проверяем, есть ли уже список показанных вопросов в сессии
if (!isset($_SESSION['shown_questions'])) {
    $_SESSION['shown_questions'] = array();
}

// Проверяем, был ли показан вопрос сегодня
$question_of_day = null;
$today = date('Y-m-d');
if (!isset($_SESSION['last_question_date']) || $_SESSION['last_question_date'] !== $today) {
    // Получаем список всех вопросов из сервиса
    include_once 'services/QuestionsService.php';
    $questionsService = new QuestionsService();
    $all_questions = $questionsService->getQuestionsText();

    // Выбираем случайный вопрос из списка всех вопросов, который еще не был показан пользователю
    foreach ($all_questions as $question) {
        if (!in_array($question, $_SESSION['shown_questions'])) {
            $question_of_day = $question;
            break;
        }
    }

    // Если все вопросы уже были показаны, сбрасываем список показанных вопросов и показываем первый вопрос из списка
    if ($question_of_day === null) {
        $_SESSION['shown_questions'] = array();
        $question_of_day = $all_questions[0];
    }

    // Сохраняем дату показа текущего вопроса
    $_SESSION['last_question_date'] = $today;

    // Добавляем текущий вопрос в список показанных вопросов
    $_SESSION['shown_questions'][] = $question_of_day;
} else {
    // Если вопрос уже был показан сегодня, возвращаем тот же самый вопрос
    $question_of_day = $_SESSION['shown_questions'][count($_SESSION['shown_questions']) - 1];
}

// Возвращаем вопрос дня в JSON-формате
echo json_encode($question_of_day);
?>
