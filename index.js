let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = document.getElementsByTagName("li");

let elementShow = 3;
if (document.body.clientWidth < 1000) {
    elementShow = 1;
} else if (document.body.clientWidth < 1500) {
    elementShow = 2;
}
let SliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = SliderContainerWidth / elementShow;
slider.style.width = cards.length * cardWidth + 'px';
for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev() {
    if (+slider.style.marginLeft.slice(0, -2) !== 0) {
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
    }
}

function next() {
    if (+slider.style.marginLeft.slice(0, -2) !== -cardWidth * (cards.length - elementShow)) {
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
    }
}
