<?php

include 'services/SessionManager.php';
include 'services/CheckEmailService.php';

SessionManager::safeStart();

$service = new CheckEmailService();
$latest = $service->getLatest();
?>

<div class="check_email">
    <h2>Чекни свой email</h2>
    <div>
        <form class="formEmail_js" method="POST">
            Email: <input type="text" name="email" value="<?= $latest ?>"> <!-- Тут в value нужно передать сохранение -->
            <input type="submit" value="Submit">
        </form>
    </div>

    <script src="/practice-02/components/checkEmail/script.js"></script>
</div>