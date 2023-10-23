var email = document.getElementById('email');
var emailError = document.getElementById('email-error');
var emailValid = document.getElementById('email-valid');
var pass = document.getElementById('password');
var passError = document.getElementById('password-error');
var passValid = document.getElementById('password-valid');
var show = document.getElementById('Show');
var btn = document.getElementById('btn-signup');
var btnClear = document.getElementById('btn-clear');

// Password hide/show functionality
show.addEventListener('click', function () {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});

email.addEventListener('input', validateEmail);
pass.addEventListener('input', validatePassword);

function showIcon(element) {
    element.style.display = 'inline';
}

function hideIcon(element) {
    element.style.display = 'none';
}

function validateEmail() {
    var emailInput = email.value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailInput.match(pattern)) {
        hideIcon(emailValid);
        showIcon(emailError);
        btn.disabled = true;
    } else {
        hideIcon(emailError);
        showIcon(emailValid);
        btn.disabled = !(emailError.style.display === 'none' && passError.style.display === 'none');
    }
}

function validatePassword() {
    var passwordInput = pass.value;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!passwordInput.match(passwordRegex)) {
        hideIcon(passValid);
        showIcon(passError);
        btn.disabled = true;
    } else {
        hideIcon(passError);
        showIcon(passValid);
        btn.disabled = !(emailError.style.display === 'none' && passError.style.display === 'none');
    }
}

// Event that allows the user to to go to the next page
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!btn.disabled) {
        // Redirect to the "receipt.html" page
        window.location.href = 'proceed.html';
        //This code will get the users details from sign up page and it will display it on the next page that welcomes the uer
        // var emailValue = email.value;
        // var passwordValue = pass.value;
        // window.location.href = 'details.html?email=' + emailValue + '&password=' + passwordValue;
    }
});

btnClear.addEventListener('click', function () {
    email.value = '';
    pass.value = '';
    hideIcon(emailError);
    hideIcon(emailValid);
    hideIcon(passError);
    hideIcon(passValid);
    btn.disabled = true;
});

// PreLoader
setTimeout(function(){
    $('.wrapper').fadeToggle();
}, 2600);
