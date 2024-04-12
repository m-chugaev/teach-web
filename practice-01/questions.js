const emojis = ["😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😒", "😓", "😔", "😖",
"😘", "😚", "😜", "😝", "😞", "😠", "😡", "😢", "😣", "😤", "😥", "😨", "😩", "😪", "😫", "😭", "😰", "😱"];
const questions = [
    // -- Basics
    {
        "text": "Что происходит в браузере после перехода по url",
        "tags": ["Basics"],
        "frequency": 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое клиент-серверная архитектура, какие особенности",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Расшифруйте HTTP, какие есть актуальные версии",
        "tags": ["Basics "],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие бывают типы HTTP-запросов",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие бывают коды состояния ответа HTTP (категории в сотнях)",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое CORS, зачем нужен, как избежать",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое REST API, примеры url",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое GraphQL, примеры тела запроса",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое Cookie и зачем они используются",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое сложность алгоритма, нотация О большое",
        "tags": ["Basics"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // -- CSS
    {
        "text": "Что такое каскад в CSS, несколько примеров",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Для чего нужны media-запросы в CSS, как работают",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие бывают типы позиционирования в CSS, в чём особенности",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие бывают значения у свойства display в CSS, в чём отличия",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
        "tags": ["CSS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // -- JS
    {
        "text": "Что такое window и в чём отличие от document",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие различия между let, var и const",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие есть типы данных в JS",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие различия между примитивными и ссылочными типами",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Как работает приведение типов в JS, примеры с == и ===",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое область видимости в JS, несколько примеров",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое localStorage и в чём отличие от sessionStorage",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое fetch, основные options и процесс получения результата",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое JSON, примеры использования",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие основные библиотеки для JS, в чём отличия",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "В чём отличия между библиотекой и фреймворком",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое менеджер пакетов, как работает npm",
        "tags": ["JS"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // -- OOP
    {
        "text": "Опишите базовые принципы ООП",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Назовите несколько паттернов проектирования",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое класс и объект, в чём разница",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },

    {
        "text": "Что такое абстрактный класс, примеры применения",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое интерфейс, примеры применения",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое DRY, как расшифровывается, пара примеров",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое KISS, как расшифровывается, пара примеров",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое SOLID, как расшифровывается, пара примеров",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "В чем разница между модификаторами доступа public, private и protected",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое конструктор класса",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое статические методы и свойства, чем отличаются от обычных",
        "tags": ["OOP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // Git
    // Краткие ответы - https://hackr.io/blog/git-interview-questions
    {
        "text": "Что такое Git и в чём отличие от GitHub",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Назовите некоторые наиболее часто используемые команды Git",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое head с точки зрения Git",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое конфликт с точки зрения Git и какие есть пути решения",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Каким образом можно переключиться на другую ветку не делая коммит сделанных изменений",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Опишите стратегию ветвления GitFlow",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие есть способы слияния веток (default, squash, rebase)",
        "tags": ["Git"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // Database
    // Очень просто - https://habr.com/ru/articles/555760/
    {
        "text": "Для чего нужны базы данных, примеры популярных",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие есть типы связей в базе данных, пример для каждого",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое ключи, какие бывают, как использовать",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое транзакции, расшифруйте ACID",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое миграции и для чего они нужны",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Какие четыре основных типа JOIN в SQL",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "В чём разница между DELETE и TRUNCATE",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "В чём разница между WHERE и HAVING",
        "tags": ["Database"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    // PHP
    // Побольше вопросов - https://github.com/ivan-isaev21/250-questions-PHP/blob/master/Junior/README.MD
    {
        "text": "Базовый синтаксис PHP, как объявить переменную, функцию, класс и объект",
        "tags": ["PHP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    },
    {
        "text": "Что такое менеджер зависимостей, как работает composer",
        "tags": ["PHP"],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }
    // остальные вопросы...
];

export default questions;
