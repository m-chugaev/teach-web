// fetch to /api/checkEmail
// handle result

(function (){
    document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const email = document.querySelector('inputname="email"').value;
    
        const response = await fetch(API_BASE_URL + 'checkEmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });
    
        const result = await response.json();
        return result;
    });
})