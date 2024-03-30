<?php

include_once 'RenderResultTrait.php';
include_once 'QuestionsService.php';

/**
 * Сервис для генерации n случайных вопросов
 */
class SimpleRandomQuestionsService
{
    use RenderResultTrait;

    private const DEFAULT_COUNT = 5;
    private const SESSION_KEY = 'simple_random_questions';

    private $count;

    public function __construct(int $count = self::DEFAULT_COUNT)
    {
        $this->count = $count;
    }

    public function getRandomQuestions(): array
    {
        $all = (new QuestionsService)->getQuestionsText();

        return array_rand(array_flip($all), $this->count);
    }

    public function getRequestsHistory(): array
    {
        return $_SESSION[self::SESSION_KEY] ?? [];
    }

    public function saveRequest(): void
    {
        $current = $this->getRequestsHistory();
        $current[] = date('Y-m-d H:i:s');
        $_SESSION[self::SESSION_KEY] = $current;
    }
}