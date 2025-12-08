// ===============================
// QUIZ : Culture Générale
// ===============================
const quizData = [
  { question: "Qui est l’auteur du roman *Le Soleil des Indépendances* ?", answers: [
      { text: "Chinua Achebe", correct: false, explanation: "Non, Chinua Achebe est un auteur nigérian." },
      { text: "Amadou Kourouma", correct: true, explanation: "Exact, Amadou Kourouma est l'auteur du roman." },
      { text: "Mariama Bâ", correct: false, explanation: "Non, Mariama Bâ est une auteure sénégalaise." },
      { text: "Mongo Beti", correct: false, explanation: "Non, Mongo Beti est un auteur camerounais." }
  ]},
  { question: "Dans quel pays est né Amadou Kourouma ?", answers: [
      { text: "Côte d’Ivoire", correct: true, explanation: "Exact, il est né en Côte d’Ivoire." },
      { text: "Mali", correct: false, explanation: "Non, ce n’est pas le Mali." },
      { text: "Sénégal", correct: false, explanation: "Non, ce n’est pas le Sénégal." },
      { text: "Guinée", correct: false, explanation: "Non, ce n’est pas la Guinée." }
  ]},
  { question: "Quel est le personnage principal du roman ?", answers: [
      { text: "Fama Doumbouya", correct: true, explanation: "Exact, Fama Doumbouya est le protagoniste." },
      { text: "Birahima", correct: false, explanation: "Non, Birahima appartient à un autre roman." },
      { text: "Koyaga", correct: false, explanation: "Non, Koyaga est un personnage d’un autre livre." },
      { text: "Samba Diallo", correct: false, explanation: "Non, Samba Diallo vient d’un autre roman." }
  ]},
  { question: "Que symbolise le titre *Le Soleil des Indépendances* ?", answers: [
      { text: "La prospérité après la colonisation", correct: false, explanation: "Non, c’est plutôt une critique des désillusions post-indépendance." },
      { text: "Les illusions et désillusions de l’indépendance africaine", correct: true, explanation: "Exact, c’est le thème central du roman." },
      { text: "La gloire éternelle des chefs africains", correct: false, explanation: "Non, le roman critique ces élites." },
      { text: "La richesse des traditions africaines", correct: false, explanation: "Ce n’est pas ce que le titre symbolise." }
  ]},
  { question: "Quel ton domine le roman ?", answers: [
      { text: "Comique et léger", correct: false, explanation: "Non, le ton est critique et sérieux." },
      { text: "Sérieux et critique", correct: true, explanation: "Exact, le roman critique les nouvelles élites africaines." },
      { text: "Romantique et sentimental", correct: false, explanation: "Non, ce n’est pas un roman d’amour." },
      { text: "Historique et neutre", correct: false, explanation: "Non, le roman est engagé." }
  ]},
  { question: "Quelle est la particularité du style d’Amadou Kourouma ?", answers: [
      { text: "Il mélange le français et les structures africaines", correct: true, explanation: "Exact, il adapte le français à la culture africaine." },
      { text: "Il écrit uniquement en malinké", correct: false, explanation: "Non, il écrit en français." },
      { text: "Il imite le style occidental classique", correct: false, explanation: "Non, son style est unique et africain." },
      { text: "Il ne respecte pas la grammaire française", correct: false, explanation: "Faux, il la transforme mais la respecte." }
  ]},
  { question: "Quel thème n’est PAS abordé dans le roman ?", answers: [
      { text: "La corruption politique", correct: false, explanation: "Ce thème est bien présent." },
      { text: "La perte des valeurs traditionnelles", correct: false, explanation: "Oui, ce thème est central." },
      { text: "L’amour courtois médiéval", correct: true, explanation: "Exact, ce thème n’apparaît pas dans le roman." },
      { text: "Le choc entre modernité et tradition", correct: false, explanation: "Ce thème est bien abordé." }
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
  const leconActuelle = urlParams.get('lecon') || "Culture générale";
 
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
 
 