<?php
require_once './services/LanguageManager.php';
$languageSwitcher = new LanguageManager();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.css">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>WEB Development</title>
</head>
<body class="responsive-padding">
    <h1><?= $languageSwitcher->getTranslation('title'); ?></h1>

    <ol class="js-questions"></ol>
    
    <div>
        <h2><?= $languageSwitcher->getTranslation('random_questions'); ?></h2>
        <ol class="js-random-questions"></ol>

        <div>
            <button class="js-generate-random"><?= $languageSwitcher->getTranslation('generate_random'); ?></button>
            <button class="js-generate-random-one"><?= $languageSwitcher->getTranslation('generate_random_one'); ?></button>
            <button disabled title="<?= $languageSwitcher->getTranslation('attempts'); ?>"><?= $languageSwitcher->getTranslation('attempts'); ?></button>
            <button disabled title="<?= $languageSwitcher->getTranslation('bonuses'); ?>"><?= $languageSwitcher->getTranslation('bonuses'); ?></button>
        </div>
    </div>

</body>
</html>
