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
  ]},
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
  ]},
  { question: "10. Une fonction f:A→B est injective si :", answers: [
      { text: "Deux éléments différents de A ont des images différentes", correct: true, explanation: "Exact, c’est la définition d’une fonction injective." },
      { text: "Tous les éléments de A ont la même image", correct: false, explanation: "Non, c’est constant." },
      { text: "Chaque élément de B a une préimage", correct: false, explanation: "Non, c’est la surjectivité." },
      { text: "L’image de A est égale à B", correct: false, explanation: "Non, c’est surjective." }
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
const leconsMatiere = ["Algèbre linéaire", "Statistiques",  "Analyse 1"];

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
  const leconActuelle = urlParams.get('lecon') || "Algèbre linéaire";

  // Trouver la prochaine leçon
  const indexActuelle = leconsMatiere.indexOf(leconActuelle);
  const leconSuivante = leconsMatiere[indexActuelle + 1] || leconsMatiere[0];
  const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;

  if (score >= 2) { // seuil à définir
    localStorage.setItem("lecon_validee", leconActuelle);
    resultEl.innerHTML += `<p>Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
  } else {
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

  // Toujours proposer de passer à la leçon suivante
  resultEl.innerHTML += `<p>Vous pouvez passer à la leçon suivante :</p>
                         <a href="${leconSuivanteUrl}" class="btn">Leçon suivante : ${leconSuivante}</a>`;
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
