(function () {
    const API_BASE_URL = 'http://127.0.0.1:3000/api/';
    let currentPage = 1;
    const pageSize = 10;

    function getQuestions(page = currentPage) {
        const url = `${API_BASE_URL}getQuestions.php?page=${page}&pageSize=${pageSize}`;
        return fetch(url)
            .then(response => response.json());
    }

    function updateURL(page) {
        const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}`;
        window.history.pushState({ path: newURL }, '', newURL);
    }

    function fillQuestions() {
        const container = document.querySelector('.js-questions');
        container.innerHTML = ''; 

        getQuestions().then(data => {
            const questions = data.questions;
            questions.forEach((question, index) => {
                const questionNode = document.createElement('li');
                questionNode.textContent = question.text;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Удалить';
                deleteButton.addEventListener('click', function() {
                    deleteQuestion(question.id, questionNode); 
                });

                questionNode.appendChild(deleteButton);
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
    
    function deleteQuestion(questionId, node) {
        fetch(API_BASE_URL + 'deleteQuestion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `action=delete&questionIndex=${questionId}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                node.remove();
            } else {
                console.error('Ошибка при удалении вопроса: ', data.message);
            }
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса на удаление: ', error);
        });
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

        if (totalQuestions > currentPage * pageSize) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Вперед';
            nextButton.addEventListener('click', () => navigate(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }

        const pageInfo = document.createElement('span');
        pageInfo.textContent = `Страница ${currentPage}`;
        paginationContainer.appendChild(pageInfo);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page'), 10);
        if (page) {
            currentPage = page;
        }
        fillQuestions();
    });
}());
