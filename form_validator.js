const form = document.forms[0];

form.addEventListener("submit", function (e) {
    alert("Your message has been sent");
    e.preventDefault();
    refreshInputs();
});

form.addEventListener("change", eventHandler);
form.addEventListener("invalid", eventHandler, true);


function eventHandler(e) {
    if (e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA") {
        return;
    }

    checkErrorAndSetMessage(e.target);
}

function checkErrorAndSetMessage(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("This field is required!");
        input.classList.add("invalid");
    } else {
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