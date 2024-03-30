(function () {
    function getQuestions() {
        return fetch(API_BASE_URL + 'getQuestions.php')
            .then((response) => {
                return response.json();
            })
    }

    function fillQuestions() {
        const container = document.querySelector('.js-questions');

        if (container === undefined) {
            console.error('Ошибка! Не смогли найти элемент .js-questions на странице.');
            return;
        }

        getQuestions()
            .then((questions) => {
                questions.map((question) => {
                    const node = document.createElement('li');
                    node.textContent = question.text;
                    container.appendChild(node);
                });
            })
    }

    fillQuestions();
}())