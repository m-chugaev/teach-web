import questions from "../../questions.js";
(function () {
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
    
    function questionsPage() {
        const [filteredQuestions, setFilteredQuestions] = useState(questions);
    
        function filterByTag(tag) {
            if (tag === 'Basics') {
                setFilteredQuestions(questions);
            } else {
                const filteredQuestions = questions.filter(question => question.tags.includes(tag));
                setFilteredQuestions(filteredQuestions);
            }
        }
    
        return (
            <div>
                <div id="filter">
                    <button onClick={() => filterByTag('Basics')}>Basics</button>
                    <button onClick={() => filterByTag('JS')}>JS</button>
                    <button onClick={() => filterByTag('CSS')}>CSS</button>
                    <button onClick={() => filterByTag('OOP')}>OOP</button>
                    <button onClick={() => filterByTag('Git')}>Git</button>
                    <button onClick={() => filterByTag('Database')}>Database</button>
                    <button onClick={() => filterByTag('PHP')}>PHP</button>
                </div>
                <div id="questions">
                    {filteredQuestions.map((question, index) => (
                        <div key={index}>
                            <p>{question.text}</p>
                            <p>Tags: {question.tags.map((tag, index) => <mark key={index}>{tag}</mark>)}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
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

    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page'), 10);
        if (page) {
            currentPage = page;
        }
        fillQuestions();
    });
}());
