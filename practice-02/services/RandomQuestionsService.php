include '../api/getRandomQuestions.php'; 
class RandomQuestionsService {
    public function fetchRandomQuestions($count) {
        $url = API_BASE_URL . 'getRandomQuestions.php?count=' . $count;
        $response = file_get_contents($url);
        return json_decode($response, true);
    }
}