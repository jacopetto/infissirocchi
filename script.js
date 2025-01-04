// Funzione per mostrare la sezione selezionata
function showSection(sectionId) {
    // Ottieni tutte le sezioni
    const sections = document.querySelectorAll('section');
    
    // Rimuovi la classe "active" da tutte le sezioni
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Aggiungi la classe "active" alla sezione selezionata
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }
}


// Carosello immagini I Nostri Lavori
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = carousel.querySelector('img').clientWidth;
  const offset = -currentIndex * (imageWidth); // Calcola l'offset
  carousel.style.transform = `translateX(${offset}px)`; // Sposta il carosello
}

nextBtn.addEventListener('click', () => {
  const totalImages = carousel.querySelectorAll('img').length;
  currentIndex = (currentIndex + 1) % totalImages; // Vai alla prossima immagine
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  const totalImages = carousel.querySelectorAll('img').length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Torna alla precedente
  updateCarousel();
});
