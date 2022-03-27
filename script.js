


const password = document.getElementById('password');
const confirm_password = document.getElementById('confirmPassword');
    function validatePassword() {
        if ((confirm_password.value!='')&&(password.value != confirm_password.value)) {
            document.getElementById('errorMsg').innerHTML='Passwords Don\'t Match';
        } else {
            document.getElementById('errorMsg').innerHTML='';
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;