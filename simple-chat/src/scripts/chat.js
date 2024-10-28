import '../styles/index.css';

const form = document.querySelector('form');
const input = document.querySelector('.message-input');
const messageList = document.querySelector('.message-list');
const backButton = document.querySelector('.back-button');

const oldMessages = JSON.parse(localStorage.getItem('messages')) ?? [];

window.addEventListener('load', () => {
    oldMessages.forEach(displayMessage);
});
window.addEventListener('unload', () => saveInLocalStorage());
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

backButton.addEventListener('click', () => {
    window.location.href = 'http://localhost:8080/';
});

function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.value.trim();
    if (messageText && messageText.length > 0) {
        const message = {
            text: messageText,
            from: 'Jennifer',
            time: new Date().toLocaleTimeString('RU', { hour: '2-digit', minute: '2-digit' }),
        };

        oldMessages.push(message);
        displayMessage(message);
        input.value = '';
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        form.dispatchEvent(new Event('submit'));
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = `${message.text}`;
    messageElement.insertAdjacentHTML('beforeend', `<span class="message-time">${message.from} at ${message.time}</span>`);
    messageList.appendChild(messageElement);
}

function saveInLocalStorage(message) {
    localStorage.setItem('messages', JSON.stringify(oldMessages));
}