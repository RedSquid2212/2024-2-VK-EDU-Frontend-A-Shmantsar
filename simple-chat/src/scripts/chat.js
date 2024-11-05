import '../styles/index.css';

const form = document.querySelector('form');
const input = document.querySelector('.message-input');
const messageList = document.querySelector('.message-list');
const backButton = document.querySelector('.back-button');

const oldMessages = JSON.parse(localStorage.getItem('messages')) ?? [];

window.addEventListener('load', () => {
    oldMessages.forEach((message) => displayMessage(message, false));
});
window.addEventListener('unload', () => saveInLocalStorage());
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

backButton.addEventListener('click', () => {
    const rootPathName = window.location.pathname.replace('chat.html', '');
    window.location.href = rootPathName;
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
        displayMessage(message, true);
        input.value = '';
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        form.dispatchEvent(new Event('submit'));
    }
}

function displayMessage(message, isNew) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isNew) {
        messageElement.classList.add('new-message');
    } else {
        messageElement.classList.remove('new-message');
    }
    messageElement.innerText = `${message.text}`;
    messageElement.insertAdjacentHTML('beforeend', `<span class="message-time">${message.from} at ${message.time}</span>`);
    messageList.appendChild(messageElement);
}

function saveInLocalStorage(message) {
    localStorage.setItem('messages', JSON.stringify(oldMessages));
}