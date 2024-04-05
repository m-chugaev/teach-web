<?php

include_once 'RenderResultTrait.php';
include_once 'QuestionsService.php';

/**
 * Сервис для генерации 1 случайного вопроса
 */
class RandomQuestionService
{
    use RenderResultTrait;

    public function getRandomQuestion(): string
    {
        $all = (new QuestionsService)->getQuestionsText();
        $randomKey = array_rand($all);
        return $all[$randomKey];
    }
}