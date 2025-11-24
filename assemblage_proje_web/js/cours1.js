/* ===========================
   Fonctions utilitaires
   =========================== */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
 
/* ===========================
   Données des cours
   =========================== */
const COURSES = [
  {id:'Mathématiques', title:'Mathématiques', desc:'Analyse, algèbre linéaire, probabilités.',
    lessons:[{title:'Fonctions et limites'},
             {title:'Dérivées'},
             {title:'Intégrales'}]
  },
  {id:'Physique', title:'Physique', desc:'Mécanique, optique et électromagnétisme.',
    lessons:[{title:'Cinématique'},
             {title:'Énergie'}]
  },
  {id:'Informatique', title:'Informatique', desc:'Programmation, bases de données, réseaux.',
    lessons:[{title:'Programmation'},
             {title:'Bases de données'},
             {title:'Réseaux'}]
  },
  {id:'Sciences Humaines', title:'Sciences Humaines', desc:'Éthique, communication, culture générale.',
    lessons:[{title:'Éthique et société'},
             {title:'Communication'},
             {title:'Culture générale'}]
  },
  {
    id:'Chimie', title:'Chimie', desc:'Chimie générale et organique.',
   
    lessons:[
      {title:'Structure atomique', text:'Protons, neutrons, électrons.'},
      {title:'Réactions', text:'Réaction acido-basique.'}
    ]
  }
];
 
/* ===========================
   Rendu liste des cours
   =========================== */
function renderCourseList(){
  const grid = document.querySelector('#courses .grid-3');
  grid.innerHTML = '';
  COURSES.forEach((c, idx)=>{
    const card = document.createElement('div');
    card.className='course-card';
    card.innerHTML = `
      <h4>${escapeHtml(c.title)}</h4>
      <div class="small">${escapeHtml(c.desc)}</div>
      <div style="margin-top:10px;display:flex;justify-content:space-between;align-items:center">
        <div class="small">Leçons: ${c.lessons.length}</div>
        <div>
          <button class="btn-outline" onclick="goToMyCourse('${c.id}')">Ouvrir</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
 
renderCourseList();
 
/* ===========================
   Redirection vers mon_cours.html
   =========================== */
function goToMyCourse(courseId){
  localStorage.setItem('matiereChoisie', courseId);
  window.location.href = 'mon_cours.html';
}