// ===============================
//  QUIZ : Structure Atomique (Chimie)
// ===============================
const quizData = [
  {
    question: "1. Un atome est constitué de :",
    answers: [
      { text: "Protons et électrons uniquement", correct: false, explanation: "Faux — il manque les neutrons qui composent aussi le noyau." },
      { text: "Électrons autour d’un noyau de protons et de neutrons", correct: true, explanation: "Exact — le noyau contient protons + neutrons, les électrons gravitent autour." },
      { text: "Uniquement des protons", correct: false, explanation: "Faux — les atomes contiennent aussi neutrons et électrons." },
      { text: "Uniquement des électrons", correct: false, explanation: "Faux — les électrons orbitent autour d’un noyau." }
    ]
  },
  {
    question: "2. Le numéro atomique (Z) représente :",
    answers: [
      { text: "Le nombre d’électrons", correct: false, explanation: "Faux — sauf pour un atome neutre, ce n’est pas toujours exact." },
      { text: "Le nombre de neutrons", correct: false, explanation: "Faux — les neutrons définissent plutôt les isotopes." },
      { text: "Le nombre de protons dans le noyau", correct: true, explanation: "Exact — c'est la définition même du numéro atomique." },
      { text: "La masse atomique", correct: false, explanation: "Faux — la masse dépend aussi des neutrons." }
    ]
  },
  {
    question: "3. Un isotope est un atome qui possède :",
    answers: [
      { text: "Un nombre différent de protons", correct: false, explanation: "Faux — changer le nombre de protons change d’élément." },
      { text: "Un nombre différent d’électrons", correct: false, explanation: "Faux — cela définit un ion, pas un isotope." },
      { text: "Un nombre différent de neutrons", correct: true, explanation: "Exact — les isotopes ont même Z mais N différent." },
      { text: "Une masse atomique identique", correct: false, explanation: "Faux — la masse change puisque les neutrons changent." }
    ]
  },
  {
    question: "4. Le nombre de masse (A) est égal à :",
    answers: [
      { text: "Nombre de protons + neutrons", correct: true, explanation: "Exact — c’est la définition même du nombre de masse." },
      { text: "Nombre d’électrons + neutrons", correct: false, explanation: "Faux — les électrons n’ont presque pas de masse." },
      { text: "Nombre de protons uniquement", correct: false, explanation: "Faux — cela correspond au numéro atomique (Z)." },
      { text: "Nombre de neutrons uniquement", correct: false, explanation: "Faux — c'est seulement une partie du nombre de masse." }
    ]
  },
  {
    question: "5. La masse atomique relative d’un élément est :",
    answers: [
      { text: "La masse de l’isotope le plus abondant", correct: false, explanation: "Faux — c’est une moyenne pondérée, pas un seul isotope." },
      { text: "Une moyenne pondérée des masses isotopiques", correct: true, explanation: "Exact — on tient compte des abondances naturelles." },
      { text: "La masse du proton", correct: false, explanation: "Faux — cela n’a aucun lien." },
      { text: "La masse totale des électrons", correct: false, explanation: "Faux — les électrons sont 2000 fois plus légers qu'un proton." }
    ]
  },
  {
    question: "6. Dans un spectromètre de masse, les particules les plus déviées sont :",
    answers: [
      { text: "Les plus lourdes", correct: false, explanation: "Faux — elles sont peu déviées car leur inertie est plus élevée." },
      { text: "Les plus légères", correct: true, explanation: "Exact — plus la masse est faible, plus la déviation est grande." },
      { text: "Celles avec le plus d’électrons", correct: false, explanation: "Faux — seules les particules ionisées (cations) sont analysées." },
      { text: "Celles non ionisées", correct: false, explanation: "Faux — elles ne sont même pas accélérées dans l’appareil." }
    ]
  },
  {
    question: "7. Lorsqu’un atome absorbe de l’énergie :",
    answers: [
      { text: "Un électron passe à une orbitale d’énergie supérieure", correct: true, explanation: "Exact — c’est l’excitation électronique." },
      { text: "Le noyau se divise", correct: false, explanation: "Faux — la fission n'a rien à voir avec cette situation." },
      { text: "L’atome change d’élément", correct: false, explanation: "Faux — seul le nombre de protons détermine l’élément." },
      { text: "Les neutrons quittent le noyau", correct: false, explanation: "Faux — aucun lien avec l’excitation des électrons." }
    ]
  },
  {
    question: "8. Le spectre d’émission d’un atome :",
    answers: [
      { text: "Est continu", correct: false, explanation: "Faux — un spectre continu provient d’un corps chaud, pas d’un atome isolé." },
      { text: "Est constitué de raies discontinues", correct: true, explanation: "Exact — chaque raie correspond à une transition électronique." },
      { text: "Ne dépend pas de l’énergie fournie", correct: false, explanation: "Faux — l’énergie absorbée détermine les transitions possibles." },
      { text: "Est identique pour tous les éléments", correct: false, explanation: "Faux — chaque élément possède un spectre unique." }
    ]
  },
  {
    question: "9. Selon le modèle ondulatoire, la lumière est :",
    answers: [
      { text: "Un faisceau de particules uniquement", correct: false, explanation: "Faux — ceci correspond au modèle particulaire (photons)." },
      { text: "Une onde électromagnétique", correct: true, explanation: "Exact — deux champs oscillants perpendiculaires." },
      { text: "Une onde mécanique", correct: false, explanation: "Faux — les ondes mécaniques nécessitent un milieu (ex: son)." },
      { text: "Un courant d’électrons", correct: false, explanation: "Faux — cela n’a aucun rapport." }
    ]
  },
  {
    question: "10. L’équation liant c, f et λ est :",
    answers: [
      { text: "c = f / λ", correct: false, explanation: "Faux — cela inverserait la relation." },
      { text: "c = λ × f", correct: true, explanation: "Exact — relation fondamentale des ondes." },
      { text: "λ = c² / f", correct: false, explanation: "Faux — aucun sens physiquement." },
      { text: "f = λ × c²", correct: false, explanation: "Faux — incorrect." }
    ]
  },
  {
    question: "11. L’énergie d’un photon est donnée par :",
    answers: [
      { text: "E = m × c²", correct: false, explanation: "Faux — c’est la formule d’Einstein pour la masse." },
      { text: "E = h × f", correct: true, explanation: "Exact — loi de Planck, énergie proportionnelle à la fréquence." },
      { text: "E = f / h", correct: false, explanation: "Faux — inversion incorrecte." },
      { text: "E = h / λ", correct: false, explanation: "Faux — il manque la vitesse c." }
    ]
  },
  {
    question: "12. Le principe d’incertitude d’Heisenberg affirme qu’il est impossible de connaître :",
    answers: [
      { text: "La position et la quantité de mouvement simultanément avec précision", correct: true, explanation: "Exact — limitation fondamentale en mécanique quantique." },
      { text: "La charge de l’électron", correct: false, explanation: "Faux — elle est parfaitement connue." },
      { text: "Le spin de l’électron", correct: false, explanation: "Faux — cela est mesurable." },
      { text: "Sa masse précise", correct: false, explanation: "Faux — la masse est bien définie." }
    ]
  },
  {
    question: "13. Une orbitale p peut contenir :",
    answers: [
      { text: "1 électron", correct: false, explanation: "Faux — les orbitales contiennent toujours 0, 1 ou 2 électrons." },
      { text: "2 électrons", correct: true, explanation: "Exact — avec spins opposés." },
      { text: "3 électrons", correct: false, explanation: "Faux — impossible pour une seule orbitale." },
      { text: "6 électrons", correct: false, explanation: "Faux — 6 électrons correspond aux 3 orbitales p (px, py, pz)." }
    ]
  },
  {
    question: "14. Les orbitales s, p, d, f sont classées selon :",
    answers: [
      { text: "Leur orientation dans l’espace", correct: false, explanation: "Faux — cela distingue les sous-orbitales, pas les lettres s, p, d." },
      { text: "Leur énergie croissante", correct: true, explanation: "Exact — l’ordre de remplissage dépend de l’énergie." },
      { text: "Le nombre de protons", correct: false, explanation: "Faux — aucun lien." },
      { text: "La charge de l’atome", correct: false, explanation: "Faux — pas pertinent." }
    ]
  },
  {
    question: "15. La configuration électronique du fer commence par :",
    answers: [
      { text: "1s² 2s² 2p⁶", correct: true, explanation: "Exact — les orbitales se remplissent de la plus basse énergie à la plus haute." },
      { text: "3d⁶", correct: false, explanation: "Faux — c’est une partie finale de la configuration du fer." },
      { text: "4s²", correct: false, explanation: "Faux — bien que présente, elle arrive après 3p." },
      { text: "3s¹", correct: false, explanation: "Faux — ce n’est pas la bonne séquence de remplissage." }
    ]
  }
];
 
// ===============================
// VARIABLES GLOBALES
// ===============================
let currentQuestion = 0;
let score = 0;
localStorage.removeItem("quiz_answers");
let userAnswers = Array(quizData.length).fill(null);
 
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz");
 
// nouveau : finish + popup elements
const finishBtn = document.getElementById("finish-test-btn");
const popup = document.getElementById("confirm-popup");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
 
 
// Liste des leçons
const leconsMatiere = ["Structure Atomique", "Réactions"];
 
// ===============================
// TIMER
// ===============================
let timeLeft = 100; // 1.40 minutes
let timerInterval;
 
function startTimer() {
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent =
      `${minutes}:${seconds.toString().padStart(2,"0")}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
    timeLeft--;
  }, 1000);
}
 
// ===============================
// PROGRESSION
// ===============================
function updateProgressBar() {
  const progress = ((currentQuestion+1)/quizData.length)*100;
  document.getElementById("progress-bar").style.width = progress + "%";
}
 
// ===============================
// AFFICHER QUESTION
// ===============================
function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
 
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("btn");
 
    if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] === index) {
      btn.classList.add("selected");
    }
 
    btn.onclick = () => {
      Array.from(answersEl.children).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      userAnswers[currentQuestion] = index;
      localStorage.setItem("quiz_answers", JSON.stringify(userAnswers));
    };
 
    answersEl.appendChild(btn);
  });
 
  // navigation: précédent visible sauf première question
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
 
  // --- IMPORTANT : gérer l'affichage du bouton "Terminer le test" uniquement à la dernière question
  if (currentQuestion === quizData.length - 1) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    finishBtn.style.display = "none";
  }
 
  updateProgressBar();
}
 
// ===============================
// BOUTONS
// ===============================
nextBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestion] === null) {
    alert("Veuillez sélectionner une réponse avant de continuer.");
    return;
  }
 
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});
 
prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});
 
// finish button : ouvre la popup, mais vérifie d'abord qu'une réponse est sélectionnée sur la dernière question
finishBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestion] === null) {
    alert("Veuillez sélectionner une réponse pour la dernière question avant de terminer le test.");
    return;
  }
  popup.style.display = "flex";
});
 
// popup boutons
cancelBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
 
confirmBtn.addEventListener("click", () => {
  popup.style.display = "none";
  showResult();
});
 
// ===============================
// AFFICHER RESULTATS
// ===============================
function showResult() {
  clearInterval(timerInterval);
  finishBtn.style.display = "none";
  quizContainer.style.display = "none";
  resultEl.style.display = "block";
 
  score = 0;
  let html = `<h2>Résultat du quiz</h2>`;
  const seuil = 60;
 
  quizData.forEach((q,i) => {
    const userIndex = userAnswers[i];
    const selected = q.answers[userIndex];
    const correct = q.answers.find(a => a.correct);
 
    if (selected && selected.correct) score++;
 
    html += `
      <div class="result-block">
        <p><strong>${q.question}</strong></p>
        <p>Votre réponse : <span class="${selected && selected.correct ? "correct" : "incorrect"}">${selected ? selected.text : "Aucune réponse"}</span></p>
        <p>Bonne réponse : <strong>${correct ? correct.text : "—"}</strong></p>
        <p class="explanation">${correct ? correct.explanation : ""}</p>
      </div>
    `;
  });
 
  const pourcentage = (score/quizData.length)*100;
 
  const urlParams = new URLSearchParams(window.location.search);
  const matiere = urlParams.get('matiere') || "Chimie";
  const leconActuelle = urlParams.get('lecon') || "Structure atomique";
 
  if (pourcentage >= seuil) {
    localStorage.setItem("lecon_validee", leconActuelle);
 
    html += `<p>Bravo ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
 
    // Affichage automatique du bouton vers la leçon suivante
    const indexActuelle = leconsMatiere.indexOf(leconActuelle);
    const leconSuivante = leconsMatiere[indexActuelle + 1] || "Fin du cours";
    if (leconSuivante !== "Fin du cours") {
      const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;
      html += `<a href="${leconSuivanteUrl}" class="btn">Passer à la leçon suivante : ${leconSuivante}</a>`;
    }
  } else {
    html += `<p>Vous n'avez pas atteint le score minimum (${seuil}%). Réessayez la leçon <strong>${leconActuelle}</strong>.</p>`;
    html += `<a href="lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconActuelle)}" class="btn">Recommencer</a>`;
  }
 
  html += `<p>Score final : ${score}/${quizData.length} (${pourcentage.toFixed(2)}%)</p>`;
 
  resultEl.innerHTML = html;
}
 
// ===============================
// INITIALISATION
// ===============================
// Cacher le bouton terminer au chargement (sécurité si HTML ne contient pas d'attribut style)
finishBtn.style.display = "none";
 
showQuestion();
startTimer();
 