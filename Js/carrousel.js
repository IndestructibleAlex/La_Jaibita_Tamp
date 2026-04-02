const carrousel = document.getElementById('carrousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
const totalCards = carrousel.children.length;
function getCardWidth() {
    const card = carrousel.children[0];
    const style = window.getComputedStyle(card);
    return card.offsetWidth + parseInt(style.marginLeft)+ parseInt(style.marginRight);
}
function updateCarrousel() {
    const cardWidth = getCardWidth();
    carrousel.style.transform = `translateX(${-index * cardWidth}px)`;
}
next.addEventListener('click', () => {
    index = (index + 1) % totalCards;
    updateCarrousel();
});
prev.addEventListener('click', () => {
    index = (index - 1 + totalCards) % totalCards;
    updateCarrousel();
});
window.addEventListener('resize', updateCarrousel);
window.addEventListener('load', updateCarrousel);