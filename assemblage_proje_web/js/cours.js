const matieres = document.querySelectorAll('.matiere');
const validerBtn = document.getElementById('valider');
let matiereChoisie = null;

matieres.forEach(m => {
  m.addEventListener('click', () => {
    matieres.forEach(el => el.classList.remove('selected'));
    m.classList.add('selected');
    matiereChoisie = m.dataset.nom;
  });
});

validerBtn.addEventListener('click', () => {
  if (matiereChoisie) {
    localStorage.setItem('matiereChoisie', matiereChoisie);
    window.location.href = 'mon_cours.html';
  } else {
    alert('Veuillez sélectionner une matière avant de valider.');
  }
});
