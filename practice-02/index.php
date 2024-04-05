<?php session_start(); ?>

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
</head>
<body class="responsive-padding">
    <?php include './components/questions/index.php'; ?>
    <?php include './components/simpleRandom/index.php'; ?>
    <?php include './components/questionsByIds/index.php'; ?>

    <script>
        function showNotice(title, text = '') {
            new Notify({
                title: title,
                text: text,
                showIcon: false,
                autotimeout: 1000,
                showCloseButton: false,
                status: 'info',
            })
        }
    </script>
</body>
</html>