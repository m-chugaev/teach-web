const questions = [
    // -- Basics
    {
        "text": "Что происходит в браузере после перехода по url",
        "frequency": 1
    },
    {
        "text": "Что такое клиент-серверная архитектура, какие особенности",
        "frequency": 10
    },
    {
        "text": "Расшифруйте HTTP, какие есть актуальные версии",
        "frequency": 99
    },
    {
        "text": "Какие бывают типы HTTP-запросов",
        "frequency": 12
    },
    {
        "text": "Какие бывают коды состояния ответа HTTP (категории в сотнях)",
        "frequency": 12
    },
    {
        "text": "Что такое CORS, зачем нужен, как избежать",
        "frequency": 5
    },
    {
        "text": "Что такое REST API, примеры url",
        "frequency": 6
        // https://gb.ru/blog/rest-api/
    },
    {
        "text": "Что такое GraphQL, примеры тела запроса",
        "frequency": 2
    },
    {
        "text": "Что такое Cookie и зачем они используются",
        "frequency": 8
        // https://habr.com/ru/articles/710578/
    },
    {
        "text": "Что такое сложность алгоритма, нотация О большое",
        "frequency": 345
        // https://techrocks.ru/2021/04/02/big-o-notation-examples/
    },
    // -- CSS
    // Для 3х ниже - https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
    {
        "text": "Что такое каскад в CSS, несколько примеров",
        "frequency": 53
    },
    {
        "text": "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
        "frequency": 99

    },
    {
        "text": "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
        "frequency": 99
    },
    {
        "text": "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
        "frequency": 99
    },
    {
        "text": "Для чего нужны media-запросы в CSS, как работают",
        "frequency": 99
    },
    {
        "text": "Какие бывают типы позиционирования в CSS, в чём особенности",
        "frequency": 99
    },
    {
        "text": "Какие бывают значения у свойства display в CSS, в чём отличия",
        "frequency": 99
    },
    {
        "text": "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
        "frequency": 99
    },
    // -- JS
    // Часть вопросов и ответов - https://github.com/ivan-isaev21/300-questions-js/blob/main/Junior/README.MD
    {
        "text": "Что такое window и в чём отличие от document",
        "frequency": 99
    },
    {
        "text": "Какие различия между let, var и const",
        "frequency": 99
    },
    {
        "text": "Какие есть типы данных в JS",
        "frequency": 99
    },
    {
        "text": "Какие различия между примитивными и ссылочными типами",
        "frequency": 99
    },
    {
        "text": "Как работает приведение типов в JS, примеры с == и ===",
        "frequency": 99
    },
    {
        "text": "Что такое область видимости в JS, несколько примеров",
        "frequency": 99
    },
    {
        "text": "Что такое localStorage и в чём отличие от sessionStorage",
        "frequency": 99
    },
    {
        "text": "Что такое fetch, основные options и процесс получения результата",
        "frequency": 99
    },
    {
        "text": "Что такое JSON, примеры использования",
        "frequency": 99
    },
    {
        "text": "Какие основные библиотеки для JS, в чём отличия",
        "frequency": 99
    },
    {
        "text": "В чём отличия между библиотекой и фреймворком",
        "frequency": 124
    },
    {
        "text": "Что такое менеджер пакетов, как работает npm",
        "frequency": 99
    },
    // -- OOP
    // Очень кратко - https://tproger.ru/translations/oop-principles-cheatsheet
    // Чуть подробнее - https://skillbox.ru/media/code/oop_chast_1_chto_takoe_klassy_i_obekty/
    {
        "text": "Опишите базовые принципы ООП",
        "frequency": 99
    },
    {
        "text": "Назовите несколько паттернов проектирования",
        "frequency": 99
    },
    {
        "text": "Что такое класс и объект, в чём разница",
        "frequency": 99
    },
    {
        "text": "Что такое абстрактный класс, примеры применения",
        "frequency": 99
    },
    {
        "text": "Что такое интерфейс, примеры применения",
        "frequency": 99
    },
    {
        "text": "Что такое DRY, как расшифровывается, пара примеров",
        "frequency": 99
    },
    {
        "text": "Что такое KISS, как расшифровывается, пара примеров",
        "frequency": 99
    },
    {
        "text": "Что такое SOLID, как расшифровывается, пара примеров",
        "frequency": 99
    },
    {
        "text": "В чем разница между модификаторами доступа public, private и protected",
        "frequency": 99
    },
    {
        "text": "Что такое конструктор класса",
        "frequency": 99
    },
    {
        "text": "Что такое статические методы и свойства, чем отличаются от обычных",
        "frequency": 99
    },
    // Git
    // Краткие ответы - https://hackr.io/blog/git-interview-questions
    {
        "text": "Что такое Git и в чём отличие от GitHub",
        "frequency": 99
    },
    {
        "text": "Назовите некоторые наиболее часто используемые команды Git",
        "frequency": 99
    },
    {
        "text": "Что такое head с точки зрения Git",
        "frequency": 99
    },
    {
        "text": "Что такое конфликт с точки зрения Git и какие есть пути решения",
        "frequency": 99
    },
    {
        "text": "Каким образом можно переключиться на другую ветку не делая коммит сделанных изменений",
        "frequency": 99
    },
    {
        "text": "Опишите стратегию ветвления GitFlow",
        "frequency": 99
    },
    {
        "text": "Какие есть способы слияния веток (default, squash, rebase)",
        "frequency": 99
    },
    // Database
    // Очень просто - https://habr.com/ru/articles/555760/
    {
        "text": "Для чего нужны базы данных, примеры популярных",
        "frequency": 99
    },
    {
        "text": "Какие есть типы связей в базе данных, пример для каждого",
        "frequency": 99
    },
    {
        "text": "Что такое ключи, какие бывают, как использовать",
        "frequency": 99
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "frequency": 67
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "frequency": 34
    },
    {
        "text": "Что такое транзакции, расшифруйте ACID",
        "frequency": 65
    },
    {
        "text": "Что такое миграции и для чего они нужны",
        "frequency": 122
    },
    {
        "text": "Какие четыре основных типа JOIN в SQL",
        "frequency": 42
    },
    {
        "text": "В чём разница между DELETE и TRUNCATE",
        "frequency": 77
    },
    {
        "text": "В чём разница между WHERE и HAVING",
        "frequency": 32
    },
    // PHP
    // Побольше вопросов - https://github.com/ivan-isaev21/250-questions-PHP/blob/master/Junior/README.MD
    {
        "text": "Базовый синтаксис PHP, как объявить переменную, функцию, класс и объект",
        "frequency": 53
    },
    {
        "text": "Что такое менеджер зависимостей, как работает composer",
        "frequency": 13
    },
];

export default questions;