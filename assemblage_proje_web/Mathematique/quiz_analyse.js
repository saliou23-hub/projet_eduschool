// ===============================
// QUIZ : Analyse 1
// ===============================
const quizData = [
  // Partie A – Théorie des nombres réels et axiomes
  {
    question: "L'ensemble E = {0,1} avec les opérations définies satisfait-il tous les axiomes A1 à A9 ?",
    answers: [
      { text: "Oui, tous les axiomes sont satisfaits", correct: false, explanation: "Non, A8 échoue." },
      { text: "Non, A8 échoue", correct: true, explanation: "Exact, l’axiome A8 n’est pas satisfait." },
      { text: "Non, A1 échoue", correct: false, explanation: "Faux, A1 est respecté." },
      { text: "Oui sauf A10", correct: false, explanation: "A10 n’est pas applicable ici." }
    ]
  },
  {
    question: "Peut-on définir une relation d’ordre > sur E qui respecte A10 à A13 ?",
    answers: [
      { text: "Oui", correct: false, explanation: "Non, il est impossible de respecter A10 à A13 sur cet ensemble." },
      { text: "Non", correct: true, explanation: "Exact, aucune relation d’ordre complète n’est possible." },
      { text: "Seulement pour 0", correct: false, explanation: "Faux, cela ne suffit pas." },
      { text: "Seulement pour 1", correct: false, explanation: "Faux, cela ne suffit pas." }
    ]
  },/*
  {
    question: "Si a > b > 0, alors quel est le rapport des inverses ?",
    answers: [
      { text: "1/b > 1/a", correct: true, explanation: "Exact, l’inverse inverse l’ordre." },
      { text: "1/b < 1/a", correct: false, explanation: "Non, l’ordre est inversé." },
      { text: "1/a = 1/b", correct: false, explanation: "Faux, a ≠ b." },
      { text: "Impossible à dire", correct: false, explanation: "Faux, c’est déterminé." }
    ]
  },
  {
    question: "L’hypothèse b > 0 est-elle nécessaire pour l’inverse ?",
    answers: [
      { text: "Oui", correct: true, explanation: "Exact, on ne peut pas diviser par zéro." },
      { text: "Non", correct: false, explanation: "Faux, b > 0 est nécessaire." },
      { text: "Parfois", correct: false, explanation: "Non, c’est toujours nécessaire." },
      { text: "Seulement si a > 0", correct: false, explanation: "Non, cela dépend de b uniquement." }
    ]
  },*/
  {
    question: "Pour E = {n/(n+1) | n ∈ N}, est-il borné ?",
    answers: [
      { text: "Oui", correct: true, explanation: "Exact, E est borné entre 0 et 1." },
      { text: "Non", correct: false, explanation: "Faux, il est borné." },
      { text: "Seulement inférieurement", correct: false, explanation: "Faux, il est borné des deux côtés." },
      { text: "Seulement supérieurement", correct: false, explanation: "Faux, il est borné des deux côtés." }
    ]
  }
  // Tu peux continuer à ajouter toutes les autres questions comme ci-dessus...
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
const leconsMatiere = ["Algèbre linéaire", "Analyse 1", "Statistiques"];
 
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
  const matiere = urlParams.get('matiere') || "Mathématiques";
  const leconActuelle = urlParams.get('lecon') || "Analyse 1";
 
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
 