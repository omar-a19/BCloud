const box = document.querySelector(".box");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

registerlink.addEventListener("click",() => {
    box.classList.add('active');
});

loginlink.addEventListener("click",() => {
    box.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('signup.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert(data.message);
                } else {
                    alert(data.message); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
});
