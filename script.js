const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
    // Increase the size of the Yes button
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentYesSize * 1.2}px`;

    // Decrease the size of the No button
    const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${currentNoSize * 0.8}px`;
});

yesButton.addEventListener('click', () => {
    alert("Yay! I love you too! ❤️");
});
