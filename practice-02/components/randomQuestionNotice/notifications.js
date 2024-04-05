document.addEventListener('DOMContentLoaded', (event) => {
  function fetchRandomQuestion() {
    fetch('/practice-02/api/getRandomQuestion.php')
      .then(response => response.json())
      .then(encodedQuestion => {
        showNotice(encodedQuestion);
      })
      .catch(error => console.error('Ошибка:', error));
  }

  setTimeout(() => {
    fetchRandomQuestion();
  }, 1000);
});