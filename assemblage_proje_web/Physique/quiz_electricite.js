// ===============================
//  QUIZ : Résistances et Circuits Électriques
// ===============================
const quizData = [
  {
    question: "1. La loi d’Ohm s’écrit :",
    answers: [
      { text: "I = R × U", correct: false, explanation: "Faux — c’est l’inverse de la loi d’Ohm." },
      { text: "U = R × I", correct: true, explanation: "Exact — la tension aux bornes d’un dipôle est proportionnelle à l’intensité du courant." },
      { text: "R = U + I", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R = I / U", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "2. L’unité de résistance est :",
    answers: [
      { text: "Ampère", correct: false, explanation: "Faux — l’ampère mesure le courant." },
      { text: "Coulomb", correct: false, explanation: "Faux — le coulomb mesure la charge électrique." },
      { text: "Ohm", correct: true, explanation: "Exact — l’ohm (Ω) est l’unité de résistance." },
      { text: "Volt", correct: false, explanation: "Faux — le volt mesure la tension." }
    ]
  },
  {
    question: "3. Quand deux résistances sont en série, leur résistance équivalente est :",
    answers: [
      { text: "R_eq = R1 + R2", correct: true, explanation: "Exact — les résistances en série s’additionnent." },
      { text: "R_eq = (R1 × R2) / (R1 + R2)", correct: false, explanation: "Faux — c’est la formule pour le parallèle." },
      { text: "R_eq = R1 - R2", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R_eq = 1 / (R1 + R2)", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "4. Quand deux résistances sont en parallèle, leur résistance équivalente est :",
    answers: [
      { text: "R_eq = R1 + R2", correct: false, explanation: "Faux — formule pour le série." },
      { text: "R_eq = (R1 × R2) / (R1 + R2)", correct: true, explanation: "Exact — la formule pour deux résistances en parallèle." },
      { text: "R_eq = R1 - R2", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R_eq = R1 × R2", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "5. Pour deux résistances en parallèle, la résistance équivalente est :",
    answers: [
      { text: "Plus grande que chacune des résistances", correct: false, explanation: "Faux — elle est toujours plus petite que la plus petite." },
      { text: "Égale à la moyenne des deux", correct: false, explanation: "Faux — ce n’est pas une moyenne." },
      { text: "Plus petite que la plus petite résistance", correct: true, explanation: "Exact — propriété des résistances en parallèle." },
      { text: "Égale à la somme", correct: false, explanation: "Faux — ce serait en série." }
    ]
  },
  {
    question: "6. Si R1 = 5 Ω et R2 = 10 Ω en série, alors R_eq = ?",
    answers: [
      { text: "2 Ω", correct: false },
      { text: "5 Ω", correct: false },
      { text: "10 Ω", correct: false },
      { text: "15 Ω", correct: true, explanation: "Exact — R_eq = R1 + R2 = 5 + 10 = 15 Ω." }
    ]
  },
  {
    question: "7. Si R1 = 5 Ω et R2 = 10 Ω en parallèle, alors R_eq = ?",
    answers: [
      { text: "3.33 Ω", correct: true, explanation: "Exact — R_eq = (R1 × R2)/(R1 + R2) = 50/15 = 3.33 Ω." },
      { text: "15 Ω", correct: false },
      { text: "5 Ω", correct: false },
      { text: "7.5 Ω", correct: false }
    ]
  },
  {
    question: "8. Dans un circuit série, le courant :",
    answers: [
      { text: "Est le même dans chaque résistance", correct: true },
      { text: "Se divise dans chaque résistance", correct: false },
      { text: "Est nul", correct: false },
      { text: "Double à chaque résistance", correct: false }
    ]
  },
  {
    question: "9. Dans un circuit parallèle, la tension :",
    answers: [
      { text: "Est identique sur chaque branche", correct: true },
      { text: "Se divise entre les branches", correct: false },
      { text: "Dépend du courant", correct: false },
      { text: "Est nulle sur la première résistance", correct: false }
    ]
  },
  {
    question: "10. La puissance dissipée par une résistance est donnée par :",
    answers: [
      { text: "P = U × I", correct: true, explanation: "Exact — les autres formes utiles : P = R I² = U² / R." },
      { text: "P = I / U", correct: false },
      { text: "P = R / U", correct: false },
      { text: "P = U / R", correct: false }
    ]
  },
  {
    question: "11. Si une résistance de 12 Ω est parcourue par un courant de 2 A, la tension à ses bornes est :",
    answers: [
      { text: "6 V", correct: false },
      { text: "12 V", correct: false },
      { text: "24 V", correct: true, explanation: "U = R × I = 12 × 2 = 24 V." },
      { text: "48 V", correct: false }
    ]
  },
  {
    question: "12. Dans un montage en série, si une résistance se coupe :",
    answers: [
      { text: "Le courant continue dans les autres", correct: false },
      { text: "Le courant s’arrête dans tout le circuit", correct: true },
      { text: "Le courant double", correct: false },
      { text: "Rien ne change", correct: false }
    ]
  },
  {
    question: "13. Pour trois résistances R1, R2, R3 en parallèle, on a :",
    answers: [
      { text: "R_eq = 1/(R1 + R2 + R3)", correct: false },
      { text: "1/R_eq = 1/R1 + 1/R2 + 1/R3", correct: true },
      { text: "R_eq = R1 + R2 + R3", correct: false },
      { text: "R_eq = R1 R2 R3 / (R1 + R2 + R3)", correct: false }
    ]
  },
  {
    question: "14. Une résistance équivalente de 0 Ω signifie :",
    answers: [
      { text: "Court-circuit", correct: true },
      { text: "Ouvert-circuit", correct: false },
      { text: "Résistance infinie", correct: false },
      { text: "Résistance moyenne", correct: false }
    ]
  },
  {
    question: "15. Dans un circuit mixte, on simplifie :",
    answers: [
      { text: "En additionnant toutes les résistances", correct: false },
      { text: "En réduisant d’abord les séries puis les parallèles", correct: true },
      { text: "En commençant par les plus grandes résistances", correct: false },
      { text: "Au hasard", correct: false }
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
const leconsMatiere = ["Mécanique", "Électricité",  "Optique"];
 
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
  const leconActuelle = urlParams.get('lecon') || "Électricité";
 
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