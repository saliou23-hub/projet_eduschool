// ===============================
//  QUIZ : Bases de données et SGBD
// ===============================
// ===============================
//  QUIZ : Bases de données et SGBD
// ===============================
const quizData = [
  {
    question: "1. Que signifie SGBD ?",
    answers: [
      { text: "Système de Gestion des Bases de Données", correct: true, explanation: "Exact — le SGBD permet de créer, gérer et exploiter les bases de données." },
      { text: "Système Général de Base de Données", correct: false, explanation: "Faux — ce n’est pas la définition correcte." },
      { text: "Service de Gestion Bancaire et de Données", correct: false, explanation: "Faux — confusion avec d’autres systèmes." },
      { text: "Système Global de Données Binaires", correct: false, explanation: "Faux — ce n’est pas un SGBD." }
    ]
  },
  {
    question: "2. Quelle est la différence entre une base de données et un SGBD ?",
    answers: [
      { text: "Il n’y a aucune différence", correct: false, explanation: "Faux — la base contient les données, le SGBD les manipule." },
      { text: "Le SGBD est l’outil logiciel qui gère les bases de données", correct: true, explanation: "Exact — la base contient les données, le SGBD les manipule." },
      { text: "La base de données est un programme exécuté par le SGBD", correct: false, explanation: "Faux — la base contient les données, ce n’est pas un programme." },
      { text: "Le SGBD contient uniquement les programmes utilisateurs", correct: false, explanation: "Faux — le SGBD contient le logiciel de gestion et contrôle des bases." }
    ]
  },
  {
    question: "3. Le langage LDD (ou DDL en anglais) sert à :",
    answers: [
      { text: "Manipuler les données", correct: false, explanation: "Faux — c’est le rôle du DML." },
      { text: "Définir la structure de la base", correct: true, explanation: "Exact — le DDL sert à créer, modifier ou supprimer les objets de la base." },
      { text: "Supprimer les utilisateurs", correct: false, explanation: "Faux — ce n’est pas la fonction principale du DDL." },
      { text: "Lancer des requêtes réseau", correct: false, explanation: "Faux — le DDL n’a pas de rôle réseau." }
    ]
  },
  {
    question: "20. Le modèle ACID d’un SGBD regroupe :",
    answers: [
      { text: "Administration, Confidentialité, Intégrité, Disponibilité", correct: false, explanation: "Faux — ce sont des concepts de sécurité, pas ACID." },
      { text: "Atomicité, Cohérence, Isolation, Durabilité", correct: true, explanation: "Exact — ACID définit ces quatre propriétés pour les transactions." },
      { text: "Architecture, Concurrence, Indexation, Distribution", correct: false, explanation: "Faux — ce n’est pas ACID." },
      { text: "Aucun des choix", correct: false, explanation: "Faux — la bonne réponse est ACID." }
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
const leconsMatiere = ["Programmation", "Bases de données",  "Réseaux"];
 
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
  const matiere = urlParams.get('matiere') || "Informatique";
  const leconActuelle = urlParams.get('lecon') || "Bases de données";
 
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
 