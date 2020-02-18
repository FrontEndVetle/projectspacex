const contactForm = document.getElementById('contactForm');

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailSent = document.getElementById("emailSent");

function validateEmail(emailValue) {
    var emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailTest.test(emailValue) == false) {

        return false;
    }

    return true;

}

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const emailValue = email.value;
    const emailValid = validateEmail(emailValue);
    email.style.border = "none";


    if (emailValid === true) {
        emailError.style.display = "none";
        emailSent.style.display = "block";

    } else {
        emailError.style.display = "block";
        emailSent.style.display = "none";
        email.style.border = "solid 2px rgba(243, 15, 15)";
    }
})