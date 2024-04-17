(function () {
    function getRandomQuestionFrequency() {
        return fetch(API_BASE_URL + 'getRandomQuestionFrequency.php')
            .then((response) => {
                return response.json();
            });
    }

    function fillRandomQuestionFrequency() {
        const container = document.querySelector('.js-random-question-frequency');

        if (!container) {
            console.error('Ошибка! Не удалось найти элемент .js-random-question-frequency на странице.');
            return;
        }

        getRandomQuestionFrequency()
            .then((questions) => {
                container.innerHTML = '';
                questions.forEach((question) => {
                    const node = document.createElement("li");
                    node.textContent = question;
                    container.appendChild(node);
                });
            })
            .catch((error) => {
                console.error('Произошла ошибка при получении вопросов:', error);
            });
    }

    function listenButtons() {
        const buttonAll = document.querySelector('.js-question-frequency');

        if (!buttonAll) {
            console.error('Ошибка! Не удалось найти элементы .js-question-frequency на странице.');
            return;
        }

        buttonAll.addEventListener('click', fillRandomQuestionFrequency);
    }

    listenButtons();
}());