const button = document.getElementById('send-button');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
var formMessage = document.getElementById('form-message');

button.addEventListener('click', function(event) {
    if (username.value.trim() === '' || email.value.trim() === '' || phone.value.trim() === '' || message.value.trim() === '') {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
    } else {
        formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
        username.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
    }
});