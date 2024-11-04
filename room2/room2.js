const form = document.getElementById('myForm');
const button = form.querySelector('button');
const cofreImage = document.getElementById('cofreImage');

form.addEventListener('input', () => {
    if (form.checkValidity()) {
        button.style.opacity = '1';
        button.style.backgroundColor = '#ff0000';
        cofreImage.style.display = 'block';
    } else {
        button.style.opacity = '0.5';
        button.style.backgroundColor = '';
        cofreImage.style.display = 'none';
    }
});