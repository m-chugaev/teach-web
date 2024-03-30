(function () {
    function getRandomQuestions() {
        return fetch(API_BASE_URL + 'getSimpleRandomQuestions.php')
            .then((response) => {
                return response.json();
            })
    }

    function fillRandomQuestions() {
        const container = document.querySelector('.js-simple-random-questions');

        if (container === undefined) {
            console.error('Ошибка! Не смогли найти элемент .js-simple-random-questions на странице.');
            return;
        }

        getRandomQuestions()
            .then((questions) => {
                container.innerHTML = '';
                questions.map((question) => {
                    const node = document.createElement("li");
                    node.textContent = question;
                    container.appendChild(node);
                });
            })
    }

    function showHistory() {
        fetch(API_BASE_URL + 'getSimpleRandomQuestionsHistory.php')
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                showNotice('История', text);
            })
    }

    function listenButtons() {
        const buttonAll = document.querySelector('.js-simple-random');
        const buttonOne = document.querySelector('.js-simple-random-history');

        if (buttonAll === undefined || buttonOne === undefined) {
            console.error('Ошибка! Не смогли найти элементы .js-simple-random на странице.');
            return;
        }

        buttonAll.addEventListener('click', () => fillRandomQuestions());
        buttonOne.addEventListener('click', () => showHistory());
    }

    listenButtons();
}())