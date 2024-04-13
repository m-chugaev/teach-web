<?php

include_once 'QuestionsService.php';

/**
 * Сервис для генерации случайных вопросов с учетом их частоты
 */
class RandomQuestionFrequency
{
    private $count;

    public function __construct(int $count = 5)
    {
        $this->count = $count;
    }

    public function getRandomQuestions(): array
    {
        $questionsService = new QuestionsService();
        $questionFrequencies = $questionsService->calculateQuestionFrequencies();
        $weightedQuestions = [];

        foreach ($questionFrequencies as $question => $frequency) {
            for ($i = 0; $i < $frequency; $i++) {
                $weightedQuestions[] = $question;
            }
        }

        shuffle($weightedQuestions);

        $selectedQuestions = array_slice($weightedQuestions, 0, $this->count);

        return $selectedQuestions;
    }
}