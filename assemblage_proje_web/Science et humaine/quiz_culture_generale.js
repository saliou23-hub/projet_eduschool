// ===============================
//  QUIZ : Culture Générale
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
const leconsMatiere = ["Culture Générale", "Communication", "Éthique et Société"];

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
  const matiere = urlParams.get('matiere') || "Sciences Humaines";
  const leconActuelle = urlParams.get('lecon') || "Culture Générale";

  if (score >= 5) {
    localStorage.setItem("lecon_validee", leconActuelle);

    // Trouver la prochaine leçon
    const indexActuelle = leconsMatiere.indexOf(leconActuelle);
    const leconSuivante = leconsMatiere[indexActuelle + 1];

    resultEl.innerHTML += `<p> Félicitations ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;

    if (leconSuivante) {
      const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;
      resultEl.innerHTML += `<a href="${leconSuivanteUrl}" class="btn">Passer à la leçon suivante : ${leconSuivante}</a>`;
    }

  } else {
    resultEl.innerHTML += `<p> Vous devez obtenir au moins 5 bonnes réponses pour valider la leçon.</p>
                           <button id="retry-btn" class="btn">Recommencer le test</button>`;
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
