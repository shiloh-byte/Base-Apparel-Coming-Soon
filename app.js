// grab btns and inputs //
const btn = document.querySelector('.btn');
const email = document.querySelector("[type='email']");
const border = document.querySelector('.email');
const errorMessage = document.querySelector('.input');
const message = document.createElement('p');

// function for email validation //
function isValidEmail (string) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(string);
}

btn.addEventListener('click', function(e) {
    if (isValidEmail(email.value)) {
        // remove error styling, add success style //
        message.classList.remove('error');
        message.classList.add('success');
        border.style.border = '1px solid green';
        message.textContent = 'Email added successfully!';
        errorMessage.appendChild(message);
        console.log('success!')
    } else {
        // add a class for error styles //
        message.classList.remove('success');
        message.classList.add('error');
        border.style.border = '1px solid hsl(0,74%,74%)';
        message.textContent = 'Please provide a valid email address';
        errorMessage.appendChild(message);
        console.log('ERROR')
    }
})
