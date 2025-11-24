// ===============================
//  QUIZ : Résistances et Circuits Électriques
// ===============================
const quizData = [
  {
    question: "1. La loi d’Ohm s’écrit :",
    answers: [
      { text: "I = R × U", correct: false, explanation: "Faux — c’est l’inverse de la loi d’Ohm." },
      { text: "U = R × I", correct: true, explanation: "Exact — la tension aux bornes d’un dipôle est proportionnelle à l’intensité du courant." },
      { text: "R = U + I", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R = I / U", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "2. L’unité de résistance est :",
    answers: [
      { text: "Ampère", correct: false, explanation: "Faux — l’ampère mesure le courant." },
      { text: "Coulomb", correct: false, explanation: "Faux — le coulomb mesure la charge électrique." },
      { text: "Ohm", correct: true, explanation: "Exact — l’ohm (Ω) est l’unité de résistance." },
      { text: "Volt", correct: false, explanation: "Faux — le volt mesure la tension." }
    ]
  },
  {
    question: "3. Quand deux résistances sont en série, leur résistance équivalente est :",
    answers: [
      { text: "R_eq = R1 + R2", correct: true, explanation: "Exact — les résistances en série s’additionnent." },
      { text: "R_eq = (R1 × R2) / (R1 + R2)", correct: false, explanation: "Faux — c’est la formule pour le parallèle." },
      { text: "R_eq = R1 - R2", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R_eq = 1 / (R1 + R2)", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "4. Quand deux résistances sont en parallèle, leur résistance équivalente est :",
    answers: [
      { text: "R_eq = R1 + R2", correct: false, explanation: "Faux — formule pour le série." },
      { text: "R_eq = (R1 × R2) / (R1 + R2)", correct: true, explanation: "Exact — la formule pour deux résistances en parallèle." },
      { text: "R_eq = R1 - R2", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "R_eq = R1 × R2", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "5. Pour deux résistances en parallèle, la résistance équivalente est :",
    answers: [
      { text: "Plus grande que chacune des résistances", correct: false, explanation: "Faux — elle est toujours plus petite que la plus petite." },
      { text: "Égale à la moyenne des deux", correct: false, explanation: "Faux — ce n’est pas une moyenne." },
      { text: "Plus petite que la plus petite résistance", correct: true, explanation: "Exact — propriété des résistances en parallèle." },
      { text: "Égale à la somme", correct: false, explanation: "Faux — ce serait en série." }
    ]
  },
  {
    question: "6. Si R1 = 5 Ω et R2 = 10 Ω en série, alors R_eq = ?",
    answers: [
      { text: "2 Ω", correct: false },
      { text: "5 Ω", correct: false },
      { text: "10 Ω", correct: false },
      { text: "15 Ω", correct: true, explanation: "Exact — R_eq = R1 + R2 = 5 + 10 = 15 Ω." }
    ]
  },
  {
    question: "7. Si R1 = 5 Ω et R2 = 10 Ω en parallèle, alors R_eq = ?",
    answers: [
      { text: "3.33 Ω", correct: true, explanation: "Exact — R_eq = (R1 × R2)/(R1 + R2) = 50/15 = 3.33 Ω." },
      { text: "15 Ω", correct: false },
      { text: "5 Ω", correct: false },
      { text: "7.5 Ω", correct: false }
    ]
  },
  {
    question: "8. Dans un circuit série, le courant :",
    answers: [
      { text: "Est le même dans chaque résistance", correct: true },
      { text: "Se divise dans chaque résistance", correct: false },
      { text: "Est nul", correct: false },
      { text: "Double à chaque résistance", correct: false }
    ]
  },
  {
    question: "9. Dans un circuit parallèle, la tension :",
    answers: [
      { text: "Est identique sur chaque branche", correct: true },
      { text: "Se divise entre les branches", correct: false },
      { text: "Dépend du courant", correct: false },
      { text: "Est nulle sur la première résistance", correct: false }
    ]
  },
  {
    question: "10. La puissance dissipée par une résistance est donnée par :",
    answers: [
      { text: "P = U × I", correct: true, explanation: "Exact — les autres formes utiles : P = R I² = U² / R." },
      { text: "P = I / U", correct: false },
      { text: "P = R / U", correct: false },
      { text: "P = U / R", correct: false }
    ]
  },
  {
    question: "11. Si une résistance de 12 Ω est parcourue par un courant de 2 A, la tension à ses bornes est :",
    answers: [
      { text: "6 V", correct: false },
      { text: "12 V", correct: false },
      { text: "24 V", correct: true, explanation: "U = R × I = 12 × 2 = 24 V." },
      { text: "48 V", correct: false }
    ]
  },
  {
    question: "12. Dans un montage en série, si une résistance se coupe :",
    answers: [
      { text: "Le courant continue dans les autres", correct: false },
      { text: "Le courant s’arrête dans tout le circuit", correct: true },
      { text: "Le courant double", correct: false },
      { text: "Rien ne change", correct: false }
    ]
  },
  {
    question: "13. Pour trois résistances R1, R2, R3 en parallèle, on a :",
    answers: [
      { text: "R_eq = 1/(R1 + R2 + R3)", correct: false },
      { text: "1/R_eq = 1/R1 + 1/R2 + 1/R3", correct: true },
      { text: "R_eq = R1 + R2 + R3", correct: false },
      { text: "R_eq = R1 R2 R3 / (R1 + R2 + R3)", correct: false }
    ]
  },
  {
    question: "14. Une résistance équivalente de 0 Ω signifie :",
    answers: [
      { text: "Court-circuit", correct: true },
      { text: "Ouvert-circuit", correct: false },
      { text: "Résistance infinie", correct: false },
      { text: "Résistance moyenne", correct: false }
    ]
  },
  {
    question: "15. Dans un circuit mixte, on simplifie :",
    answers: [
      { text: "En additionnant toutes les résistances", correct: false },
      { text: "En réduisant d’abord les séries puis les parallèles", correct: true },
      { text: "En commençant par les plus grandes résistances", correct: false },
      { text: "Au hasard", correct: false }
    ]
  }
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
const leconsMatiere = ["Mécanique", "Électricité",  "Optique"];

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
  const matiere = urlParams.get('matiere') || "Physique";
  const leconActuelle = urlParams.get('lecon') || "Électricité";

  //  Trouver la prochaine leçon
  const indexActuelle = leconsMatiere.indexOf(leconActuelle);
  const leconSuivante = leconsMatiere[indexActuelle + 1] || leconsMatiere[0];
  const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;

  if (score >= 2) { // seuil à définir
    localStorage.setItem("lecon_validee", leconActuelle);
    resultEl.innerHTML += `<p>Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
  } else {
    resultEl.innerHTML += `<p> Vous devez obtenir au moins 7 bonnes réponses pour valider la leçon.</p>
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
