// ===============================
//  QUIZ : Éthique et Société
// ===============================
const quizData = [
  { question: "L’éthique se définit principalement comme…", answers: [
      { text: "Une simple règle imposée", correct: false, explanation: "Non, l’éthique n’est pas imposée, elle est réflexive." },
      { text: "Une réflexion argumentée en vue du bien agir", correct: true, explanation: "Exact, l’éthique est une réflexion pour bien agir selon les valeurs." },
      { text: "Un code religieux uniquement", correct: false, explanation: "Faux, l’éthique n’est pas uniquement religieuse." },
      { text: "Une pratique obligatoire sans questionnement", correct: false, explanation: "Non, l’éthique demande réflexion personnelle." }
  ]},
  { question: "Le mot 'morale' vient du latin…", answers: [
      { text: "Moralitas", correct: false, explanation: "Non, c’est une racine différente." },
      { text: "Ethica", correct: false, explanation: "Faux, Ethica est grec." },
      { text: "Mores", correct: true, explanation: "Exact, 'mores' signifie mœurs, habitudes, comportements." },
      { text: "Legis", correct: false, explanation: "Non, legis signifie loi." }
  ]},
  { question: "La déontologie concerne surtout…", answers: [
      { text: "Les choix personnels sans cadre", correct: false, explanation: "Non, c’est réglementé." },
      { text: "Les devoirs et obligations propres à une profession", correct: true, explanation: "Exact, c’est un ensemble de règles pour la profession." },
      { text: "Les lois de l’État uniquement", correct: false, explanation: "Faux, c’est spécifique à la profession." },
      { text: "La philosophie morale générale", correct: false, explanation: "Non, la déontologie est appliquée à un métier." }
  ]},
  { question: "L’éthique professionnelle vise à…", answers: [
      { text: "Suivre aveuglément des règles", correct: false, explanation: "Non, elle demande réflexion." },
      { text: "Être rentable", correct: false, explanation: "Non, c’est secondaire." },
      { text: "Guider le comportement moral dans le cadre du travail", correct: true, explanation: "Exact, pour agir avec intégrité et responsabilité." },
      { text: "Respecter uniquement la loi", correct: false, explanation: "Non, elle dépasse la loi." }
  ]},
  { question: "Le manque de solidarité est…", answers: [
      { text: "Un choix personnel", correct: false, explanation: "Non, c’est un manquement moral." },
      { text: "Un manquement à l’éthique", correct: true, explanation: "Exact, il va à l’encontre des valeurs de coopération." },
      { text: "Indifférent", correct: false, explanation: "Faux, c’est contraire à l’éthique." },
      { text: "Encouragé dans le milieu professionnel", correct: false, explanation: "Non, c’est à éviter." }
  ]},
  { question: "La principale différence entre éthique et déontologie est…", answers: [
      { text: "L’éthique est prescriptive, la déontologie réflexive", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "Il n’y a pas de différence", correct: false, explanation: "Faux, elles sont complémentaires mais distinctes." },
      { text: "L’éthique est réflexive et la déontologie prescriptive", correct: true, explanation: "Exact, l’éthique demande réflexion, la déontologie impose des règles." },
      { text: "Les deux concernent seulement la loi", correct: false, explanation: "Non, elles vont au-delà de la loi." }
  ]},
  { question: "Le code de déontologie a pour rôle de…", answers: [
      { text: "Imposer des sanctions civiles", correct: false, explanation: "Non, ce n’est pas son rôle principal." },
      { text: "Définir les devoirs d’une profession", correct: true, explanation: "Exact, il encadre la conduite des membres." },
      { text: "Remplacer la morale", correct: false, explanation: "Faux, il complète la morale." },
      { text: "Donner des conseils personnels", correct: false, explanation: "Non, ce n’est pas le but." }
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

// Liste des leçons de la matière (Sciences Humaines)
const leconsMatiere = ["Culture générale", "Communication", "Éthique et Société"];

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
//===============================
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
  const matiere = urlParams.get('matiere') || "Sciences Humaines";
  const leconActuelle = urlParams.get('lecon') || "Éthique et Société";

  if (score >= 2) { // seuil pour valider
    localStorage.setItem("lecon_validee", leconActuelle);

    // Trouver la prochaine leçon (boucle si dernière)
    let indexActuelle = leconsMatiere.indexOf(leconActuelle);
    let leconSuivante = leconsMatiere[indexActuelle + 1];
    if (!leconSuivante) leconSuivante = leconsMatiere[0]; // retour à Culture Générale

    const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;
    resultEl.innerHTML += `<p>Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
    resultEl.innerHTML += `<a href="${leconSuivanteUrl}" class="btn">Passer à la leçon suivante : ${leconSuivante}</a>`;

  } else {
    resultEl.innerHTML += `<p>Vous devez obtenir au moins 4 bonnes réponses pour valider la leçon.</p>
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
