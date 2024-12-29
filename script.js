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
//totti