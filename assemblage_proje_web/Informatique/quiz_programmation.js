// ===============================
//  QUIZ : Programmation Python
// ===============================
const quizData = [
  {
    question: "1. En Python, qu’est-ce qu’une variable ?",
    answers: [
      { text: "Une constante dont la valeur ne change pas", correct: false, explanation: "Faux — une variable peut changer de valeur." },
      { text: "Un identificateur associé à une valeur en mémoire", correct: true, explanation: "Exact — une variable associe un nom à une donnée stockée." },
      { text: "Un type de boucle", correct: false, explanation: "Non — une boucle sert à répéter des instructions." },
      { text: "Un mot réservé du langage", correct: false, explanation: "Les mots réservés sont des instructions comme 'if', 'for'..." }
    ]
  },
  {
    question: "2. Quelle est la bonne syntaxe pour affecter une valeur à une variable ?",
    answers: [
      { text: "3 = x", correct: false, explanation: "Non — le côté gauche doit être une variable, pas une valeur." },
      { text: "let x = 3", correct: false, explanation: "Syntaxe de JavaScript, pas de Python." },
      { text: "x := 3", correct: false, explanation: "C’est l’opérateur walrus, mais ici on veut une simple affectation." },
      { text: "x = 3", correct: true, explanation: "Oui — en Python, l’affectation se fait avec ‘=’." }
    ]
  },/*
  {
    question: "3. Parmi ces noms, lequel est un identificateur valide ?",
    answers: [
      { text: "2variable", correct: false, explanation: "Faux — un identificateur ne peut pas commencer par un chiffre." },
      { text: "_varNom", correct: true, explanation: "Exact — underscore initial est autorisé." },
      { text: "for", correct: false, explanation: "Non — 'for' est un mot-clé réservé." },
      { text: "var-nom", correct: false, explanation: "Faux — le tiret ‘-’ n’est pas autorisé dans les identificateurs." }
    ]
  },
  {
    question: "4. Le typage en Python est :",
    answers: [
      { text: "Statique et explicite", correct: false },
      { text: "Statique et implicite", correct: false },
      { text: "Dynamique et explicite", correct: false },
      { text: "Dynamique et implicite", correct: true, explanation: "Oui — le type est déterminé automatiquement à l’exécution." }
    ]
  },
  {
    question: "5. Quelle instruction permet d’afficher une variable à l’écran ?",
    answers: [
      { text: "echo(x)", correct: false },
      { text: "print(x)", correct: true, explanation: "Exact — ‘print()’ affiche le contenu d’une variable." },
      { text: "display(x)", correct: false },
      { text: "show(x)", correct: false }
    ]
  },
  {
    question: "6. Que signifie le symbole '#' dans un programme Python ?",
    answers: [
      { text: "Le début d’un commentaire", correct: true, explanation: "Oui — tout texte après '#' est ignoré par l’interpréteur." },
      { text: "Un opérateur logique", correct: false },
      { text: "Un caractère spécial", correct: false },
      { text: "La fin d’une instruction", correct: false }
    ]
  },
  {
    question: "7. Quelle est la valeur affichée par ce code ?\\n\\n```python\\nn = 4\\nsomme = 0\\nfor i in range(1, n):\\n    somme += i\\nprint(somme)\\n```",
    answers: [
      { text: "10", correct: false },
      { text: "6", correct: true, explanation: "Oui — range(1,4) génère [1,2,3], somme = 1+2+3 = 6." },
      { text: "4", correct: false },
      { text: "3", correct: false }
    ]
  },
  {
    question: "8. Que se passe-t-il si on écrit `x = 3` puis `x = 'Bonjour'` ?",
    answers: [
      { text: "Erreur de type", correct: false },
      { text: "Le type de x devient str", correct: true, explanation: "Oui — Python change le type automatiquement selon la nouvelle valeur." },
      { text: "Le programme s’arrête", correct: false },
      { text: "x garde la valeur 3", correct: false }
    ]
  },
  {
    question: "9. Quelle fonction donne le type d’une variable ?",
    answers: [
      { text: "typeof(x)", correct: false },
      { text: "type(x)", correct: true, explanation: "Exact — la fonction ‘type()’ retourne le type de l’objet." },
      { text: "class(x)", correct: false },
      { text: "gettype(x)", correct: false }
    ]
  },*/
  {
    question: "10. Quelle fonction permet d’évaluer une chaîne comme une expression Python ?",
    answers: [
      { text: "exec()", correct: false },
      { text: "eval()", correct: true, explanation: "Oui — ‘eval()’ exécute une chaîne comme expression Python et renvoie le résultat." },
      { text: "run()", correct: false },
      { text: "input()", correct: false }
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
  const leconActuelle = urlParams.get('lecon') || "Programmation";
 
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
 