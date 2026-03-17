// script.js

// Function to handle button clicks
function handleButtonClick() {
    console.log('Button clicked!');
    // Implement additional functionality here
}

// Function for typing animation
function typingAnimation(element, text, delay = 100) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index += 1;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

// Function to create floating hearts effect
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);
    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animation = 'float 5s ease-in infinite';
    heart.style.opacity = Math.random();
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Function to trigger confetti effects
function triggerConfetti() {
    // Implementation for confetti effect
    console.log('Confetti Triggered!');
}

// Function to toggle music
function toggleMusic(audio) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Function for screen transitions
function screenTransition(newPage) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = newPage;
    }, 500);
}

// Event listeners
document.querySelector('#myButton').addEventListener('click', handleButtonClick);

// Example of using typing animation
const animatedText = document.querySelector('#animatedText');
typingAnimation(animatedText, 'Welcome to my page!', 150);

// Create floating hearts at intervals
setInterval(createFloatingHearts, 1000);
