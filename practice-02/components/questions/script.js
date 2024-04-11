(function () {
    let currentPage = 1;
    const pageSize = 10;
   
    function getQuestions(page = currentPage) {
        const url = `getQuestions.php?page=${page}&pageSize=${pageSize}`;
        return fetch(url).then(response => response.json());
    }

    function getRandomQuestions(n) {
        return getQuestions().then(data => {
            const allQuestions = data.questions;
            const randomQuestions = [];
            while (randomQuestions.length < n) {
                const randomIndex = Math.floor(Math.random() * allQuestions.length);
                if (!randomQuestions.includes(allQuestions[randomIndex])) {
                    randomQuestions.push(allQuestions[randomIndex]);
                }
            }
            return randomQuestions;
        });
    }

    function fillQuestions() {
        const container = document.querySelector('.js-questions');

        getQuestions().then(data => {
            container.innerHTML = '';
            const questions = data.questions;
            questions.forEach((question, index) => {
                const questionNode = document.createElement('li');
                questionNode.textContent = question.text;
                container.appendChild(questionNode);
            });
            updatePaginationControls(data.totalQuestions);
        });
    }

    function navigate(page) {
        currentPage = page;
        updateURL(page);
        fillQuestions();
    }

    function updatePaginationControls(totalQuestions) {
        const paginationContainer = document.querySelector('.js-pagination');
        paginationContainer.innerHTML = '';

        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Назад';
            prevButton.addEventListener('click', () => navigate(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        const pageInfo = document.createElement('span');
        pageInfo.textContent = `Страница ${currentPage}`;
        paginationContainer.appendChild(pageInfo);

        if (totalQuestions > currentPage * pageSize) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Вперед';
            nextButton.addEventListener('click', () => navigate(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }
   
    function updateURL(page) {
        const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}`;
        window.history.pushState({ path: newURL }, '', newURL);
    }

    function showRandomQuestions(n) {
        getRandomQuestions(n).then(randomQuestions => {
            const randomQuestionsContainer = document.querySelector('.js-random-questions');
            randomQuestionsContainer.innerHTML = '';
            randomQuestions.forEach(question => {
                const questionNode = document.createElement('li');
                questionNode.textContent = question.text;
                randomQuestionsContainer.appendChild(questionNode);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page'), 10);
        if (page) {
            currentPage = page;
        }
        fillQuestions();

        const form = document.querySelector('.js-random-questions-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const input = document.querySelector('.js-random-questions-input');
            const n = parseInt(input.value, 10);
            if (n && n > 0) {
                showRandomQuestions(n);
            }
        });
    });
}());