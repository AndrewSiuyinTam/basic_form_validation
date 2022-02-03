const email = document.getElementById('email');
email.addEventListener('input', function (event){
    if(email.validity.typeMismatch){
        email.setCustomValidity('Expecting an Email Address');
        email.reportValidity();
    }
    if(!email.validity.typeMismatch){
        if(!email.checkValidity()){
            email.setCustomValidity('Email too short');
            email.reportValidity();
        }
    }
    
    else{
        email.setCustomValidity('');
    }
});

const country = document.getElementById('country');
country.addEventListener('input',function (event){
    if(country.validity.tooLong){
        country.setCustomValidity('Country Name cannot be more than 26 characters');
        country.reportValidity();
    }
    if(country.validity.tooShort){
        country.setCustomValidity('Country name must be at least 5 Characters');
        country.reportValidity();
    }
    
    else{
        country.setCustomValidity('');
        country.reportValidity();
    }
});

const zip_code = document.getElementById('zip-code');
zip_code.addEventListener('input',function (event){
    if(zip_code.validity.tooLong){
        zip_code.setCustomValidity('Zip Code must be exactly 5 numbers');
        zip_code.reportValidity();
    }
    if(zip_code.validity.tooShort){
        zip_code.setCustomValidity('Zip Code must be exactly 5 numbers');
        zip_code.reportValidity();
    }
    
    else{
        zip_code.setCustomValidity('');
        zip_code.reportValidity();
    }
});

const password = document.getElementById('password');
const regexp = '[0-9]'
password.addEventListener('input',function (event){
    
    if(password.validity.tooShort){
        password.setCustomValidity('Password must be at least 5 characters');
        password.reportValidity();
    }
    // if(!regexp.test(password.validity)){
    //     password.setCustomValidity('Password must contain at least one number');
    //     password.reportValidity();
    // }

    
    else{
        password.setCustomValidity('');
        password.reportValidity();
    }
});
var passw = '[0-9]';
const password_confirm = document.getElementById('password-confirm');

password_confirm.addEventListener('input',function (event){
    
    if(password_confirm.value != password.value){
        password_confirm.setCustomValidity('passwords must match!');
        password_confirm.reportValidity();
    }
    else{
        password_confirm.setCustomValidity('');
        password_confirm.reportValidity();
    }
});