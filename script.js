// Daftar gambar yang tersedia
const images = ["A.jpg", "B.jpg", "C.jpg",];

// Ambil semua kartu di dalam game
const cards = document.querySelectorAll('.card');

// Acak gambar untuk 9 kartu
let assignedImages = [];
for (let i = 0; i < 9; i++) {
    assignedImages.push(images[Math.floor(Math.random() * images.length)]);
}

// Event klik pada kartu
cards.forEach((card, index) => {
    card.addEventListener('click', function () {
        if (!card.classList.contains('flipped')) {
            card.classList.add('flipped');
            card.style.backgroundImage = `url('./assets/${assignedImages[index]}')`;


            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        }
    });
});
