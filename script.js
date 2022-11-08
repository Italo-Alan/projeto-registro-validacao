const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const password_check = document.querySelector('#password-check');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Teste")
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim(); 
    const passwordValue = password.value.trim(); 
    const passwordCheckValue = password_check.value.trim(); 
    const emailValue = email.value.trim(); 

    if(usernameValue == ""){
        setErrorFor(username, 'O usuário não pode estar vazio !')
    }else{
        setSucessFor(username)
    }

    if(emailValue == ""){
        setErrorFor(email, "O email não pode estar vazio !");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Este não é um email válido !")
    }else{
        setSucessFor(email);
    }

    if(passwordValue == ""){
        setErrorFor(password, "A senha não pode estar vazia !")
    }else{
        setSucessFor(password);
    }

    if(passwordCheckValue == ""){
        setErrorFor(password_check, "A senha de verificação não pode estar vazia !")
    }else if(passwordCheckValue !== passwordValue){
        setErrorFor(password_check, "As senhas não podem ser diferentes !")
    }else{
        setSucessFor(password_check);
    }

    if(usernameValue != "" && emailValue != "" &&
    passwordValue != "" && passwordCheckValue != "" &&
    passwordCheckValue == passwordValue){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
            
            Toast.fire({
            icon: 'success',
            title: 'Usuário cadastrado com sucesso !'
            })
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
            
            Toast.fire({
            icon: 'error',
            title: 'Cadastro não realizado, verifique o preenchimento dos campos !'
            })
    }

    if(usernameValue != "" && emailValue != "" &&
    passwordValue != "" && passwordCheckValue != "" &&
    passwordCheckValue == passwordValue){
        usernameValue = ""
        emailValue = ""
        passwordValue = ""
        passwordCheckValue = ""
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('.small');

    small.style.visibility= "visible"
    small.innerText = message;

    formControl.className = "form-control error";
}

function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control sucess";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}