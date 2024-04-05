const getQuestionsByIds = async (query) => {
    try {
        const response = await fetch(`${API_BASE_URL}getQuestionsByIds.php?ids=${query}`);
        if (!response.ok) {
            console.error("Ошибка запроса");
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getQuestionsByIdsFill = (questionsArray) => {
    const container = document.querySelector('.js-questions-by-ids');

    if (!container) {
        console.error('Ошибка! Не смогли найти элемент .js-questions-by-ids на странице.');
        return;
    }

    container.textContent = '';

    for(const question of questionsArray) {
        const node = document.createElement("li");
        node.textContent = question?.text || "Текст не найден";
        container.appendChild(node);
    }
}

const getQuestionsByIdsFillMissing = (missingIdsArray) => {
    const container = document.querySelector('.js-questions-missing-ids');

    if (!container) {
        console.error('Ошибка! Не смогли найти элемент .js-questions-missing-ids на странице.');
        return;
    }
    container.textContent = '';
    for(const questionId of missingIdsArray) {
        const node = document.createElement("li");
        node.textContent = `Вопрос с идентификатором ${questionId} не найден`;
        container.appendChild(node);
    }
}

const getQuestionsByIdsClickHandler = async () => {
    const form = document.querySelector('.js-questions-by-ids-form')

    if (!form) {
        console.error('Ошибка! Не смогли найти элемент .js-questions-by-ids-form на странице.');
        return;
    }

    const question_ids = form.querySelector('[name="question_ids"]')

    if (!question_ids) {
        console.error('Ошибка! Не смогли найти инпут question_ids на странице.');
        return;
    }

    const questions = await getQuestionsByIds(question_ids.value).catch((error) => {
        console.error(error)
    })
    
    if(!questions) {
        showNotice('Ошибка при получении данных.');
        return
    }

    if(questions.error) {
        showNotice('Ошибка', questions.error)
        return
    }

    if(!questions.questions || !questions.missing_ids) {
        showNotice('Ошибка', 'Получены некорректные данные.')
        return
    }

    getQuestionsByIdsFill(questions.questions)
    getQuestionsByIdsFillMissing(questions.missing_ids)
};

(() => {
    const getQuestionsButton= document.querySelector('.js-questions-by-ids-button')

    if (!getQuestionsButton) {
        console.error('Ошибка! Не смогли найти элементы .js-questions-by-ids-button на странице.');
        return
    }
    
    getQuestionsButton.addEventListener('click', (event) => {
        event.preventDefault();
        getQuestionsByIdsClickHandler();
    })
})();

