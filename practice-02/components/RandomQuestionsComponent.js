(function () {
    function loadRandomQuestions(n) {
        return fetch(`${API_BASE_URL}getRandomQuestions.php?count=${n}`)
            .then((response) => {
                return response.json();
            });
    }

    function appendRandomQuestions(randomQuestions) {
        const container = document.querySelector('.js-questions');
        if (!container) {
            console.error('Ошибка! Не найден элемент .js-questions на странице.');
            return;
        }

        randomQuestions.forEach((question) => {
            const node = document.createElement('li');
            node.textContent = question.text;
            container.appendChild(node);
        });
    }

    const defaultQuestionCount = 5;
    loadRandomQuestions(defaultQuestionCount)
        .then((randomQuestions) => {
            appendRandomQuestions(randomQuestions);
        });
})();