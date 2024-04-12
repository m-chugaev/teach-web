// fetch to /api/checkEmail
// handle result

(function (){
    const form = document.querySelector('.formEmail_js');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        fetch(API_BASE_URL + 'checkEmail.php', {
            method: 'POST',
            body: (new FormData(form))
        })
            .then((response) => response.json())
            .then((text) => showNotice(text))
    });
})()