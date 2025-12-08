// ===============================
// QUIZ DATA
// ===============================
const quizData = [
  { question: "Selon le cours, la communication est-elle :", answers:[
      { text: "Un processus à sens unique qui informe seulement", correct: false, explanation: "L'information peut être à sens unique, mais la communication suppose échange et rétroaction." },
      { text: "Un processus réciproque qui inclut écoute et feedback", correct: true, explanation: "Exact — la communication implique échange, écoute et rétroaction pour être efficace." },
      { text: "Toujours écrite et formelle", correct: false, explanation: "Non — la communication peut être orale, non-verbale, écrite ou publique." },
      { text: "Un phénomène exclusivement technique", correct: false, explanation: "La technique aide mais communiquer est une compétence humaine, pas seulement technique." }
  ]},
  { question: "Quel élément n'est PAS un 'bruit' ou parasite selon le cours ?", answers:[
      { text: "Un klaxon (bruit physique)", correct: false, explanation: "C'est un exemple de bruit physique." },
      { text: "Un préjugé (bruit psychologique)", correct: false, explanation: "C'est un bruit psychologique important." },
      { text: "Une traduction claire et partagée", correct: true, explanation: "C'est l'inverse : un code partagé favorise la communication, pas un bruit." },
      { text: "Un jargon inapproprié (bruit sémantique)", correct: false, explanation: "C'est un bruit sémantique qui gêne la compréhension." }
  ]},
  { question: "Le 'champ d'expérience' désigne :", answers:[
      { text: "Les références et expériences partagées entre émetteur et récepteur", correct: true, explanation: "Oui — plus le champ d'expérience est commun, plus la communication est efficace." },
      { text: "Un type de canal de diffusion (radio, TV)", correct: false, explanation: "Non — le canal est la voie de transmission, pas le champ d'expérience." },
      { text: "La longueur du message", correct: false, explanation: "Non — ceci ne définit pas le champ d'expérience." },
      { text: "La durée d'une prise de parole", correct: false, explanation: "Non — il s'agit d'autre chose." }
  ]},
  { question: "Parmi les canaux suivants, lequel offre interaction verbale et non-verbale ?", answers:[
      { text: "Rencontre personnelle", correct: true, explanation: "Oui — elle permet interaction verbale et indices non verbaux (gestes, regard)." },
      { text: "Téléphone", correct: false, explanation: "Téléphone : interaction verbale mais peu de visuel/non-verbal." },
      { text: "SMS", correct: false, explanation: "SMS : très limité en indices non-verbaux." },
      { text: "Diffusion TV sans interaction", correct: false, explanation: "TV de masse n'offre pas d'interaction directe." }
  ]},
  { question: "Quelle affirmation reflète l'idée des 'rôles embrouillés' ?", answers:[
      { text: "L'émetteur et le récepteur parlent en même temps, provoquant échec", correct: true, explanation: "Exact — transmission et réception simultanées mènent souvent à l'échec." },
      { text: "Le message est parfaitement reçu", correct: false, explanation: "Non, ce n'est pas l'idée." },
      { text: "Le canal est inapproprié pour le message", correct: false, explanation: "Ceci concerne le choix du canal, pas les rôles embrouillés." },
      { text: "La rétroaction est toujours positive", correct: false, explanation: "La rétroaction peut être neutre, positive ou négative." }
  ]},
  { question: "L'écoute active consiste principalement à :", answers:[
      { text: "Interrompre souvent pour corriger l'autre", correct: false, explanation: "Non — l'écoute active évite l'interruption et favorise reformulation." },
      { text: "Écouter sans jugement et reformuler pour clarifier", correct: true, explanation: "Oui — l'écoute active implique attention, reformulation et empathie." },
      { text: "Parler plus fort que l'interlocuteur", correct: false, explanation: "Non — cela n'aide pas la compréhension." },
      { text: "Se concentrer uniquement sur les mots et ignorer le non-verbal", correct: false, explanation: "Au contraire, l'écoute active prend en compte le non-verbal." }
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
const leconsMatiere = ["Communication","Éthique et société","Culture générale"];
 
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
  const leconActuelle = urlParams.get('lecon') || "Communication";
 
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
 
 