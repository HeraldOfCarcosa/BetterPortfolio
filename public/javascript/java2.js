document.addEventListener('DOMContentLoaded', function() {
    // Get the target element
    const wordElement = document.getElementById('wordAnimation');
    const wordElement2 = document.getElementById('cloudAnimation');
    const word = 'JJabłoński.';
    const word2 = 'Hello :D';


    const letters = word.split('');

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        wordElement.appendChild(span);
    });
});
const greeting = document.getElementById('greeting');
const currentTime = new Date().getHours();

if (currentTime >= 5 && currentTime < 12) {
    greeting.textContent = 'Good morning! :D';
} else if (currentTime >= 12 && currentTime < 18) {
    greeting.textContent = 'Good afternoon! :D';
} else if (currentTime >= 18 && currentTime < 24) {
    greeting.textContent = 'Good evening! :D';
} else {
    greeting.textContent = 'Hello! :D';
}