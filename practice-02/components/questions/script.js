function fillQuestions() {
    const parent = document.querySelector('.js-questions');

    if (parent === undefined) {
        console.error('Ошибка! Не смогли найти элемент .js-questions на странице.');
        return;
    }

    fetch('/practice-02/api/getQuestions.php')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((questions) => {
            questions.map((question) => {
                const node = document.createElement("li");
                node.textContent = question.text;
                parent.appendChild(node);
            });
            console.log(questions);
            return data;
        })
}

fillQuestions();