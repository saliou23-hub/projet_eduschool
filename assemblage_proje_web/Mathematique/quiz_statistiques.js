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
  ]},
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
  ]},
  { question: "10. L’étendue est :", answers: [
      { text: "La somme des valeurs", correct: false, explanation: "Non, c’est faux." },
      { text: "La différence entre la plus grande et la plus petite valeur", correct: true, explanation: "Exact, c’est la définition de l’étendue." },
      { text: "La moyenne des écarts", correct: false, explanation: "Non, ce serait une autre mesure de dispersion." },
      { text: "L’écart-type au carré", correct: false, explanation: "Faux, c’est la variance." }
  ]}
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
const allTextDiv = document.getElementById("allText");

// Liste des leçons
const leconsMatiere = ["Statistiques", "Analyse 1", "Algèbre linéaire"];

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
  const leconActuelle = urlParams.get('lecon') || "Statistiques";

  const indexActuelle = leconsMatiere.indexOf(leconActuelle);
  const leconSuivante = leconsMatiere[indexActuelle + 1] || leconsMatiere[0];
  const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;

  //  Condition : test réussi
  if (score >= 1) {
    localStorage.setItem("lecon_validee", leconActuelle);
    resultEl.innerHTML += `<p>Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
    resultEl.innerHTML += `<p>Vous pouvez passer à la leçon suivante :</p>
                           <a href="${leconSuivanteUrl}" class="btn">Leçon suivante : ${leconSuivante}</a>`;
  } 
  //  Condition : test échoué
  else {
    resultEl.innerHTML += `<p>Vous devez obtenir au moins 7 bonnes réponses pour valider la leçon.</p>
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
//  Afficher tout le texte du quiz
// ===============================
function showAllText() {
  let text = "";
  quizData.forEach((q, index) => {
    text += `${q.question}\n`;
    q.answers.forEach((ans, i) => {
      text += `  ${i + 1}. ${ans.text} (correct: ${ans.correct})\n`;
    });
    text += "\n";
  });
  allTextDiv.textContent = text;
}

// ===============================
//  Démarrage du quiz
// ===============================
showQuestion();
showAllText();
