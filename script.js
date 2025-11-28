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
        riddle: "I'm what diamonds do, and what eyes can too when filled with joy. What am I?",
        clue: "I shimmer and shine in the light",
        answer: "sparkle"
    },
    { 
        emoji: "🌈", 
        text: "You bring color into my life",
        sassyText: "...color also refers to temperament. Not your tan, which I can clearly outdo!",
        riddle: "I appear after storms pass by. What am I?",
        clue: "I arch across the sky with seven colors so high",
        answer: "rainbow"
    },
    { 
        emoji: "☀️", 
        text: "You're my sunshine on cloudy days",
        sassyText: "...which is great because we literally don't get that many sunny days!",
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
        text: "Your kindness towards everyone in your life is beautiful, my lovely introvert",
        sassyText: "...even people who sometimes chew loudly and/or smell bad. Phew, I am lucky!",
        riddle: "I bloom in gardens and smell divine. What am I?",
        clue: "I bloom in spring and I'm pretty and sweet",
        answer: "flower"
    },
    { 
        emoji: "🎵", 
        text: "I love it when you vibe with music",
        sassyText: "...even the worn-out fantasy-medieval-tavern playlist!",
        riddle: "I have keys but no locks, space but no room. What am I?",
        clue: "You can play me with your fingers",
        answer: "piano"
    },
    { 
        emoji: "☕", 
        text: "Your energy is contagious",
        sassyText: "...though the old man in me enjoys the rest when you are tuckered out!",
        riddle: "I'm a bean that can't grow in a garden. What am I?",
        clue: "I wake people up every morning",
        answer: "coffee"
    },
    { 
        emoji: "📚", 
        text: "I love that you are intelligent and systematic",
        sassyText: "...although it makes you a scary opponent in those little couple-fights about everyday things!",
        riddle: "I have a spine but no bones. You can lose yourself in me for hours. What am I?",
        clue: "I have pages but I'm not a servant.",
        answer: "book"
    },
    { 
        emoji: "👣", 
        text: "You make me feel safe and at peace anywhere I am with you",
        sassyText: "...but that's not to say that we should travel even more!",
        riddle: "The more you take of me, the more you leave behind. What am I?",
        clue: "You take them everywhere you go",
        answer: "steps"
    },
    { 
        emoji: "🎨", 
        text: "Your creativity and skill with crafts amaze me",
        sassyText: "...though we may want to save up for a second house for your creations!",
        riddle: "I can be cracked, made, told, and played. What am I?",
        clue: "I can make you laugh or groan",
        answer: "joke"
    },
];

let solvedReasons = []; // Track solved reasons in order
let currentIndex = -1; // Current position in solved reasons
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
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const newRiddleBtn = document.getElementById('newRiddleBtn');

// Function to get a random unsolved reason
function getRandomUnsolvedReason() {
    const solvedIndices = solvedReasons.map(r => reasons.indexOf(r));
    const unsolvedReasons = reasons.filter((_, index) => !solvedIndices.includes(index));
    
    if (unsolvedReasons.length === 0) {
        return null; // All solved
    }
    
    const randomIndex = Math.floor(Math.random() * unsolvedReasons.length);
    return unsolvedReasons[randomIndex];
}

// Function to update navigation buttons
function updateNavigationButtons() {
    if (solvedReasons.length === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        newRiddleBtn.style.display = 'none';
        return;
    }
    
    prevBtn.style.display = currentIndex > 0 ? 'inline-block' : 'none';
    nextBtn.style.display = currentIndex < solvedReasons.length - 1 ? 'inline-block' : 'none';
    newRiddleBtn.style.display = solvedReasons.length < reasons.length ? 'inline-block' : 'none';
}

// Function to show riddle
function showRiddle() {
    const unsolvedReason = getRandomUnsolvedReason();
    
    if (!unsolvedReason) {
        alert('The Sphinx of Love is out of riddles for now, but he\'ll be sure to have more later!');
        return;
    }
    
    currentReason = unsolvedReason;
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
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    newRiddleBtn.style.display = 'none';
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
    
    // Add to solved reasons if not already there
    if (!solvedReasons.includes(currentReason)) {
        solvedReasons.push(currentReason);
        currentIndex = solvedReasons.length - 1;
    }
    
    // Animate transition
    const reasonContainer = document.querySelector('.reason-container');
    reasonContainer.style.animation = 'none';
    void reasonContainer.offsetWidth;
    reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    
    // Hide riddle, show reason
    riddleContainer.style.display = 'none';
    reasonDisplay.style.display = 'block';
    
    // Update content
    displayCurrentReason();
    
    // Update counter
    counterElement.textContent = `${currentIndex + 1} of ${solvedReasons.length}`;
    
    // Show buttons
    newReasonBtn.style.display = 'none'; // Hide the old "Show Me Love" button
    sassyBtn.style.display = 'inline-block';
    updateNavigationButtons();
}

// Function to display the current reason
function displayCurrentReason() {
    if (currentIndex >= 0 && currentIndex < solvedReasons.length) {
        const reason = solvedReasons[currentIndex];
        emojiElement.textContent = reason.emoji;
        reasonText.textContent = reason.text;
        sassyShown = false;
        sassyBtn.style.display = 'inline-block';
    }
}

// Function to go to previous reason
function goToPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCurrentReason();
        counterElement.textContent = `${currentIndex + 1} of ${solvedReasons.length}`;
        updateNavigationButtons();
        
        // Animate
        const reasonContainer = document.querySelector('.reason-container');
        reasonContainer.style.animation = 'none';
        void reasonContainer.offsetWidth;
        reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    }
}

// Function to go to next reason
function goToNext() {
    if (currentIndex < solvedReasons.length - 1) {
        currentIndex++;
        displayCurrentReason();
        counterElement.textContent = `${currentIndex + 1} of ${solvedReasons.length}`;
        updateNavigationButtons();
        
        // Animate
        const reasonContainer = document.querySelector('.reason-container');
        reasonContainer.style.animation = 'none';
        void reasonContainer.offsetWidth;
        reasonContainer.style.animation = 'fadeIn 0.5s ease-in';
    }
}

// Function to show sassy addition
function showSassyText() {
    const reason = solvedReasons[currentIndex];
    if (!sassyShown && reason && reason.sassyText) {
        reasonText.innerHTML = reason.text + ' ' + reason.sassyText;
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

prevBtn.addEventListener('click', goToPrevious);

nextBtn.addEventListener('click', goToNext);

newRiddleBtn.addEventListener('click', showRiddle);

riddleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Don't auto-show riddle - let user click the button to start
