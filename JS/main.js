// hamburger button

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
})


// Validaciones

const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const edad = document.getElementById('age');
const pais = document.getElementById('countries');
const gender = document.getElementById('gender');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();



    if(nameValue === '') {
        setError(name, 'name is required');
    }else if(nameValue.length < 3) {
        setError(name, 'name must be at least 3 characters');
    } else {
        setSuccess(name);
    }
    if(surnameValue === '') {
        setError(surname, 'name is required');
    }else if(surnameValue.length < 3) {
        setError(surname, 'surname must be at least 3 characters'); 
    }else {
        setSuccess(surname);
    }

    if(emailValue === '' || emailValue === null) {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(age.value === '') {
        setError(age, 'Age is required');
    } else if (age.value < 18 ) {
        setError(age, 'You must be at least 18 years old.')
    } else {
        setSuccess(age);
    }

    if(pais.value === 'default') {
        setError(pais, 'Please select a country');
    } else {
        setSuccess(pais);
    }

    if (gender.value === 'default') {
        setError(gender, 'Please select a gender')
    }else{
        setSuccess(gender);
    }

};
