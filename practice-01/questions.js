<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Вопросы</title>
  <style> 
        body { 
    font-family: Verdana, sans-serif; 
    background-color: #ebebeb; 
} 

.container { 
    max-width: 700px; 
    margin: 0 auto; 
    padding: 30px; 
    background-color: #ffffff; 
    border-radius: 10px; 
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3); 
} 

h1 { 
    text-align: center; 
    margin-bottom: 40px; 
    color: #333333; 
} 

label { 
    font-weight: bold; 
    color: #666666; 
} 

select { 
    margin-bottom: 30px; 
    width: 100%; 
    padding: 10px; 
    border-radius: 5px; 
    border: 1px solid #cccccc; 
    color: #333333; 
} 

ul { 
    list-style-type: none; 
    padding: 0; 
} 

li { 
    margin-bottom: 20px; 
    background-color: #f2f2f2; 
    padding: 20px; 
    border-radius: 5px; 
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1); 
} 

.tags { 
    margin-top: 10px; 
} 

.tags span { 
    display: inline-block; 
    padding: 8px; 
    background-color: #333333; 
    color: #ffffff; 
    border-radius: 5px; 
    margin-right: 8px; 
    font-size: 12px; 
} 

.tags span:last-child { 
    margin-right: 0; 
} 

    </style>
</head>
<body>
    <label for="filter">Фильтр по тегам:</label>
    <select id="filter">
        <option value="all">Все теги</option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
        <option value="Basics">Basics</option>
        <option value="OOP">OOP</option>
        <option value="Git">Git</option>
        <option value="Database">Database</option>
        <option value="PHP">PHP</option>
    </select>
    
    <ul id="questionList"></ul>

    <script>
        const questions = [
    // -- Basics
    {
        "text": "Что происходит в браузере после перехода по url",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое клиент-серверная архитектура, какие особенности",
        "tags": ["Basics"]
    },
    {
        "text": "Расшифруйте HTTP, какие есть актуальные версии",
        "tags": ["Basics "]
    },
    {
        "text": "Какие бывают типы HTTP-запросов",
        "tags": ["Basics"]
    },
    {
        "text": "Какие бывают коды состояния ответа HTTP (категории в сотнях)",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое CORS, зачем нужен, как избежать",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое REST API, примеры url",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое GraphQL, примеры тела запроса",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое Cookie и зачем они используются",
        "tags": ["Basics"]
    },
    {
        "text": "Что такое сложность алгоритма, нотация О большое",
        "tags": ["Basics"]
    },
    // -- CSS
    {
        "text": "Что такое каскад в CSS, несколько примеров",
        "tags": ["CSS"]
    },
    {
        "text": "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
        "tags": ["CSS"]
    },
    {
        "text": "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
        "tags": ["CSS"]
    },
    {
        "text": "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
        "tags": ["CSS"]
    },
    {
        "text": "Для чего нужны media-запросы в CSS, как работают",
        "tags": ["CSS"]
    },
    {
        "text": "Какие бывают типы позиционирования в CSS, в чём особенности",
        "tags": ["CSS"]
    },
    {
        "text": "Какие бывают значения у свойства display в CSS, в чём отличия",
        "tags": ["CSS"]
    },
    {
        "text": "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
        "tags": ["CSS"]
    },
    // -- JS
    {
        "text": "Что такое window и в чём отличие от document",
        "tags": ["JS"]
    },
    {
        "text": "Какие различия между let, var и const",
        "tags": ["JS"]
    },
    {
        "text": "Какие есть типы данных в JS",
        "tags": ["JS"]
    },
    {
        "text": "Какие различия между примитивными и ссылочными типами",
        "tags": ["JS"]
    },
    {
        "text": "Как работает приведение типов в JS, примеры с == и ===",
        "tags": ["JS"]
    },
    {
        "text": "Что такое область видимости в JS, несколько примеров",
        "tags": ["JS"]
    },
    {
        "text": "Что такое localStorage и в чём отличие от sessionStorage",
        "tags": ["JS"]
    },
    {
        "text": "Что такое fetch, основные options и процесс получения результата",
        "tags": ["JS"]
    },
    {
        "text": "Что такое JSON, примеры использования",
        "tags": ["JS"]
    },
    {
        "text": "Какие основные библиотеки для JS, в чём отличия",
        "tags": ["JS"]
    },
    {
        "text": "В чём отличия между библиотекой и фреймворком",
        "tags": ["JS"]
    },
    {
        "text": "Что такое менеджер пакетов, как работает npm",
        "tags": ["JS"]
    },
    // -- OOP
    {
        "text": "Опишите базовые принципы ООП",
        "tags": ["OOP"]
    },
    {
        "text": "Назовите несколько паттернов проектирования",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое класс и объект, в чём разница",
        "tags": ["OOP"]
    },

    {
        "text": "Что такое абстрактный класс, примеры применения",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое интерфейс, примеры применения",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое DRY, как расшифровывается, пара примеров",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое KISS, как расшифровывается, пара примеров",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое SOLID, как расшифровывается, пара примеров",
        "tags": ["OOP"]
    },
    {
        "text": "В чем разница между модификаторами доступа public, private и protected",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое конструктор класса",
        "tags": ["OOP"]
    },
    {
        "text": "Что такое статические методы и свойства, чем отличаются от обычных",
        "tags": ["OOP"]
    },
    // Git
    // Краткие ответы - https://hackr.io/blog/git-interview-questions
    {
        "text": "Что такое Git и в чём отличие от GitHub",
        "tags": ["Git"]
    },
    {
        "text": "Назовите некоторые наиболее часто используемые команды Git",
        "tags": ["Git"]
    },
    {
        "text": "Что такое head с точки зрения Git",
        "tags": ["Git"]
    },
    {
        "text": "Что такое конфликт с точки зрения Git и какие есть пути решения",
        "tags": ["Git"]
    },
    {
        "text": "Каким образом можно переключиться на другую ветку не делая коммит сделанных изменений",
        "tags": ["Git"]
    },
    {
        "text": "Опишите стратегию ветвления GitFlow",
        "tags": ["Git"]
    },
    {
        "text": "Какие есть способы слияния веток (default, squash, rebase)",
        "tags": ["Git"]
    },
    // Database
    // Очень просто - https://habr.com/ru/articles/555760/
    {
        "text": "Для чего нужны базы данных, примеры популярных",
        "tags": ["Database"]
    },
    {
        "text": "Какие есть типы связей в базе данных, пример для каждого",
        "tags": ["Database"]
    },
    {
        "text": "Что такое ключи, какие бывают, как использовать",
        "tags": ["Database"]
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "tags": ["Database"]
    },
    {
        "text": "Что такое индексы, опишите структуру данных (btree)",
        "tags": ["Database"]
    },
    {
        "text": "Что такое транзакции, расшифруйте ACID",
        "tags": ["Database"]
    },
    {
        "text": "Что такое миграции и для чего они нужны",
        "tags": ["Database"]
    },
    {
        "text": "Какие четыре основных типа JOIN в SQL",
        "tags": ["Database"]
    },
    {
        "text": "В чём разница между DELETE и TRUNCATE",
        "tags": ["Database"]
    },
    {
        "text": "В чём разница между WHERE и HAVING",
        "tags": ["Database"]
    },
    // PHP
    // Побольше вопросов - https://github.com/ivan-isaev21/250-questions-PHP/blob/master/Junior/README.MD
    {
        "text": "Базовый синтаксис PHP, как объявить переменную, функцию, класс и объект",
        "tags": ["PHP"]
    },
    {
        "text": "Что такое менеджер зависимостей, как работает composer",
        "tags": ["PHP"]
    }
    // остальные вопросы...
];


        const filterSelect = document.getElementById('filter');
        const questionList = document.getElementById('questionList');

        function displayQuestions(tag) {
            questionList.innerHTML = '';
            
            questions.forEach(question => {
                if (tag === 'all' || question.tags.includes(tag)) {
                    const li = document.createElement('li');
                    li.textContent = question.text;

                    const tags = document.createElement('div');
                    tags.classList.add('tags');
                    question.tags.forEach(tag => {
                        const tagSpan = document.createElement('span');
                        tagSpan.textContent = tag;
                        tags.appendChild(tagSpan);
                    });

                    li.appendChild(tags);
                    questionList.appendChild(li);
                }
            });
        }

        filterSelect.addEventListener('change', () => {
            const selectedTag = filterSelect.value;
            displayQuestions(selectedTag);
        });

        displayQuestions('all');
    </script>
</body>
</html>
