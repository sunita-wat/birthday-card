// สร้างคอนเฟ็ตตี้
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(confetti);
    }
}

// กลับการ์ด
function flipCard() {
    const card = document.getElementById('birthdayCard');
    card.classList.toggle('flip');
    
    if (card.classList.contains('flip')) {
        createConfetti();
    }
}

// แสดงคอนเฟ็ตตี้เมื่อโหลดหน้า
window.onload = function() {
    createConfetti();
};