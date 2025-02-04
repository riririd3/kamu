const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
    response.textContent = 'Yay! Thanks for being my Valentine!';
    response.style.color = '#4CAF50';
});

noBtn.addEventListener('click', () => {
    response.textContent = 'Aww, okay! Maybe next time?';
    response.style.color = '#ff69b4';
}}<;
