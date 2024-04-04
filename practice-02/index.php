<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.css" />
    <script src="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.min.js"></script>
    <title>WEB Development</title>
    <script>
        const API_BASE_URL = '/api/';
    </script>
    <style>
        #questionOfDay {
            margin-left: 10px; 
        }
        .question-heading {
            margin-right: 5px;
        }
    </style>
</head>
<body class="responsive-padding">
    <?php include './components/questions/index.php'; ?>
    <?php include './components/simpleRandom/index.php'; ?>

    <h2>Вопрос дня:</h2>
    <div id="questionOfDay"></div>

    <script>

        function getQuestionOfDay() {
            return fetch('/getQuestionOfDay.php')
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
</body>
</html>
