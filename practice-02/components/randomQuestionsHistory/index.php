<?php
session_start();
include_once '../../Services/RandomQuestionsHistory.php';

$history = RandomQuestionsHistory::getHistory();
?>

<div class="card fluid">
    <h2>История случайных вопросов</h2>
    <ul>
        <?php foreach ($history as $index => $question) : ?>
            <li><?php echo $question; ?></li>
        <?php endforeach; ?>
    </ul>
    <button onclick="showHistory()">Показать историю</button>
</div>

<script>
    function showHistory() {
        const history = <?php echo json_encode($history); ?>;
        const formattedHistory = history.map((item, index) => `${index + 1}. ${item}`).join("\n");
        alert(formattedHistory);
    }
</script>
