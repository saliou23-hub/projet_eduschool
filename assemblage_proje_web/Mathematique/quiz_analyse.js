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
  },
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
  },
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
//  Variables globales
// ===============================
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz");

// Liste des leçons
const leconsMatiere = ["Algèbre linéaire", "Analyse 1", "Statistiques"];

// ===============================
//  Fonction : Afficher une question
// ===============================
function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("btn");
    btn.onclick = () => selectAnswer(answer, btn);
    answersEl.appendChild(btn);
  });
}

// ===============================
//  Fonction : Sélection d’une réponse
// ===============================
function selectAnswer(answer, button) {
  document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);

  if (answer.correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
  }

  const explanation = document.createElement("p");
  explanation.textContent = answer.explanation;
  explanation.className = "explanation";
  answersEl.appendChild(explanation);
}

// ===============================
//  Bouton "Suivant"
// ===============================
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) showQuestion();
  else showResult();
});

// ===============================
//  Fonction : Afficher le résultat final
// ===============================
function showResult() {
  quizContainer.style.display = "none";
  resultEl.style.display = "block";

  resultEl.innerHTML = `<h2>Résultat du quiz</h2>
                        <p>Vous avez obtenu <strong>${score}</strong> sur <strong>${quizData.length}</strong>.</p>`;

  const urlParams = new URLSearchParams(window.location.search);
  const matiere = urlParams.get('matiere') || "Mathématiques";
  const leconActuelle = urlParams.get('lecon') || "Analyse 1";

  if (score >= 1) { // seuil pour valider
    localStorage.setItem("lecon_validee", leconActuelle);

    // Trouver la prochaine leçon
    const indexActuelle = leconsMatiere.indexOf(leconActuelle);
    const leconSuivante = leconsMatiere[indexActuelle + 1] || leconsMatiere[0];

    resultEl.innerHTML += `<p>Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
    const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;
    resultEl.innerHTML += `<a href="${leconSuivanteUrl}" class="btn">Passer à la leçon suivante : ${leconSuivante}</a>`;

  } else {
    resultEl.innerHTML += `<p>Vous devez obtenir au moins 3 bonnes réponses pour valider la leçon.</p>
                           <button id="retry-btn" class="btn">Recommencer le quiz</button>`;
    document.getElementById("retry-btn").addEventListener("click", () => {
      localStorage.removeItem("lecon_validee");
      score = 0;
      currentQuestion = 0;
      quizContainer.style.display = "block";
      resultEl.style.display = "none";
      showQuestion();
    });
  }
}

// ===============================
//  Démarrage du quiz
// ===============================
showQuestion();
