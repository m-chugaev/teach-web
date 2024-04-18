function getRandomQuestions($count) {
    return $randomQuestions;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['count'])) {
        $count = intval($_GET['count']);
        $randomQuestions = getRandomQuestions($count);
        header('Content-Type: application/json');
        echo json_encode($randomQuestions);
    } else {
        echo json_encode(['error' => 'Missing count parameter']);
    }
}