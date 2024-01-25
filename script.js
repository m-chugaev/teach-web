const questions = [
    // -- Basics
    {
        "text": "Что происходит в браузере после перехода по url",
    },
    {
        "text": "Что такое клиент-серверная архитектура, какие особенности",
    },
    // -- JS
    {
        "text": "Что такое window и в чём отличие от document",
    },
    {
        "text": "Какие различия между let, var и const",
    },
    {
        "text": "Какие есть типы данных в JS",
    },
    {
        "text": "Какие различия между примитивными и ссылочными типами",
    },
    {
        "text": "Как работает приведение типов в JS, примеры с == и ===",
    },
    {
        "text": "Что такое область видимости в JS, несколько примеров",
    },
    {
        "text": "Что такое localStorage и в чём отличие от sessionStorage и cookies",
    },
    {
        "text": "Что такое fetch, основные options и процесс получения результата",
    },
    {
        "text": "Что такое CORS, зачем нужен, как избежать",
    },
    {
        "text": "Какие основные библиотеки для JS, в чём отличия",
    },
    // -- CSS
    // Для 3х ниже - https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
    {
        "text": "Что такое каскад в CSS, несколько примеров",
    },
    {
        "text": "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
    },
    {
        "text": "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
    },
    {
        "text": "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
    },
    {
        "text": "Для чего нужны media-запросы в CSS, как работают",
    },
    {
        "text": "Какие бывают типы позиционирования в CSS, в чём особенности",
    },
    {
        "text": "Какие бывают значения у свойства display в CSS, в чём отличия",
    },
    {
        "text": "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
    },
];

function fillQuestions() {
    const parent = document.querySelector('.js-questions');
    
    if (parent === undefined) {
        console.error('Ошибка! Не смогли найти элемент .js-questions на странице.');
        return;
    }

    questions.map((question) => {
        const node = document.createElement("li");
        node.textContent = question.text;
        parent.appendChild(node);
    });
}

function startApp() {
    fillQuestions();
}

document.addEventListener('DOMContentLoaded', startApp);