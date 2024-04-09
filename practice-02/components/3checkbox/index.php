<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма</title>
</head>
<body>
    <form method="post">
        <label><input type="checkbox" name="options[]" value="Быстро" <?php if(isset($_POST['options']) && in_array('Быстро', $_POST['options'])) echo 'checked'; ?>> Быстро</label><br>
        <label><input type="checkbox" name="options[]" value="Качественно" <?php if(isset($_POST['options']) && in_array('Качественно', $_POST['options'])) echo 'checked'; ?>> Качественно</label><br>
        <label><input type="checkbox" name="options[]" value="Дешево" <?php if(isset($_POST['options']) && in_array('Дешево', $_POST['options'])) echo 'checked'; ?>> Дешево</label><br>
        <button type="submit">Отправить</button>
    </form>

    <?php
    $notice = '';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['options']) && count($_POST['options']) == 2) {
            $allowed_options = array("Быстро", "Качественно", "Дешево");
            $selected_options = $_POST['options'];
            $diff = array_diff($selected_options, $allowed_options);
            if (empty($diff)) {
                $notice = "Сделаем";
            } else {
                $notice = "Это нереально";
            }
        } else {
            $notice = "Это нереально";
        }
    }

    if (!empty($notice)) {
        echo "<p>$notice</p>";
    }
    ?>
</body>
</html>