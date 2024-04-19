<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма</title>
</head>
<body>
    <form method="post">
        <label for="text_input">Текстовое поле:</label><br>
        <input type="text" id="text_input" name="text_input" value="<?php echo isset($_POST['text_input']) ? htmlspecialchars($_POST['text_input']) : ''; ?>"><br>

        <p>Выберите один из вариантов:</p>
        <label><input type="radio" name="radio_input" value="Вариант 1" <?php if(isset($_POST['radio_input']) && $_POST['radio_input'] == 'Вариант 1') echo 'checked'; ?>> Вариант 1</label><br>
        <label><input type="radio" name="radio_input" value="Вариант 2" <?php if(isset($_POST['radio_input']) && $_POST['radio_input'] == 'Вариант 2') echo 'checked'; ?>> Вариант 2</label><br>

        <p>Выберите один из вариантов из списка:</p>
        <select name="select_input">
            <option value="Выбор 1" <?php if(isset($_POST['select_input']) && $_POST['select_input'] == 'Выбор 1') echo 'selected'; ?>>Выбор 1</option>
            <option value="Выбор 2" <?php if(isset($_POST['select_input']) && $_POST['select_input'] == 'Выбор 2') echo 'selected'; ?>>Выбор 2</option>
        </select><br>

        <button type="submit">Отправить</button>
    </form>

    <?php
    $notice = '';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!empty($_POST['text_input']) && !empty($_POST['radio_input']) && !empty($_POST['select_input'])) {
            $text_input = $_POST['text_input'];
            $radio_input = $_POST['radio_input'];
            $select_input = $_POST['select_input'];

            // Допустимые значения для радио-кнопок и списка выбора
            $allowed_radio_options = array("Вариант 1", "Вариант 2");
            $allowed_select_options = array("Выбор 1", "Выбор 2");

            if (in_array($radio_input, $allowed_radio_options) && in_array($select_input, $allowed_select_options)) {
                $notice = "Данные приняты: Текстовое поле: $text_input, Радио: $radio_input, Выбор: $select_input";
            } else {
                $notice = "Ошибка: Недопустимые значения";
            }
        } else {
            $notice = "Ошибка: Заполните все поля";
        }
    }

    if (!empty($notice)) {
        echo "<p>$notice</p>";
    }
    ?>
</body>
</html>