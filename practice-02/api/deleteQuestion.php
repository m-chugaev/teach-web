<?php

include '../services/QuestionsService.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $service = new QuestionsService();

    $questionIndex = isset($_POST['questionIndex']) ? intval($_POST['questionIndex']) : null;

    if ($questionIndex !== null) {
        $result = $service->deleteQuestion($questionIndex);
        $service->renderResult($result);
    } else {
        $service->renderResult(['success' => false, 'message' => 'Необходимо указать индекс вопроса для удаления'], 400);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Только POST-запросы разрешены']);
}

?>
