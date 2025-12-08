// ===============================
//   QUIZ : Statistiques
// ===============================
const quizData = [
  { question: "1. La statistique descriptive a pour but :", answers: [
      { text: "D’expliquer les causes d’un phénomène", correct: false, explanation: "Faux, elle ne cherche pas à expliquer mais à résumer." },
      { text: "De résumer et représenter les données observées", correct: true, explanation: "Exact, c’est l’objectif de la statistique descriptive." },
      { text: "De prouver une hypothèse scientifique", correct: false, explanation: "Faux, cela relève de l’inférence statistique." },
      { text: "De prédire l’avenir", correct: false, explanation: "Faux, ce n’est pas le rôle de la statistique descriptive." }
  ]},
  { question: "2. Une population statistique est :", answers: [
      { text: "Une partie d’un ensemble", correct: false, explanation: "Non, c’est un sous-ensemble possible, mais pas la définition." },
      { text: "L’ensemble des individus ou éléments étudiés", correct: true, explanation: "Exact, c’est la définition d’une population." },
      { text: "Un seul individu observé", correct: false, explanation: "Non, un seul individu est un élément de la population." },
      { text: "Une moyenne d’échantillon", correct: false, explanation: "Faux, c’est une mesure, pas une population." }
  ]},/*
  { question: "3. Une variable quantitative :", answers: [
      { text: "Décrit une qualité ou une catégorie", correct: false, explanation: "Non, ça correspond à une variable qualitative." },
      { text: "Est toujours numérique et mesurable", correct: true, explanation: "Exact, une variable quantitative prend des valeurs numériques." },
      { text: "Prend des valeurs non ordonnées", correct: false, explanation: "Faux, cela décrit plutôt une variable qualitative nominale." },
      { text: "Ne peut pas être mesurée", correct: false, explanation: "Faux, elle est justement mesurable." }
  ]},
  { question: "4. Une variable qualitative ordinale est :", answers: [
      { text: "Une variable sans ordre", correct: false, explanation: "Non, c’est une variable nominale." },
      { text: "Une variable avec un ordre logique", correct: true, explanation: "Exact, elle comporte un ordre entre les modalités." },
      { text: "Une variable numérique", correct: false, explanation: "Faux, elle reste qualitative." },
      { text: "Une variable continue", correct: false, explanation: "Non, c’est une variable quantitative." }
  ]},
  { question: "5. La fréquence d’une modalité est :", answers: [
      { text: "Le rapport entre l’effectif de la modalité et l’effectif total", correct: true, explanation: "Exact, la fréquence est une proportion." },
      { text: "Le nombre d’individus observés", correct: false, explanation: "Non, ça correspond à l’effectif." },
      { text: "La somme des valeurs", correct: false, explanation: "Non, c’est utilisé pour la moyenne." },
      { text: "Le produit des effectifs", correct: false, explanation: "Non, cela n’a pas de sens ici." }
  ]},
  { question: "6. Si on double tous les effectifs, la moyenne :", answers: [
      { text: "Est doublée", correct: false, explanation: "Non, la moyenne reste la même." },
      { text: "Est divisée par deux", correct: false, explanation: "Non, la moyenne ne change pas." },
      { text: "Ne change pas", correct: true, explanation: "Exact, la moyenne ne dépend pas du nombre d’observations si les valeurs restent identiques." },
      { text: "Devient nulle", correct: false, explanation: "Non, ce n’est pas le cas." }
  ]},
  { question: "7. La moyenne arithmétique pondérée se calcule par :", answers: [
      { text: "x̄ = Σxi / n", correct: false, explanation: "Non, c’est la moyenne simple." },
      { text: "x̄ = Σ(ni xi) / Σni", correct: true, explanation: "Exact, c’est la moyenne pondérée." },
      { text: "x̄ = Σ(xi - x̄)²", correct: false, explanation: "Faux, cela correspond à la variance." },
      { text: "x̄ = n / Σxi", correct: false, explanation: "Non, ce n’est pas correct." }
  ]},
  { question: "8. La médiane est :", answers: [
      { text: "La valeur la plus fréquente", correct: false, explanation: "Non, c’est le mode." },
      { text: "La moyenne de toutes les valeurs", correct: false, explanation: "Non, c’est la moyenne arithmétique." },
      { text: "La valeur centrale d’une série ordonnée", correct: true, explanation: "Exact, c’est la définition de la médiane." },
      { text: "La somme des valeurs", correct: false, explanation: "Faux, c’est la somme brute." }
  ]},
  { question: "9. Le mode est :", answers: [
      { text: "La valeur la plus fréquente", correct: true, explanation: "Exact, c’est la définition du mode." },
      { text: "La plus grande valeur", correct: false, explanation: "Non, c’est le maximum." },
      { text: "La valeur moyenne", correct: false, explanation: "Non, c’est la moyenne." },
      { text: "La valeur centrale", correct: false, explanation: "Non, c’est la médiane." }
  ]},*/
  { question: "10. L’étendue est :", answers: [
      { text: "La somme des valeurs", correct: false, explanation: "Non, c’est faux." },
      { text: "La différence entre la plus grande et la plus petite valeur", correct: true, explanation: "Exact, c’est la définition de l’étendue." },
      { text: "La moyenne des écarts", correct: false, explanation: "Non, ce serait une autre mesure de dispersion." },
      { text: "L’écart-type au carré", correct: false, explanation: "Faux, c’est la variance." }
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
 
 
// Liste des leçons
const leconsMatiere = [ "Statistiques","Algèbre linéaire", "Analyse 1"];
 
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
  const leconActuelle = urlParams.get('lecon') || "Statistiques";
 
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
 