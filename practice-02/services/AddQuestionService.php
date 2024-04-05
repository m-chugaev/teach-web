<?php

include_once 'RenderResultTrait.php';

/**
 * Сервис для добавления вопросов
 */
class AddQuestionService
{
    use RenderResultTrait;

    public function addQuestion(string $text): void
    {
        // сохраняем в сессию 
    }
    
    public function getAddQuestions(): array
    {
        // получаем из сессию 
    }
}