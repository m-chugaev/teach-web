
function getQuestionOfDay() {
    return fetch('/practice-02/services/getQuestionOfDay.php')
        .then((response) => {
            return response.json();
        });
}

function fillQuestionOfDay() {
    const container = document.getElementById("questionOfDay");

    if (!container) {
        console.error('Ошибка! Не удалось найти контейнер для вопроса дня.');
        return;
    }

    getQuestionOfDay()
        .then((question) => {
            container.innerText = question;
        })
        .catch((error) => {
            console.error('Произошла ошибка при получении вопроса дня:', error);
        });
}

window.onload = fillQuestionOfDay;
