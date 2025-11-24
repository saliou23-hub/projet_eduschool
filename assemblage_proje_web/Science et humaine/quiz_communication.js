// ===============================
//  QUIZ : Communication
// ===============================
const quizData = [
  {
    question: "Selon le cours, la communication est-elle :",
    answers: [
      { text: "Un processus à sens unique qui informe seulement", correct: false, explanation: "L'information peut être à sens unique, mais la communication suppose échange et rétroaction." },
      { text: "Un processus réciproque qui inclut écoute et feedback", correct: true, explanation: "Exact — la communication implique échange, écoute et rétroaction pour être efficace." },
      { text: "Toujours écrite et formelle", correct: false, explanation: "Non — la communication peut être orale, non-verbale, écrite ou publique." },
      { text: "Un phénomène exclusivement technique", correct: false, explanation: "La technique aide mais communiquer est une compétence humaine, pas seulement technique." }
    ]
  },
  {
    question: "Quel élément n'est PAS un 'bruit' ou parasite selon le cours ?",
    answers: [
      { text: "Un klaxon (bruit physique)", correct: false, explanation: "C'est un exemple de bruit physique." },
      { text: "Un préjugé (bruit psychologique)", correct: false, explanation: "C'est un bruit psychologique important." },
      { text: "Une traduction claire et partagée", correct: true, explanation: "C'est l'inverse : un code partagé favorise la communication, pas un bruit." },
      { text: "Un jargon inapproprié (bruit sémantique)", correct: false, explanation: "C'est un bruit sémantique qui gêne la compréhension." }
    ]
  },
  {
    question: "Le 'champ d'expérience' désigne :",
    answers: [
      { text: "Les références et expériences partagées entre émetteur et récepteur", correct: true, explanation: "Oui — plus le champ d'expérience est commun, plus la communication est efficace." },
      { text: "Un type de canal de diffusion (radio, TV)", correct: false, explanation: "Non — le canal est la voie de transmission, pas le champ d'expérience." },
      { text: "La longueur du message", correct: false, explanation: "Non — ceci ne définit pas le champ d'expérience." },
      { text: "La durée d'une prise de parole", correct: false, explanation: "Non — il s'agit d'autre chose." }
    ]
  },
  {
    question: "Parmi les canaux suivants, lequel offre interaction verbale et non-verbale ?",
    answers: [
      { text: "Rencontre personnelle", correct: true, explanation: "Oui — elle permet interaction verbale et indices non-verbaux (gestes, regard)." },
      { text: "Téléphone", correct: false, explanation: "Téléphone : interaction verbale mais peu de visuel/non-verbal." },
      { text: "SMS", correct: false, explanation: "SMS : très limité en indices non-verbaux." },
      { text: "Diffusion TV sans interaction", correct: false, explanation: "TV de masse n'offre pas d'interaction directe." }
    ]
  },
  {
    question: "Quelle affirmation reflète l'idée des 'rôles embrouillés' ?",
    answers: [
      { text: "L'émetteur et le récepteur parlent en même temps, provoquant échec", correct: true, explanation: "Exact — transmission et réception simultanées mènent souvent à l'échec." },
      { text: "Le message est parfaitement reçu", correct: false, explanation: "Non, ce n'est pas l'idée." },
      { text: "Le canal est inapproprié pour le message", correct: false, explanation: "Ceci concerne le choix du canal, pas les rôles embrouillés." },
      { text: "La rétroaction est toujours positive", correct: false, explanation: "La rétroaction peut être neutre, positive ou négative." }
    ]
  },
  {
    question: "L'écoute active consiste principalement à :",
    answers: [
      { text: "Interrompre souvent pour corriger l'autre", correct: false, explanation: "Non — l'écoute active évite l'interruption et favorise reformulation." },
      { text: "Écouter sans jugement et reformuler pour clarifier", correct: true, explanation: "Oui — l'écoute active implique attention, reformulation et empathie." },
      { text: "Parler plus fort que l'interlocuteur", correct: false, explanation: "Non — cela n'aide pas la compréhension." },
      { text: "Se concentrer uniquement sur les mots et ignorer le non-verbal", correct: false, explanation: "Au contraire, l'écoute active prend en compte le non-verbal." }
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

// Liste des leçons de la matière (Sciences Humaines)
const leconsMatiere = ["Culture Générale", "Communication", "Éthique et société"];

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
  const leconActuelle = urlParams.get('lecon') || "Communication";

  if (score >= 1) {
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
