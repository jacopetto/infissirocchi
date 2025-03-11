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

// Funzione per caricare la sezione Home come predefinita
document.addEventListener("DOMContentLoaded", function() {
  // Mostra la sezione home al caricamento
  showSection('home');
});

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

// Carosello immagini I Nostri Lavori (Secondo Carosello)
const carousel2 = document.querySelector('.carousel2');
const prevBtn2 = document.querySelector('.prev-btn2');
const nextBtn2 = document.querySelector('.next-btn2');

let currentIndex2 = 0;

function updateCarousel2() {
// Ottieni la larghezza del contenitore per una gestione più precisa
const imageWidth2 = carousel2.querySelector('img').getBoundingClientRect().width;

// Calcola l'offset in base all'indice corrente
const offset2 = -currentIndex2 * imageWidth2;

// Sposta il carosello
carousel2.style.transform = `translateX(${offset2}px)`;
carousel2.style.transition = 'transform 0.3s ease-in-out';
}

nextBtn2.addEventListener('click', () => {
const totalImages2 = carousel2.querySelectorAll('img').length;

// Vai all'immagine successiva
if (currentIndex2 < totalImages2 - 1) {
  currentIndex2++;
} else {
  currentIndex2 = 0; // Torna alla prima immagine
}
updateCarousel2();
});

prevBtn2.addEventListener('click', () => {
const totalImages2 = carousel2.querySelectorAll('img').length;

// Vai all'immagine precedente
if (currentIndex2 > 0) {
  currentIndex2--;
} else {
  currentIndex2 = totalImages2 - 1; // Torna all'ultima immagine
}
updateCarousel2();
});

// Aggiorna automaticamente il carosello al caricamento e su resize
window.addEventListener('resize', updateCarousel2);
updateCarousel2();
