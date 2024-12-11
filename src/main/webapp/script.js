       document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("inputbox");
            const responseMessage = document.getElementById("responseMessage");

            form.addEventListener("submit", function (event) {
                event.preventDefault(); 

                
                responseMessage.textContent = "Message Sent!";
                responseMessage.style.display = "block";

               
                form.reset();

                
                setTimeout(function () {
                    responseMessage.style.display = "none";
                }, 4000);
            });
        });
        
       
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
    link.addEventListener('click', function() {
       
        navLinks.forEach(link => link.classList.remove('active'));
        
        
        this.classList.add('active');
    });
});
















