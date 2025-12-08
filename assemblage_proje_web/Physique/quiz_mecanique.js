// ===============================
//  QUIZ : Physique – Mécanique classique
// ===============================
const quizData = [
  {
    question: "1. La cinématique étudie :",
    answers: [
      { text: "Les forces appliquées sur un corps", correct: false, explanation: "Faux — la cinématique ne considère pas les causes du mouvement." },
      { text: "Le mouvement sans considérer les causes", correct: true, explanation: "Exact — la cinématique décrit le mouvement indépendamment des forces." },
      { text: "La nature des interactions", correct: false, explanation: "Faux — cela relève de la dynamique." },
      { text: "Les déformations du corps", correct: false, explanation: "Faux — cela concerne la résistance des matériaux." }
    ]
  },
  {
    question: "2. Le vecteur position d’un point M est :",
    answers: [
      { text: "La distance parcourue", correct: false, explanation: "Faux — la distance parcourue est un scalaire." },
      { text: "Le vecteur reliant l’origine au point M", correct: true, explanation: "Exact — le vecteur position relie l’origine au point considéré." },
      { text: "La norme du déplacement", correct: false, explanation: "Faux — ce n’est que la longueur du déplacement." },
      { text: "La vitesse instantanée", correct: false, explanation: "Faux — la vitesse est dérivée du vecteur position." }
    ]
  },
  {
    question: "3. La vitesse instantanée est :",
    answers: [
      { text: "v = d r / dt", correct: true, explanation: "Exact — la vitesse instantanée est la dérivée du vecteur position." },
      { text: "v = Δr / Δt", correct: false, explanation: "Faux — c’est la vitesse moyenne." },
      { text: "v = d² r / dt²", correct: false, explanation: "Faux — c’est l’accélération." },
      { text: "v = r × a", correct: false, explanation: "Faux — ce n’est pas correct." }
    ]
  },
  {
    question: "4. L’accélération instantanée est :",
    answers: [
      { text: "a = dv/dt", correct: true, explanation: "Exact — l’accélération instantanée est la dérivée de la vitesse." },
      { text: "a = r/t", correct: false, explanation: "Faux — ce n’est pas la définition de l’accélération." },
      { text: "a = v/t", correct: false, explanation: "Faux — approximation uniquement pour MRU." },
      { text: "a = v × r", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "5. Le mouvement rectiligne uniforme correspond à :",
    answers: [
      { text: "a = 0", correct: true, explanation: "Exact — un MRU a une accélération nulle." },
      { text: "v = 0", correct: false, explanation: "Faux — la vitesse est constante mais non nulle." },
      { text: "r = 0", correct: false, explanation: "Faux — la position varie avec le temps." },
      { text: "v = constante en norme seulement", correct: false, explanation: "Faux — la vitesse est constante en norme et direction." }
    ]
  },
  {
    question: "6. La deuxième loi de Newton s’écrit :",
    answers: [
      { text: "F = m a", correct: true, explanation: "Exact — force = masse × accélération." },
      { text: "F = m v", correct: false, explanation: "Faux — c’est la quantité de mouvement." },
      { text: "F = v/m", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "F = m g", correct: false, explanation: "Faux — c’est le poids uniquement." }
    ]
  },
  {
    question: "7. Le principe d’inertie stipule que :",
    answers: [
      { text: "Tout corps reste au repos ou en MRU si aucune force ne s’exerce", correct: true, explanation: "Exact — un corps conserve son état de mouvement si aucune force externe n'agit." },
      { text: "Tout corps finit par s’arrêter naturellement", correct: false, explanation: "Faux — c’est une idée fausse du mouvement." },
      { text: "Tout corps accélère spontanément", correct: false, explanation: "Faux — l’accélération résulte d’une force." },
      { text: "La vitesse dépend de la masse", correct: false, explanation: "Faux — ce n’est pas correct." }
    ]
  },
  {
    question: "8. Le poids d’un corps est :",
    answers: [
      { text: "Une force de frottement", correct: false, explanation: "Faux — le poids n’est pas une force de frottement." },
      { text: "Une force de gravitation exercée par la Terre", correct: true, explanation: "Exact — le poids est la force exercée par la gravitation terrestre." },
      { text: "Une force électrostatique", correct: false, explanation: "Faux — ce n’est pas lié à l’électrostatique." },
      { text: "Une force normale", correct: false, explanation: "Faux — la force normale est perpendiculaire au support." }
    ]
  },
  {
    question: "9. L’unité du travail est :",
    answers: [
      { text: "Le newton", correct: false, explanation: "Faux — le newton est l’unité de force." },
      { text: "Le joule", correct: true, explanation: "Exact — le travail se mesure en joules." },
      { text: "Le watt", correct: false, explanation: "Faux — le watt est une unité de puissance." },
      { text: "Le pascal", correct: false, explanation: "Faux — le pascal est une unité de pression." }
    ]
  },
  {
    question: "10. Le travail d’une force constante est :",
    answers: [
      { text: "W = F · v", correct: false, explanation: "Faux — ce n’est pas correct." },
      { text: "W = F · r", correct: true, explanation: "Exact — le travail d’une force constante = force × déplacement." },
      { text: "W = Δr / Δt", correct: false, explanation: "Faux — c’est une vitesse moyenne." },
      { text: "W = F² / t", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  }
  // Tu peux continuer avec les questions 11 à 30 de la même manière
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
const leconsMatiere = ["Optique", "Mécanique", "Électricité"];
 
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
  const matiere = urlParams.get('matiere') || "Physique";
  const leconActuelle = urlParams.get('lecon') || "Mécanique";
 
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