
    // only layout

<div class="card fluid">
    <h2>Чекни свой email</h2>

    <div>
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            Email: <input type="text" name="email" value="">
            <input type="submit" value="Submit">
        </form>
    </div>

    <script src="/practice-02/components/checkEmail/script.js"></script>
</div>