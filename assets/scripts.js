let count = 1;
document.getElementById('slide1').checked = true;

setInterval(() => {
    proximaimagem()
}, 5000);

function proximaimagem() {
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById('slide'+count).checked = true;
} 

const parte6_flex = document.getElementById('parte6_flex');
const carrosel = document.querySelectorAll('.carrosel');
const totalItems = carrosel.length;
let index = 0;

function updateCarousel() {
    parte6_flex.style.transform = `translateX(-${index * 20}%)`;
}

function nextcarrosel() {
    index = (index + 1) % totalItems;
    updateCarousel();
}

setInterval(nextcarrosel, 5000); 