// Contenus des matières
const contenus = {
  "Mathématiques": [
    {
      titre: "Analyse 1",
      desc: "Limites, dérivées, intégrales, applications.",
      img: "images/Analyse 1.png",
      pdfs: ["documents/Analyse1.pdf", "documents/analyse_exercices.pdf"]
    },
    {
      titre: "Algèbre linéaire",
      desc: "Matrices, systèmes linéaires, espaces vectoriels.",
      img: "images/algebre 1.jpg",
      pdfs: ["documents/algebre_cours.pdf", "documents/algebre_exercices.pdf"]
    },
    {
      titre: "Statistiques",
      desc: "Probabilités, lois de distribution, estimation.",
      img: "images/Statistique.jpg",
      pdfs: ["documents/statistique.pdf", "documents/Exercices-Proba-Stats.pdf"]
    }
  ],
  "Physique": [
    {
      titre: "Mécanique",
      desc: "Cinématique, lois de Newton, énergie et travail.",
      img: "images/Mecanique.jpg",
      pdfs: ["documents/mecanique_cours.pdf", "documents/mecanique_tp.pdf"]
    },
    {
      titre: "Électricité",
      desc: "Circuits, lois de Kirchhoff, champs électriques.",
      img: "images/Electricite.jpg",
      pdfs: ["documents/electricite_theorie.pdf", "documents/circuits_tp.pdf"]
    },
    {
      titre: "Optique",
      desc: "Réflexion, réfraction, lentilles et miroirs.",
      img: "images/Optique.jpg",
      pdfs: ["documents/optique_intro.pdf", "documents/optique_exercice.pdf"]
    }
  ],
  "Informatique": [
    {
      titre: "Programmation",
      desc: "Introduction à Python et structures de contrôle.",
      img: "images/Programmation.jpg",
      pdfs: ["documents/python_debutant.pdf", "documents/exercices_python.pdf"]
    },
    {
      titre: "Bases de données",
      desc: "Modélisation relationnelle, SQL.",
      img: "images/Bases de données.jpg",
      pdfs: ["documents/mcd.pdf", "documents/Exercice_SQL.pdf"]
    },
    {
      titre: "Réseaux",
      desc: "Modèle OSI, TCP/IP, routage et adressage IP.",
      img: "images/Reseaux.jpeg",
      pdfs: ["documents/reseaux_base.pdf", "documents/adressage_tp.pdf"]
    }
  ],
  "Sciences Humaines": [
    { titre: "Éthique et société", 
      desc: "Responsabilité numérique, enjeux moraux des IA.", 
      img: "images/Ethique et societe.png", 
      pdfs: ["documents/ethique_ia.pdf","documents/vie_privee.pdf"] 
    },
    { titre: "Communication", 
      desc: "Techniques orales et écrites à l’université.", 
      img: "images/Communication.jpg", 
      pdfs: ["documents/communication.pdf","documents/communication_orale.pdf"] 
    },
    { titre: "Culture générale", 
      desc: "Histoire contemporaine, philosophie et économie.", 
      img: "images/Culture generale.jpg", 
      pdfs: ["documents/culture_modernite.pdf","documents/histoire_resume.pdf"] 
    }
  ]

};

// Sauvegarde globale pour lecon.js
localStorage.setItem('contenusGlobal', JSON.stringify(contenus));

// Récupérer la matière choisie
const zoneChoix = document.getElementById('zone-choix');
const choix = localStorage.getItem('matiereChoisie');

if (choix && contenus[choix]) {
  let html = `<h3>${choix}</h3>`;
  html += `<div class="cours-container">`;

  contenus[choix].forEach(c => {
    html += `
      <div class="carte-cours">
        <img src="${c.img}" alt="${c.titre}">
        <div class="contenu">
          <h3>
            <a href="lecon.html?matiere=${encodeURIComponent(choix)}&lecon=${encodeURIComponent(c.titre)}">
              ${c.titre}
            </a>
          </h3>
          <p>${c.desc}</p>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  zoneChoix.innerHTML = html;

} else {
  zoneChoix.innerHTML = `
    <p>Vous n'avez encore choisi aucune matière.</p>
    <a href="cours.html" class="btn">Choisir une matière</a>
  `;
}
