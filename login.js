 let signupbtn = document.getElementById("signupbtn");
 let signinbtn = document.getElementById("signinbtn");
 let namefield = document.getElementById("namefield");
 let title  = document.getElementById("title");


 signinbtn.onclick = function(){
    namefield.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    
 }
 
 signupbtn.onclick = function(){
    namefield.style.maxHeight = '60px';
    title.innerHTML = "Sign up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
    
 }

//  -----------------password validation-----------------

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("emailid");
const password = document.getElementById("password");


form.addEventListener('submit' , e=>{
    e.preventDefault();

    validateInputs();

});

const setError = (element , message) => {
    const inputcontrols = element.parentElement;
    const errorDisplay = inputcontrols.querySelector('.error');
    errorDisplay.innerHTML = message;

    inputcontrols.classList.add('error');
    inputcontrols.classList.remove('success');
}


const setSuccess = element =>{
    const inputcontrols = element.parentElement;
    const errorDisplay = inputcontrols.querySelector('.error');

    errorDisplay.innerHTML = '';
    inputcontrols.classList.add('success');
    inputcontrols.classList.remove('error');
}


const isvalidEmail = email =>{
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}



const validateInputs =()=>{
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();

    if(usernamevalue === ''){
        setError(username , 'username is required');
    }
    else{
        setSuccess(username);
    }

    if(emailvalue ===''){
        setError(email , 'email is required')
    }else if(!isvalidEmail(emailvalue)){
        setError(email , 'provide avalid email please')
    }else{
        setSuccess(email);
    }

    if(passwordvalue ===''){
        setError(password , 'password is required')
    }
    else if(passwordvalue.length < 8){
        setError(password , 'password must be atleast 8 character.')
    }else{
        setSuccess(email);
    }
    




}





















