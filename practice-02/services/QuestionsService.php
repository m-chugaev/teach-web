<?php

include_once 'RenderResultTrait.php';
include_once 'RandomSmileService.php';
/**
 * Сервис для получения общего списка вопросов
 */
class QuestionsService
{
    use RenderResultTrait;

    private const QUESTIONS = [
        [
            'text' => "Что происходит в браузере после перехода по url",
            'frequency' => 100
        ],
        [
            'text' => "Что такое клиент-серверная архитектура, какие особенности",
            'frequency' => 50
        ],
        [
            'text' => "Расшифруйте HTTP, какие есть актуальные версии",
            'frequency' => 40
        ],
        [
            'text' => "Какие бывают типы HTTP-запросов",
            'frequency' => 30
        ],
        [
            'text' => "Какие бывают коды состояния ответа HTTP (категории в сотнях)",
            'frequency' => 10
        ],
        [
            'text' => "Что такое CORS, зачем нужен, как избежать",
            'frequency' => 10
        ],
        [
            'text' => "Что такое REST API, примеры url",
            'frequency' => 10
        ],
        [
            'text' => "Что такое GraphQL, примеры тела запроса",
            'frequency' => 10
        ],
        [
            'text' => "Что такое Cookie и зачем они используются",
        ],
        [
            'text' => "Что такое сложность алгоритма, нотация О большое",
        ],
        [
            'text' => "Что такое каскад в CSS, несколько примеров",
        ],
        [
            'text' => "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
        ],
        [
            'text' => "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
        ],
        [
            'text' => "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
        ],
        [
            'text' => "Для чего нужны media-запросы в CSS, как работают",
        ],
        [
            'text' => "Какие бывают типы позиционирования в CSS, в чём особенности",
        ],
        [
            'text' => "Какие бывают значения у свойства display в CSS, в чём отличия",
        ],
        [
            'text' => "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
        ],
        [
            'text' => "Что такое window и в чём отличие от document",
        ],
        [
            'text' => "Какие различия между let, var и const",
        ],
        [
            'text' => "Какие есть типы данных в JS",
        ],
        [
            'text' => "Какие различия между примитивными и ссылочными типами",
        ],
        [
            'text' => "Как работает приведение типов в JS, примеры с == и ===",
        ],
        [
            'text' => "Что такое область видимости в JS, несколько примеров",
        ],
        [
            'text' => "Что такое localStorage и в чём отличие от sessionStorage",
        ],
        [
            'text' => "Что такое fetch, основные options и процесс получения результата",
        ],
        [
            'text' => "Что такое JSON, примеры использования",
        ],
        [
            'text' => "Какие основные библиотеки для JS, в чём отличия",
        ],
        [
            'text' => "В чём отличия между библиотекой и фреймворком",
        ],
        [
            'text' => "Что такое менеджер пакетов, как работает npm",
        ],
        [
            'text' => "Опишите базовые принципы ООП",
        ],
        [
            'text' => "Назовите несколько паттернов проектирования",
        ],
        [
            'text' => "Что такое класс и объект, в чём разница",
        ],
        [
            'text' => "Что такое абстрактный класс, примеры применения",
        ],
        [
            'text' => "Что такое интерфейс, примеры применения",
        ],
        [
            'text' => "Что такое DRY, как расшифровывается, пара примеров",
        ],
        [
            'text' => "Что такое KISS, как расшифровывается, пара примеров",
        ],
        [
            'text' => "Что такое SOLID, как расшифровывается, пара примеров",
        ],
        [
            'text' => "В чем разница между модификаторами доступа public, private и protected",
        ],
        [
            'text' => "Что такое конструктор класса",
        ],
        [
            'text' => "Что такое статические методы и свойства, чем отличаются от обычных",
        ],
        [
            'text' => "Что такое Git и в чём отличие от GitHub",
        ],
        [
            'text' => "Назовите некоторые наиболее часто используемые команды Git",
        ],
        [
            'text' => "Что такое head с точки зрения Git",
        ],
        [
            'text' => "Что такое конфликт с точки зрения Git и какие есть пути решения",
        ],
        [
            'text' => "Каким образом можно переключиться на другую ветку не делая коммит сделанных изменений",
        ],
        [
            'text' => "Опишите стратегию ветвления GitFlow",
        ],
        [
            'text' => "Для чего нужны базы данных, примеры популярных",
        ],
        [
            'text' => "Базовый синтаксис PHP, как объявить переменную, функцию, класс и объект",
        ],
        [
            'text' => "Что такое сессия в PHP, как хранится",
        ],
    ];

    public function getQuestions(): array
    {
        $questions = self::QUESTIONS;
    
        if (isset($_SESSION['questions'])) {
            $questions = array_merge($_SESSION['questions'], $questions);
        }
    
        $randomSmileService = new RandomSmileService();
        
        return array_map(function($item) use ($randomSmileService) {
            $item['smile'] = $randomSmileService->getSmile();
            return $item;
        }, $questions);
    }

    public function addQuestion(string $question): void
    {
        if (!isset($_SESSION['questions'])) {
            $_SESSION['questions'] = [];
        }
    
        $_SESSION['questions'][] = ['text' => $question];
    }

    public function getQuestionsText(): array
    {
        $all = $this->getQuestions();

        return array_map(function($el) {
            return $el['text'];
        }, $all);
    }

    public function getPaginatedQuestions(int $page, int $pageSize): array
    {
        $allQuestions = $this->getQuestions();
        $questions = array_slice($allQuestions, ($page - 1) * $pageSize, $pageSize);

        return [
            'questions' => $questions,
            'totalQuestions' => count($allQuestions),
        ];
    }

    public function calculateQuestionFrequencies(): array
    {
        $questions = $this->getQuestions();
        $frequencies = [];

        foreach ($questions as $question) {
            $text = $question['text'];
            $frequencies[$text] = $question['frequency'] ?? 1;
        }

        return $frequencies;
    }
}