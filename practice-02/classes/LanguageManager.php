<?php
class LanguageManager
{
    private $languages = ['ru', 'en'];
    private $currentLanguage;

    public function __construct()
    {
        $this->initLanguage();
    }

    private function initLanguage()
    {
        // Проверяем, есть ли сохраненный язык в сессии
        if (isset($_SESSION['language']) && in_array($_SESSION['language'], $this->languages)) {
            $this->currentLanguage = $_SESSION['language'];
        } else {
            // Если нет, то устанавливаем язык по умолчанию (ru)
            $this->currentLanguage = 'ru';
            $_SESSION['language'] = $this->currentLanguage;
        }
    }

    public function getCurrentLanguage()
    {
        return $this->currentLanguage;
    }

    public function setLanguage($language)
    {
        if (in_array($language, $this->languages)) {
            $this->currentLanguage = $language;
            $_SESSION['language'] = $language;
        }
    }

    public function getTranslation($key)
    {
        $translations = [
            'ru' => [
                'title' => 'Вопросы для собеседования',
                'random_questions' => 'Случайные вопросы',
                'generate_random' => 'Сгенерировать 5',
                'generate_random_one' => 'Сгенерировать ещё 1',
                'attempts' => 'Попытки',
                'bonuses' => 'Бонусы'
            ],
            'en' => [
                'title' => 'Interview Questions',
                'random_questions' => 'Random Questions',
                'generate_random' => 'Generate 5',
                'generate_random_one' => 'Generate 1 More',
                'attempts' => 'Attempts',
                'bonuses' => 'Bonuses'
            ]
        ];

        return $translations[$this->currentLanguage][$key] ?? $key;
    }
}
