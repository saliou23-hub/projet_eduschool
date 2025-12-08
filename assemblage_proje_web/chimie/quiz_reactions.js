// ===============================
//  QUIZ : Réaction Chimique (Chimie)
// ===============================
const quizData = [
  {
    question: "1. Lors d’une réaction chimique, les atomes :",
    answers: [
      { text: "Disparaissent complètement", correct: false, explanation: "Faux — les atomes sont conservés selon Lavoisier." },
      { text: "Sont créés ou détruits", correct: false, explanation: "Faux — il y a conservation des atomes." },
      { text: "Sont réarrangés en de nouvelles combinaisons", correct: true, explanation: "Exact — ils se réorganisent pour former les produits." },
      { text: "Perdent leur charge", correct: false, explanation: "Faux — la charge totale est conservée." }
    ]
  },
  {
    question: "2. La loi de Lavoisier affirme que :",
    answers: [
      { text: "La masse se crée pendant la réaction", correct: false, explanation: "Faux — elle est conservée." },
      { text: "La masse totale des réactifs = masse totale des produits", correct: true, explanation: "Exact — c'est la loi de conservation de la masse." },
      { text: "La masse des produits est toujours supérieure", correct: false, explanation: "Faux." },
      { text: "Les masses varient selon l’énergie", correct: false, explanation: "Faux dans le cadre chimique." }
    ]
  },/*
  {
    question: "3. Les coefficients stœchiométriques représentent :",
    answers: [
      { text: "Le nombre d’atomes dans une molécule", correct: false, explanation: "Faux — cela concerne la formule chimique." },
      { text: "Le nombre de moles nécessaires pour équilibrer la réaction", correct: true, explanation: "Exact — ils permettent de respecter les lois de conservation." },
      { text: "Le volume gazeux", correct: false, explanation: "Faux." },
      { text: "La masse des réactifs", correct: false, explanation: "Faux." }
    ]
  },
  {
    question: "4. Une réaction totale signifie que :",
    answers: [
      { text: "Les réactifs disparaissent complètement", correct: true, explanation: "Exact — ils réagissent entièrement si proportions stœchiométriques." },
      { text: "Aucun produit n'est formé", correct: false, explanation: "Faux — une réaction totale produit tout le produit prévu." },
      { text: "La réaction est réversible", correct: false, explanation: "Faux — une réaction totale est irréversible." },
      { text: "Il y a équilibre", correct: false, explanation: "Faux — l’équilibre concerne les réactions inversibles." }
    ]
  },
  {
    question: "5. Une réaction réversible atteint :",
    answers: [
      { text: "Un point où les réactifs disparaissent totalement", correct: false, explanation: "Faux — ils subsistent toujours." },
      { text: "Un état où les vitesses directe et inverse s’égalisent", correct: true, explanation: "Exact — c’est l’équilibre chimique." },
      { text: "Un état où seuls les produits disparaissent", correct: false, explanation: "Faux." },
      { text: "Un état où la réaction s’arrête définitivement", correct: false, explanation: "Faux — les deux sens continuent." }
    ]
  },
  {
    question: "6. Le réactif limitant est :",
    answers: [
      { text: "Celui présent en plus grande quantité", correct: false, explanation: "Faux — c’est le réactif en excès." },
      { text: "Celui qui disparaît en premier", correct: true, explanation: "Exact — il limite la quantité de produit formé." },
      { text: "Toujours celui le plus léger", correct: false, explanation: "Faux — aucune relation avec la masse atomique." },
      { text: "Celui qui ne réagit pas", correct: false, explanation: "Faux — tous réagissent, mais un peut rester en excès." }
    ]
  },
  {
    question: "7. La constante d’équilibre K dépend de :",
    answers: [
      { text: "La température", correct: true, explanation: "Exact — K varie uniquement avec T." },
      { text: "La pression extérieure", correct: false, explanation: "Faux — sauf cas particuliers." },
      { text: "La forme du récipient", correct: false, explanation: "Faux." },
      { text: "La quantité initiale de réactifs", correct: false, explanation: "Faux — K est indépendante des quantités." }
    ]
  },
  {
    question: "8. Une valeur de K très grande (K >> 1) indique :",
    answers: [
      { text: "Une réaction très peu avancée", correct: false, explanation: "Faux — c’est l’inverse." },
      { text: "Une réaction quasi totale dans le sens direct", correct: true, explanation: "Exact — les produits dominent." },
      { text: "Un équilibre instable", correct: false, explanation: "Faux — cela ne définit pas la stabilité." },
      { text: "Aucun lien avec la direction de la réaction", correct: false, explanation: "Faux." }
    ]
  },
  {
    question: "9. L’activité d’un solide pur dans une réaction est :",
    answers: [
      { text: "Égale à sa masse", correct: false, explanation: "Faux." },
      { text: "Toujours égale à 1", correct: true, explanation: "Exact — activité d’un solide pur = 1." },
      { text: "Toujours égale à sa concentration", correct: false, explanation: "Faux — un solide n’a pas de concentration." },
      { text: "Dépendante du volume du récipient", correct: false, explanation: "Faux." }
    ]
  },
  {
    question: "10. Dans une solution aqueuse, l’activité d’un soluté est approximée par :",
    answers: [
      { text: "Sa masse molaire", correct: false, explanation: "Faux." },
      { text: "Sa concentration [ ]", correct: true, explanation: "Exact — approximation utilisée en chimie des solutions." },
      { text: "Le volume de la solution", correct: false, explanation: "Faux." },
      { text: "Son état physique", correct: false, explanation: "Faux." }
    ]
  },
  {
    question: "11. La règle de trois est utilisée en chimie pour :",
    answers: [
      { text: "Équilibrer automatiquement une réaction", correct: false, explanation: "Faux — on utilise la conservation des atomes." },
      { text: "Déterminer les quantités de produits formés", correct: true, explanation: "Exact — via les coefficients stœchiométriques." },
      { text: "Calculer l’énergie libérée", correct: false, explanation: "Faux." },
      { text: "Déterminer la charge électrique", correct: false, explanation: "Faux." }
    ]
  },
  {
    question: "12. Le degré d’avancement ξ permet :",
    answers: [
      { text: "De créer plus d’atomes", correct: false, explanation: "Faux — les atomes sont conservés." },
      { text: "De suivre l’évolution des quantités de matière", correct: true, explanation: "Exact — c’est sa définition." },
      { text: "D’accélérer la réaction", correct: false, explanation: "Faux — ce n’est pas un paramètre cinétique." },
      { text: "De changer la valeur de K", correct: false, explanation: "Faux — K dépend uniquement de la température." }
    ]
  },
  {
    question: "13. À l’équilibre, la valeur de K est :",
    answers: [
      { text: "Toujours égale à 1", correct: false, explanation: "Faux — elle dépend de la réaction." },
      { text: "Constante pour une même température", correct: true, explanation: "Exact — K est fixe à T donnée." },
      { text: "Variable selon la concentration", correct: false, explanation: "Faux." },
      { text: "Toujours très grande", correct: false, explanation: "Faux — K peut être petite, grande ou ≈1." }
    ]
  },
  {
    question: "14. Une grande valeur de pK (pK > 5) signifie :",
    answers: [
      { text: "La réaction est pratiquement totale", correct: false, explanation: "Faux — c’est quand pK < –5." },
      { text: "La réaction est très peu avancée", correct: true, explanation: "Exact — K est très petit." },
      { text: "La réaction est rapide", correct: false, explanation: "Faux — pK n’indique pas la vitesse." },
      { text: "Les produits dominent fortement", correct: false, explanation: "Faux — ce serait si pK << 0." }
    ]
  },*/
  {
    question: "15. Le réactif en excès est :",
    answers: [
      { text: "Celui qui reste après réaction", correct: true, explanation: "Exact — puisqu’il est introduit en quantité supérieure." },
      { text: "Celui qui disparaît en premier", correct: false, explanation: "Faux — réactif limitant." },
      { text: "Celui avec la plus grande masse molaire", correct: false, explanation: "Faux." },
      { text: "Celui qui ne participe pas à la réaction", correct: false, explanation: "Faux — un réactif participe toujours à la réaction." }
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
const leconsMatiere = ["Réactions","Structure Atomique"];
 
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
  const leconActuelle = urlParams.get('lecon') || "Réactions";
 
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
 
