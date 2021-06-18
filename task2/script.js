const registerForm = document.querySelector('.registration__form');
const inputs = document.querySelectorAll('.registration__input');
const thanksMessage = document.querySelector('.thanks__message');

const regExpName = /^[a-zA-Z\s]{1,120}$/;
const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let formIsValid = true;
let submitMessage = "";

const resetInput = (input) => {
    input.classList.remove('registration__input--invalid');
    input.nextElementSibling.classList.add('hidden');
}

const invalidateInput = (input) => {
    formIsValid = false;
    input.classList.add('registration__input--invalid');
    input.nextElementSibling.classList.remove('hidden');
}
const validateInput = (input) => {
    if (input.name === 'name') {
        if (!regExpName.test(input.value)) {
            invalidateInput(input);
            submitMessage += "Name doesn't meet the requirements";
        }
    } else if (input.name === 'password') {
        if (input.value.length < 8) {
            invalidateInput(input);
            submitMessage += "\nPassword must contain at least 8 symbols";
        }
    } else if (input.name === 'email') {
        if (!regExpEmail.test(input.value)) {
            invalidateInput(input);
            submitMessage += "\nE-mail doesn't meet the requirements"
        }
    }
}

const printInputValues = () => {
    for (let input of inputs) {
        console.log(input.name + ": " + input.value);
    }
}
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let input of inputs) {
        validateInput(input);
    }
    if (formIsValid) {
        printInputValues();
        submitMessage = "Success";
        alert(submitMessage);
        registerForm.remove();
        thanksMessage.classList.remove('hidden');
    } else {
        alert(submitMessage);
        submitMessage = "";
        formIsValid = true;
    }
})

for (let input of inputs) {
    input.addEventListener('input', () => {
        resetInput(input);
    })
}