<script src="practice-02/components/checkEmail/script.js"></script>
<?php
    $email = '';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo '<script>showNotice("Контакт сохранен")</script>';
        } else {
            echo '<script>showNotice("Ошибка валидации email")</script>';
        }
    }
    ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Email: <input type="text" name="email" value="<?php echo $email; ?>">
        <input type="submit" value="Submit">
    </form>