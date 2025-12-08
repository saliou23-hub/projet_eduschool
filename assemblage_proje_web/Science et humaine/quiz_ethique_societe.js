// ===============================
// QUIZ : Éthique et Société
// ===============================
const quizData = [
  { question: "L’éthique se définit principalement comme…", answers: [
      { text: "Une simple règle imposée", correct: false, explanation: "Non, l’éthique n’est pas imposée, elle est réflexive." },
      { text: "Une réflexion argumentée en vue du bien agir", correct: true, explanation: "Exact, l’éthique est une réflexion pour bien agir selon les valeurs." },
      { text: "Un code religieux uniquement", correct: false, explanation: "Faux, l’éthique n’est pas uniquement religieuse." },
      { text: "Une pratique obligatoire sans questionnement", correct: false, explanation: "Non, l’éthique demande réflexion personnelle." }
  ]},
  { question: "Le mot 'morale' vient du latin…", answers: [
      { text: "Moralitas", correct: false, explanation: "Non, c’est une racine différente." },
      { text: "Ethica", correct: false, explanation: "Faux, Ethica est grec." },
      { text: "Mores", correct: true, explanation: "Exact, 'mores' signifie mœurs, habitudes, comportements." },
      { text: "Legis", correct: false, explanation: "Non, legis signifie loi." }
  ]},
  { question: "La déontologie concerne surtout…", answers: [
      { text: "Les choix personnels sans cadre", correct: false, explanation: "Non, c’est réglementé." },
      { text: "Les devoirs et obligations propres à une profession", correct: true, explanation: "Exact, c’est un ensemble de règles pour la profession." },
      { text: "Les lois de l’État uniquement", correct: false, explanation: "Faux, c’est spécifique à la profession." },
      { text: "La philosophie morale générale", correct: false, explanation: "Non, la déontologie est appliquée à un métier." }
  ]},
  { question: "L’éthique professionnelle vise à…", answers: [
      { text: "Suivre aveuglément des règles", correct: false, explanation: "Non, elle demande réflexion." },
      { text: "Être rentable", correct: false, explanation: "Non, c’est secondaire." },
      { text: "Guider le comportement moral dans le cadre du travail", correct: true, explanation: "Exact, pour agir avec intégrité et responsabilité." },
      { text: "Respecter uniquement la loi", correct: false, explanation: "Non, elle dépasse la loi." }
  ]},
  { question: "Le manque de solidarité est…", answers: [
      { text: "Un choix personnel", correct: false, explanation: "Non, c’est un manquement moral." },
      { text: "Un manquement à l’éthique", correct: true, explanation: "Exact, il va à l’encontre des valeurs de coopération." },
      { text: "Indifférent", correct: false, explanation: "Faux, c’est contraire à l’éthique." },
      { text: "Encouragé dans le milieu professionnel", correct: false, explanation: "Non, c’est à éviter." }
  ]},
  { question: "La principale différence entre éthique et déontologie est…", answers: [
      { text: "L’éthique est prescriptive, la déontologie réflexive", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "Il n’y a pas de différence", correct: false, explanation: "Faux, elles sont complémentaires mais distinctes." },
      { text: "L’éthique est réflexive et la déontologie prescriptive", correct: true, explanation: "Exact, l’éthique demande réflexion, la déontologie impose des règles." },
      { text: "Les deux concernent seulement la loi", correct: false, explanation: "Non, elles vont au-delà de la loi." }
  ]},
  { question: "Le code de déontologie a pour rôle de…", answers: [
      { text: "Imposer des sanctions civiles", correct: false, explanation: "Non, ce n’est pas son rôle principal." },
      { text: "Définir les devoirs d’une profession", correct: true, explanation: "Exact, il encadre la conduite des membres." },
      { text: "Remplacer la morale", correct: false, explanation: "Faux, il complète la morale." },
      { text: "Donner des conseils personnels", correct: false, explanation: "Non, ce n’est pas le but." }
  ]}
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
 
 
// Leçons
const leconsMatiere = ["Éthique et société","Culture générale", "Communication"];
 
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
  const matiere = urlParams.get('matiere') || "Sciences Humaines";
  const leconActuelle = urlParams.get('lecon') || "Éthique et société";
 
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
 
 