(function () {
    const form = document.getElementById('textValidatorForm');
    const textInput = document.getElementById('textInput');
    const validationResult = document.getElementById('validationResult');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const text = textInput.value.trim();

        fetch(API_BASE_URL + 'validateText.php', {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                showNotice('Успешно', 'Текст корректен');
            } else {
                showNotice('Ошибка', 'Текст содержит недопустимые символы');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    });
}());
