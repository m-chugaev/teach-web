// fetch to /api/checkEmail
// handle result

(function (){
    const form = document.querySelector('.formEmail_js');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const response = await fetch(API_BASE_URL + 'checkEmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: new FormData(form)
        });
    
        const result = await response.json();
        return result;
    });
})()