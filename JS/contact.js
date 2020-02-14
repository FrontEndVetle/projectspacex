const contactForm = document.getElementById('contactForm');

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

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


    if (emailValid === true) {
        emailError.style.display = "none";
        alert("Thank you. We answer messages within 2 days")
    } else {
        emailError.style.display = "block";
    }
})