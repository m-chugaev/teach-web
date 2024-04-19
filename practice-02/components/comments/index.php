<div class="comments_section">
    <h2>Комментарии</h2>
    <div id="comments_list">
        <!-- Комментарии будут загружены здесь -->
    </div>
    <textarea id="comment_input" placeholder="Напишите комментарий..."></textarea>
    <button onclick="submitComment()">Отправить</button>
</div>

<script>
function loadComments() {
    fetch(API_BASE_URL + 'getComments.php')
        .then(response => response.json())
        .then(comments => {
            const commentsList = document.getElementById('comments_list');
            commentsList.innerHTML = '';
            comments.forEach(comment => {
                const commentCard = document.createElement('div');
                commentCard.className = 'comment_card';
                commentCard.innerHTML = `<p>${comment.comment}</p><span>${comment.date}</span>`;
                commentsList.appendChild(commentCard);
            });
        });
}

function submitComment() {
    const commentInput = document.getElementById('comment_input');
    const comment = commentInput.value;
    fetch(API_BASE_URL + 'saveComment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment: comment })
    }).then(() => {
        commentInput.value = '';
        loadComments();
    });
}

loadComments(); // Загрузите комментарии при загрузке страницы
</script>
