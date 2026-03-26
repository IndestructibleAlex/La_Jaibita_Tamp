const button = document.querySelector('button');
const editor = document.getElementById('editor');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `¡Hola! Has hecho clic en el botón ${clickCount} veces.`;
    editor.appendChild(newParagraph);
});