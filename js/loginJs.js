const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')
signUp.addEventListener('click', ()=>{
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})
signIn.addEventListener('click', ()=>{
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


var state = false;
function show(){
    if (state){
        document.getElementById("pswrd").setAttribute("type","password");
        document.getElementById("psswd").style.color = '#113448';
        state = false;
    }
    else{
        document.getElementById("pswrd").setAttribute("type","text");
        document.getElementById("psswd").style.color = '#21c6db';
        state = true;
    }
}