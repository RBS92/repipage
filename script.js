// Array of reasons with riddles to unlock them
// TODO: Customize these with your own personal messages and riddles!
const reasons = [
    { 
        emoji: "😊", 
        text: "Your smile lights up the room",
        sassyText: "...who needs Spanish sunhours when we've got you!",
        riddle: "I'm contagious and can brighten any place. What am I?",
        clue: "I can wrinkle your face!",
        answer: "smile"
    },
    { 
        emoji: "💖", 
        text: "I love you more than I can express",
        sassyText: "...and I have even seen the secret dance moves!",
        riddle: "I'm a symbol of love and care. What am I?",
        clue: "I beat faster when you're near",
        answer: "heart"
    },
    { 
        emoji: "🌟", 
        text: "You're incredibly thoughtful and always think of others",
        sassyText: "...but I suspect the snack-sharing has self-snacking motives!",
        riddle: "People wish upon me when I fly by. What am I?",
        clue: "I twinkle in the night sky",
        answer: "star"
    },
    { 
        emoji: "🤗", 
        text: "Hugging you feels like home",
        sassyText: "...even when I am just straightening your back!",
        riddle: "I make everything feel right. What am I?",
        clue: "I wrap my arms around you tight",
        answer: "hug"
    },
    { 
        emoji: "✨", 
        text: "You inspire me to be a better person every day",
        sassyText: "...although it might seem like I'm slow about it!",
        riddle: "I'm magical and bright, I add delight. What am I?",
        clue: "I shimmer and shine in the light",
        answer: "sparkle"
    },
    { 
        emoji: "🌈", 
        text: "You bring color and temperament into my life",
        sassyText: "...and by color, I mean needs, wants and opinions different from my own.<br>...and by temperament I mean (rightous) chaos when I fail to appreciate the color",
        riddle: "I appear after storms pass by. What am I?",
        clue: "I arch across the sky with seven colors so high",
        answer: "rainbow"
    },
    { 
        emoji: "☀️", 
        text: "You're my sunshine on cloudy days",
        sassyText: "...which is great because we literally don't get that manny sunny days!",
        riddle: "I give warmth and light to all I see. What am I?",
        clue: "I rise in the morning and set at night",
        answer: "sun"
    },
    { 
        emoji: "🌙", 
        text: "You're the last thing I think about before I sleep",
        sassyText: "...most often, your curls in my face!",
        riddle: "I change my shape throughout the month. What am I?",
        clue: "I glow at night, sometimes I'm full and bright",
        answer: "moon"
    },
    { 
        emoji: "🦋", 
        text: "Your organization skills and attention to detail always impress me",
        sassyText: "...proof that opposites attract!",
        riddle: "I transform from something slow to graceful flight. What am I?",
        clue: "I was once a caterpillar, now I fly with colorful wings",
        answer: "butterfly"
    },
    { 
        emoji: "🌸", 
        text: "Although you are introverted, I think your kindness towards everyone in your life is beautiful",
        sassyText: "...even people who sometimes chew loudly and/or smell bad. Phew, I am lucky!",
        riddle: "I bloom in gardens and smell divine. What am I?",
        clue: "I bloom in spring and I'm pretty and sweet",
        answer: "flower"
    },
    // Add more reasons here with personal riddles and messages!
    // Example format:
    // { 
    //     emoji: "💕", 
    //     text: "Your custom message here",
    //     sassyText: "...but also something playfully teasing!",
    //     riddle: "Your custom riddle here?",
    //     clue: "A helpful hint if they're stuck",
    //     answer: "answer" (case insensitive)
    // },
];

let counter = 0;
let usedReasons = [];
let currentReason = null;
let riddleMode = false;
let clueShown = false;
let sassyShown = false;

// Get DOM elements
const reasonText = document.getElementById('reasonText');
const emojiElement = document.querySelector('.emoji');
const counterElement = document.getElementById('counter');
const newReasonBtn = document.getElementById('newReasonBtn');
const riddleInput = document.getElementById('riddleInput');
const submitAnswerBtn = document.getElementById('submitAnswer');
const riddleContainer = document.getElementById('riddleContainer');
const reasonDisplay = document.getElementById('reasonDisplay');
const feedbackText = document.getElementById('feedbackText');
const clueBtn = document.getElementById('clueBtn');
const clueText = document.getElementById('clueText');
const sassyBtn = document.getElementById('sassyBtn');

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

// Function to show riddle
function showRiddle() {
    currentReason = getRandomReason();
    riddleMode = true;
    clueShown = false;
    
    // Animate transition
    const reasonContainer = document.querySelector('.reason-container');
    reasonContainer.style.animation = 'none';
    void reasonContainer.offsetWidth;
    reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    
    // Hide reason display, show riddle
    reasonDisplay.style.display = 'none';
    riddleContainer.style.display = 'block';
    
    // Keep emoji hidden (show thinking emoji)
    emojiElement.textContent = '🤔';
    reasonText.textContent = currentReason.riddle;
    
    // Clear input and feedback
    riddleInput.value = '';
    feedbackText.textContent = '';
    feedbackText.className = 'feedback-text';
    clueText.textContent = '';
    clueText.style.display = 'none';
    clueBtn.style.display = 'inline-block';
    
    // Hide buttons
    newReasonBtn.style.display = 'none';
    sassyBtn.style.display = 'none';
    riddleInput.focus();
}

// Function to show clue
function showClue() {
    if (!clueShown && currentReason) {
        clueText.textContent = '💡 ' + currentReason.clue;
        clueText.style.display = 'block';
        clueBtn.style.display = 'none';
        clueShown = true;
    }
}

// Function to check answer
function checkAnswer() {
    const userAnswer = riddleInput.value.trim().toLowerCase();
    const correctAnswer = currentReason.answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        // Correct answer!
        feedbackText.textContent = '✨ Correct! Here\'s your message...';
        feedbackText.className = 'feedback-text correct';
        
        setTimeout(() => {
            showUnlockedReason();
        }, 1500);
    } else {
        // Wrong answer
        feedbackText.textContent = '❌ Not quite... try again!';
        feedbackText.className = 'feedback-text incorrect';
        riddleInput.value = '';
        
        // Shake animation
        riddleInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            riddleInput.style.animation = '';
        }, 500);
    }
}

// Function to show unlocked reason
function showUnlockedReason() {
    riddleMode = false;
    sassyShown = false;
    
    // Animate transition
    const reasonContainer = document.querySelector('.reason-container');
    reasonContainer.style.animation = 'none';
    void reasonContainer.offsetWidth;
    reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    
    // Hide riddle, show reason
    riddleContainer.style.display = 'none';
    reasonDisplay.style.display = 'block';
    
    // Update content
    emojiElement.textContent = currentReason.emoji;
    reasonText.textContent = currentReason.text;
    
    // Update counter
    counter++;
    counterElement.textContent = counter;
    
    // Show buttons
    newReasonBtn.style.display = 'block';
    sassyBtn.style.display = 'inline-block';
    
    newReasonBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        newReasonBtn.style.transform = 'scale(1)';
    }, 100);
}

// Function to show sassy addition
function showSassyText() {
    if (!sassyShown && currentReason && currentReason.sassyText) {
        reasonText.innerHTML = currentReason.text + ' ' + currentReason.sassyText;
        sassyBtn.style.display = 'none';
        sassyShown = true;
        
        // Add animation
        const reasonContainer = document.querySelector('.reason-container');
        reasonContainer.style.animation = 'none';
        void reasonContainer.offsetWidth;
        reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    }
}

// Event listeners
newReasonBtn.addEventListener('click', showRiddle);

submitAnswerBtn.addEventListener('click', checkAnswer);

clueBtn.addEventListener('click', showClue);

sassyBtn.addEventListener('click', showSassyText);

riddleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Show first riddle on load
setTimeout(() => {
    showRiddle();
}, 500);
