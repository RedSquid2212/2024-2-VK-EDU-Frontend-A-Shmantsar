import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.message-input');
const messageList = document.querySelector('.message-list');

const oldMessages = JSON.parse(localStorage.getItem('messages')) ?? [];

window.addEventListener('load', () => {
    oldMessages.forEach(displayMessage);
});
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.value.trim();
    if (messageText && messageText.length > 0) {
        const message = {
            text: messageText,
            from: 'Jennifer',
            time: new Date().toLocaleTimeString('RU', { hour: '2-digit', minute: '2-digit' }),
        };

        saveInLocalStorage(message);
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
    messageElement.insertAdjacentHTML('beforeend', `${message.text} <span class="message-time">${message.from} at ${message.time}</span>`);
    messageList.appendChild(messageElement);
}

function saveInLocalStorage(message) {
    oldMessages.push(message);
    localStorage.setItem('messages', JSON.stringify(oldMessages));
}