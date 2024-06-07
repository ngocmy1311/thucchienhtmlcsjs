var username = document.querySelector('#username'); 
var email = document.querySelector('#email'); 
var password = document.querySelector('#password'); 
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');
function showError(input, message){
    let parent = input.parentElement; 
    let small = parent.querySelector('small');
    small.classList.add('error'); 
    small.innerText = message; 
} 
function showSuccess(input){
    let parent = input.parentElement; 
    let small = parent.querySelector('small');
    small.classList.remove('error'); 
    small.innerText = ''; 
}
function checkEmailError(input){
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, 'Email không hợp lệ');
    
    }
    return isEmailError;
}
function checkEmptyError(listInput){
    let isEmptyError = false; 
    listInput.forEach(input =>{
        input.value = input.value.trim();
        if(!input.value){
            isEmptyError = true;
            showError(input, 'không dc để trống'); 

        }else{
            showSuccess(input);
        }
    })
    return isEmptyError;

}
function checkLengthError(input, min, max){
    input.value = input.value.trim();
    console.log(input.value.length);
    if(input.value.length < min){
        showError(input, `Phải nhập ít nhất ${min} kí tự`);
        return true; 
    }
    if(input.value.length > max){
        showError(input, `Phải nhập ít nhất ${max} kí tự`);
        return true;
    }
    
    return false;
}
function checkMatchPassword(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, 'Mật khẩu không khớp');
        return true;
    }
    return false;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsetnameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 3, 10);
    let isMatchPasswordError = checkMatchPassword(password, confirmPassword);
});

