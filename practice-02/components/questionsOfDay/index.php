<div class="card fluid">
    <h2>Вопрос дня (Задание 13)</h2>

    <ol class="js-simple-random-questions"></ol>
    <div id="questionOfDay"></div>

    <script>
        function getQuestionOfDay() {
            return fetch('/practice-02/services/getQuestionOfDay.php')
                .then((response) => {
                    return response.json();
                });
        }

        function displayQuestionOfDay() {
            const questionOfDayContainer = document.getElementById("questionOfDay");

            getQuestionOfDay()
                .then((question) => {
                    questionOfDayContainer.innerText = question;
                });
        }

        window.onload = displayQuestionOfDay;
    </script>
</div>
