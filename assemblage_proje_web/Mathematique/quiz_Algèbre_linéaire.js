// ===============================
//   QUIZ : Algèbre linéaire
// ===============================
const quizData = [
  { question: "1. Une proposition est :", answers: [
      { text: "Une phrase toujours fausse", correct: false, explanation: "Faux, une proposition peut être vraie ou fausse." },
      { text: "Une phrase sans valeur de vérité", correct: false, explanation: "Faux, elle doit avoir une valeur de vérité." },
      { text: "Une phrase pouvant être vraie ou fausse", correct: true, explanation: "Exact, c’est la définition d’une proposition." },
      { text: "Une phrase mathématique non définie", correct: false, explanation: "Faux, elle doit être définie." }
  ]},
  { question: "2. La négation de 'Tous les étudiants réussissent' est :", answers: [
      { text: "Aucun étudiant ne réussit", correct: false, explanation: "Non, c’est trop fort." },
      { text: "Certains étudiants ne réussissent pas", correct: true, explanation: "Exact, c’est la négation logique." },
      { text: "Tous les étudiants échouent", correct: false, explanation: "Non, c’est différent." },
      { text: "Certains étudiants réussissent", correct: false, explanation: "Non, ce n’est pas la négation." }
  ]},/*
  { question: "3. Dans une implication P⇒Q, la contraposée est :", answers: [
      { text: "Q⇒P", correct: false, explanation: "Non, c’est l’inverse, pas la contraposée." },
      { text: "¬Q⇒¬P", correct: true, explanation: "Exact, c’est la contraposée." },
      { text: "P⇔Q", correct: false, explanation: "Non, c’est l’équivalence." },
      { text: "¬P⇒¬Q", correct: false, explanation: "Non, c’est l’inverse de la contraposée." }
  ]},
  { question: "4. L’équivalence logique de P⇒Q est :", answers: [
      { text: "P∨Q", correct: false, explanation: "Faux, c’est incorrect." },
      { text: "¬P∨Q", correct: true, explanation: "Exact, P⇒Q ≡ ¬P∨Q." },
      { text: "¬Q∨P", correct: false, explanation: "Non, c’est faux." },
      { text: "P∧Q", correct: false, explanation: "Non, ce n’est pas équivalent." }
  ]},
  { question: "5. L’ensemble vide est :", answers: [
      { text: "Un sous-ensemble de tout ensemble", correct: true, explanation: "Exact, l’ensemble vide est inclus dans tout ensemble." },
      { text: "Un ensemble infini", correct: false, explanation: "Faux, il n’a aucun élément." },
      { text: "L’ensemble {0}", correct: false, explanation: "Non, {0} contient un élément." },
      { text: "Une relation d’ordre", correct: false, explanation: "Faux, ce n’est pas une relation." }
  ]},
  { question: "6. Deux ensembles sont égaux si :", answers: [
      { text: "Ils ont la même cardinalité", correct: false, explanation: "Non, la cardinalité seule ne suffit pas." },
      { text: "Ils contiennent les mêmes éléments", correct: true, explanation: "Exact, c’est la définition de l’égalité d’ensembles." },
      { text: "Leurs intersections sont vides", correct: false, explanation: "Non, ce n’est pas l’égalité." },
      { text: "Ils sont disjoints", correct: false, explanation: "Non, ce n’est pas correct." }
  ]},
  { question: "7. L’intersection de deux ensembles A et B est :", answers: [
      { text: "L’ensemble des éléments de A seulement", correct: false, explanation: "Non, c’est l’intersection." },
      { text: "L’ensemble des éléments de B seulement", correct: false, explanation: "Non, c’est l’intersection." },
      { text: "L’ensemble des éléments communs à A et B", correct: true, explanation: "Exact, c’est la définition de l’intersection." },
      { text: "L’union de A et B", correct: false, explanation: "Non, c’est la réunion, pas l’intersection." }
  ]},
  { question: "8. Si A⊆B et B⊆C, alors :", answers: [
      { text: "A=C", correct: false, explanation: "Non, A est seulement inclus dans C." },
      { text: "A⊆C", correct: true, explanation: "Exact, la relation de sous-ensemble est transitive." },
      { text: "C⊆A", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "A∩C=∅", correct: false, explanation: "Non, c’est faux." }
  ]},
  { question: "9. Le produit cartésien A×B est :", answers: [
      { text: "L’union des deux ensembles", correct: false, explanation: "Non, ce n’est pas l’union." },
      { text: "L’ensemble des couples (a,b) avec a∈A, b∈B", correct: true, explanation: "Exact, c’est la définition du produit cartésien." },
      { text: "L’intersection des deux ensembles", correct: false, explanation: "Non, c’est faux." },
      { text: "Une fonction de A vers B", correct: false, explanation: "Non, ce n’est pas une fonction." }
  ]},*/
  { question: "10. Une fonction f:A→B est injective si :", answers: [
      { text: "Deux éléments différents de A ont des images différentes", correct: true, explanation: "Exact, c’est la définition d’une fonction injective." },
      { text: "Tous les éléments de A ont la même image", correct: false, explanation: "Non, c’est constant." },
      { text: "Chaque élément de B a une préimage", correct: false, explanation: "Non, c’est la surjectivité." },
      { text: "L’image de A est égale à B", correct: false, explanation: "Non, c’est surjective." }
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
  const leconActuelle = urlParams.get('lecon') || "Algèbre linéaire";
 
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
 