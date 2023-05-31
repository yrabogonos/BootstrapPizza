const form = document.forms[0];

form.addEventListener("submit", function (e) {
    alert("Your message has been sent");
    e.preventDefault();
    refreshInputs();
});

form.addEventListener("change", eventHandler);
form.addEventListener("invalid", eventHandler, true);


const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');



function eventHandler(e) {
    if (e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA") {
        return;
    }

    checkErrorAndSetMessage(e.target);
}

const forbidden = ['#', '_', '@', '$', '%', '^', '&', '*', '.', '/', "'", '"', '`'];

function checkNumbers(inputText) {
    for (var i = 0; i < inputText.length; i++) {
      if (!isNaN(parseInt(inputText[i]))) {
        return true;
      }
    }
    return false;
}

function checkLenght(inputText, min){
    if(inputText.length > min){
        return false;
    }
    else{
        return true;
    }
}
function checkForbidden(inputText){
    for (let i = 0; i < inputText.length; i++){
        for(let j =0; j < forbidden.length; j++){
            if(inputText[i] === forbidden[j]){
                return true;
            }
        }
    }
    return false;
}
function checkMail(inputText){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(inputText)) {
      return false;
    } else {
        return true;
    }
}


function checkErrorAndSetMessage(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("This field is required!");
        input.classList.add("invalid");
    } 
    else if(input.id === 'lname'){
        if(checkNumbers(input.value)){
            input.setCustomValidity("This input can`t contain digits!");
            input.classList.add("invalid");
        }
        else if(checkLenght(input.value, 5)){
            input.setCustomValidity("Input lenght must be > 5 symbols");
            input.classList.add("invalid");
        }
        else if(checkForbidden(input.value)){
            input.setCustomValidity("Input contains forbidden value!");
            input.classList.add("invalid");
        }
        else {
            input.setCustomValidity("");
            input.classList.remove("invalid");
        }
       
        
    }
    else if(input.id === 'fname'){
        if(checkNumbers(input.value)){
            input.setCustomValidity("This input can`t contain digits!");
            input.classList.add("invalid");
        }
        else if(checkLenght(input.value, 5)){
            input.setCustomValidity("Input lenght must be > 5 symbols");
            input.classList.add("invalid");
        }
        else if(checkForbidden(input.value)){
            input.setCustomValidity("Input contains forbidden value!");
            input.classList.add("invalid");
        }
        else {
            input.setCustomValidity("");
            input.classList.remove("invalid");
        }
       
       
        
    }
    else if(input.id === 'textarea'){
        if(checkLenght(input.value, 50)){
            input.setCustomValidity("Input lenght must be > 5 symbols");
            input.classList.add("invalid");
        }
        else {
            input.setCustomValidity("");
            input.classList.remove("invalid");
        }
    }
    else if(input.id === 'email'){
        if(checkLenght(input.value, 8)){
            input.setCustomValidity("Input lenght must be > 5 symbols");
            input.classList.add("invalid");
        }
        else if(checkMail(input.value)){
            input.setCustomValidity("Incorrect email");
            input.classList.add("invalid");
        }
        else {
            input.setCustomValidity("");
            input.classList.remove("invalid");
        }
    }  
    else {
        input.setCustomValidity("");
        input.classList.remove("invalid");
    }
    
}


function refreshInputs() {
    for (const iterator of form) {
        if (iterator.type != "submit") {
            iterator.value = "";
            iterator.classList.remove("invalid");
        }
    }
}