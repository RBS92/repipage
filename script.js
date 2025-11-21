// Array of reasons why you love her
const reasons = [
    { emoji: "😊", text: "Your smile lights up my entire day" },
    { emoji: "💖", text: "You make me laugh even when I don't feel like smiling" },
    { emoji: "🌟", text: "You're incredibly thoughtful and always think of others" },
    { emoji: "🤗", text: "Your hugs feel like home" },
    { emoji: "✨", text: "You inspire me to be a better person every day" },
    { emoji: "🎵", text: "I love the way you sing along to your favorite songs" },
    { emoji: "💕", text: "You understand me like no one else does" },
    { emoji: "🌸", text: "Your kindness towards everyone around you is beautiful" },
    { emoji: "🦋", text: "You make ordinary moments feel extraordinary" },
    { emoji: "🌈", text: "You bring color into my life" },
    { emoji: "☀️", text: "You're my sunshine on cloudy days" },
    { emoji: "💫", text: "The way your eyes sparkle when you're excited" },
    { emoji: "🎨", text: "I love your creativity and unique perspective on life" },
    { emoji: "📚", text: "You're incredibly intelligent and I love learning from you" },
    { emoji: "🍕", text: "Even our simple dinner dates feel special with you" },
    { emoji: "🌙", text: "You're the last thing I think about before I sleep" },
    { emoji: "☕", text: "I love our morning conversations" },
    { emoji: "🎭", text: "You make me feel completely myself around you" },
    { emoji: "🌺", text: "Your strength and resilience amaze me" },
    { emoji: "💝", text: "You show love in the most thoughtful little ways" },
    { emoji: "🎈", text: "Life is more fun and adventurous with you" },
    { emoji: "🌻", text: "You have the most beautiful soul" },
    { emoji: "⭐", text: "You believe in me even when I don't believe in myself" },
    { emoji: "🎀", text: "I love your quirky habits that make you uniquely you" },
    { emoji: "🦄", text: "You're one in a million" },
    { emoji: "🍰", text: "Life with you is sweeter" },
    { emoji: "🌹", text: "Your passion for the things you love is contagious" },
    { emoji: "🎪", text: "You make every day feel like an adventure" },
    { emoji: "💐", text: "You're patient with me even when I'm difficult" },
    { emoji: "🎶", text: "I love the sound of your laughter" },
    { emoji: "🌠", text: "You make my dreams feel possible" },
    { emoji: "🦋", text: "Watching you grow and achieve your goals makes me so proud" },
    { emoji: "💗", text: "You make me want to be the best version of myself" },
    { emoji: "🌟", text: "Your optimism helps me see the bright side of things" },
    { emoji: "🎯", text: "You support my goals and cheer me on" },
    { emoji: "🌸", text: "I love how caring you are with everyone" },
    { emoji: "🎨", text: "You see beauty in things I would have never noticed" },
    { emoji: "💞", text: "You're my best friend and my love" },
    { emoji: "🌈", text: "You accept me for who I am, flaws and all" },
    { emoji: "🎪", text: "With you, even boring tasks become fun" },
    { emoji: "💘", text: "I love the way you scrunch your nose when you smile" },
    { emoji: "🌙", text: "You make me feel safe and loved" },
    { emoji: "✨", text: "You have such a pure and genuine heart" },
    { emoji: "🎵", text: "I love making memories with you" },
    { emoji: "🦋", text: "You encourage me to step out of my comfort zone" },
    { emoji: "💖", text: "The way you care for the people you love is incredible" },
    { emoji: "🌺", text: "You're beautiful inside and out" },
    { emoji: "🎀", text: "I love your sense of style and how you express yourself" },
    { emoji: "⭐", text: "You're always there when I need you" },
    { emoji: "💝", text: "Simply put, you make me happy" }
];

let counter = 0;
let usedReasons = [];

// Get DOM elements
const reasonText = document.getElementById('reasonText');
const emojiElement = document.querySelector('.emoji');
const counterElement = document.getElementById('counter');
const newReasonBtn = document.getElementById('newReasonBtn');

// Function to get a random reason
function getRandomReason() {
    // If all reasons have been shown, reset
    if (usedReasons.length === reasons.length) {
        usedReasons = [];
    }
    
    // Get unused reasons
    const availableReasons = reasons.filter((_, index) => !usedReasons.includes(index));
    
    // Select random reason from available
    const randomIndex = Math.floor(Math.random() * availableReasons.length);
    const selectedReason = availableReasons[randomIndex];
    
    // Mark this reason as used
    const originalIndex = reasons.indexOf(selectedReason);
    usedReasons.push(originalIndex);
    
    return selectedReason;
}

// Function to display a new reason
function showNewReason() {
    const reason = getRandomReason();
    
    // Add animation class
    const reasonContainer = document.querySelector('.reason-container');
    reasonContainer.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void reasonContainer.offsetWidth;
    
    reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    
    // Update content
    emojiElement.textContent = reason.emoji;
    reasonText.textContent = reason.text;
    
    // Update counter
    counter++;
    counterElement.textContent = counter;
    
    // Add button animation
    newReasonBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        newReasonBtn.style.transform = 'scale(1)';
    }, 100);
}

// Event listener for button
newReasonBtn.addEventListener('click', showNewReason);

// Optional: Show first reason on load after a short delay
setTimeout(() => {
    showNewReason();
}, 500);
