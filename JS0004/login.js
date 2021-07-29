
//form elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.getElementById('gridCheck');
const button = document.getElementById('button');
//error elements
let nameError = document.getElementById('name-error');
let surnameError = document.getElementById('surname-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let checkError = document.getElementById('check-error');


form.addEventListener('submit', (e)=> {
    
    console.log('submit works')
    nameCheck();
    surnameCheck();
    emailCheck();
    passwordCheck(password);
    agree();  
    e.preventDefault();
});  

//validation functions
    nameCheck = () => {
        if (username.value === '' || username.value == null){
            nameError.style.visibility = 'visible';
            return false;
        }else{
            nameError.style.visibility = 'hidden';
            return true;
        }
    }

    surnameCheck = () => {
        if (surname.value === '' || surname.value == null){
            surnameError.style.visibility = 'visible';
            return false;
        }else{
            surnameError.style.visibility = 'hidden';
            return true;
        }
    }

    emailCheck =() => {    
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
            emailError.style.visibility = 'hidden';
            return true;
        }else{
            emailError.style.visibility = 'visible';
            return false;
        }
    }

    passwordCheck =(password)=>{    
        if(password.value.length <= 6 || password.value.length > 20){        
            passwordError.style.visibility = 'visible';
            passwordError.innerText = 'Must contain 6-20 characters';
            return false;
        }else{
            passwordError.style.visibility = 'hidden';
            return true;
        }
    }

    agree =()=>{
        if(!check.checked){
            checkError.style.visibility = 'visible';
            checkError.innerText = 'Please agree to terms and conditions'
            return false;
        }else{
            checkError.style.visibility = 'hidden';
            return true;
        }
    }