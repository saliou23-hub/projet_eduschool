// ===============================
//  Récupération des paramètres de l'URL
// ===============================
const urlParams = new URLSearchParams(window.location.search);
const matiere = urlParams.get('matiere');   // ex: "Sciences Humaines"
const lecon = urlParams.get('lecon');       // ex: "Culture Générale"

// ===============================
//  Récupération du contenu global
// ===============================
const contenus = JSON.parse(localStorage.getItem('contenusGlobal'));

// ===============================
//  Sélection des éléments HTML
// ===============================
const titreEl = document.getElementById('titre-lecon');
const descEl = document.getElementById('desc-lecon');
const pdfsContainer = document.getElementById('pdfs-container');
const imgEl = document.getElementById('img-lecon');
const btnTest = document.getElementById('btn-test');
const btnSuivant = document.getElementById('btn-suivant');

// ===============================
//  Vérification du contenu
// ===============================
if (!contenus) {
  titreEl.textContent = "Erreur : aucun contenu disponible";
  descEl.textContent = "Veuillez d'abord choisir une matière dans Mon Cours.";
} 
else if (matiere && lecon && contenus[matiere]) {
  
  //  Récupérer la leçon actuelle
  const cours = contenus[matiere].find(c => c.titre === lecon);

  if (cours) {
    //  Affichage titre et description
    titreEl.textContent = `${cours.titre} (${matiere})`;
    descEl.textContent = cours.desc;

    //  Affichage image
    if (cours.img) {
      imgEl.src = cours.img;
      imgEl.alt = cours.titre;
      imgEl.style.display = "block";
    }

    //  Affichage PDFs
    if (cours.pdfs && cours.pdfs.length > 0) {
      pdfsContainer.innerHTML = `<h4>Documents à consulter :</h4>`;
      cours.pdfs.forEach(pdf => {
        const a = document.createElement('a');
        a.href = pdf;
        a.target = "_blank";
        a.className = "btn";
        a.textContent = pdf.split('/').pop();
        pdfsContainer.appendChild(a);
      });
    } else {
      pdfsContainer.innerHTML = "<p>Aucun document disponible pour cette leçon.</p>";
    }

    //  Gestion du quiz
    const titreNorm = cours.titre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let quizFile = "";
    let idLecon = "";

    if (titreNorm.includes("analyse")) { quizFile = "quiz_analyse.html"; idLecon = "analyse"; }
    else if (titreNorm.includes("statistique")) { quizFile = "quiz_statistiques.html"; idLecon = "statistique"; }
    else if (titreNorm.includes("algebre")) { quizFile = "quiz_Algèbre_linéaire.html"; idLecon = "algebre"; }
    else if (titreNorm.includes("mecanique")) { quizFile = "quiz_mecanique.html"; idLecon = "mecanique"; }
    else if (titreNorm.includes("electricite")) { quizFile = "quiz_electricite.html"; idLecon = "electricite"; }
    else if (titreNorm.includes("optique")) { quizFile = "quiz_optique.html"; idLecon = "optique"; }
    else if (titreNorm.includes("programmation")) { quizFile = "quiz_programmation.html"; idLecon = "programmation"; }
    else if (titreNorm.includes("bases de donnees")) { quizFile = "quiz_bases_de_donnees.html"; idLecon = "bases_de_donnees"; }
    else if (titreNorm.includes("reseaux")) { quizFile = "quiz_reseaux.html"; idLecon = "reseaux"; }
    else if (titreNorm.includes("ethique")) { quizFile = "quiz_ethique_societe.html"; idLecon = "ethique et societe"; }
    else if (titreNorm.includes("culture generale")) { quizFile = "quiz_culture_generale.html"; idLecon = "culture"; }
    else if (titreNorm.includes("communication")) { quizFile = "quiz_communication.html"; idLecon = "communication"; }

    //  Gestion du bouton "Passer au test"
    const leconValidee = localStorage.getItem('lecon_validee');
    if (quizFile) {
      btnTest.style.display = "inline-block";
      btnTest.onclick = () => {
        localStorage.removeItem("quiz_en_cours");
        window.location.href = quizFile;
      };

      if (leconValidee === idLecon) {
        btnTest.textContent = " Refaire le test";
        btnSuivant.style.display = "inline-block";
        btnSuivant.textContent = "Passer à la leçon suivante";

        // 🔹 Calcul de la prochaine leçon dans la même matière
        const lecons = contenus[matiere];                 // toutes les leçons de la matière
        const indexActuel = lecons.findIndex(c => c.titre === lecon);
        const leconSuivante = lecons[indexActuel + 1];    // prochaine leçon

        if (leconSuivante) {
          btnSuivant.href = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante.titre)}`;
        } else {
          btnSuivant.style.display = "none";  // plus de leçon suivante
        }

      } else {
        btnTest.textContent = "Passer au test";
        btnSuivant.style.display = "none";
      }
    } else {
      btnTest.style.display = "none";
      btnSuivant.style.display = "none";
    }

  } else {
    titreEl.textContent = "Leçon non trouvée";
    descEl.textContent = "La leçon demandée n'existe pas pour cette matière.";
  }

} else {
  titreEl.textContent = "Leçon non trouvée";
  descEl.textContent = "Aucune matière ou leçon n'a été sélectionnée.";
}
