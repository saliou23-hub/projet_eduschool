// ===============================
//  QUIZ : Physique – Mécanique classique
// ===============================
const quizData = [
  {
    question: "1. La cinématique étudie :",
    answers: [
      { text: "Les forces appliquées sur un corps", correct: false, explanation: "Faux — la cinématique ne considère pas les causes du mouvement." },
      { text: "Le mouvement sans considérer les causes", correct: true, explanation: "Exact — la cinématique décrit le mouvement indépendamment des forces." },
      { text: "La nature des interactions", correct: false, explanation: "Faux — cela relève de la dynamique." },
      { text: "Les déformations du corps", correct: false, explanation: "Faux — cela concerne la résistance des matériaux." }
    ]
  },
  {
    question: "2. Le vecteur position d’un point M est :",
    answers: [
      { text: "La distance parcourue", correct: false, explanation: "Faux — la distance parcourue est un scalaire." },
      { text: "Le vecteur reliant l’origine au point M", correct: true, explanation: "Exact — le vecteur position relie l’origine au point considéré." },
      { text: "La norme du déplacement", correct: false, explanation: "Faux — ce n’est que la longueur du déplacement." },
      { text: "La vitesse instantanée", correct: false, explanation: "Faux — la vitesse est dérivée du vecteur position." }
    ]
  },
  {
    question: "3. La vitesse instantanée est :",
    answers: [
      { text: "v = d r / dt", correct: true, explanation: "Exact — la vitesse instantanée est la dérivée du vecteur position." },
      { text: "v = Δr / Δt", correct: false, explanation: "Faux — c’est la vitesse moyenne." },
      { text: "v = d² r / dt²", correct: false, explanation: "Faux — c’est l’accélération." },
      { text: "v = r × a", correct: false, explanation: "Faux — ce n’est pas correct." }
    ]
  },
  {
    question: "4. L’accélération instantanée est :",
    answers: [
      { text: "a = dv/dt", correct: true, explanation: "Exact — l’accélération instantanée est la dérivée de la vitesse." },
      { text: "a = r/t", correct: false, explanation: "Faux — ce n’est pas la définition de l’accélération." },
      { text: "a = v/t", correct: false, explanation: "Faux — approximation uniquement pour MRU." },
      { text: "a = v × r", correct: false, explanation: "Faux — formule incorrecte." }
    ]
  },
  {
    question: "5. Le mouvement rectiligne uniforme correspond à :",
    answers: [
      { text: "a = 0", correct: true, explanation: "Exact — un MRU a une accélération nulle." },
      { text: "v = 0", correct: false, explanation: "Faux — la vitesse est constante mais non nulle." },
      { text: "r = 0", correct: false, explanation: "Faux — la position varie avec le temps." },
      { text: "v = constante en norme seulement", correct: false, explanation: "Faux — la vitesse est constante en norme et direction." }
    ]
  },
  {
    question: "6. La deuxième loi de Newton s’écrit :",
    answers: [
      { text: "F = m a", correct: true, explanation: "Exact — force = masse × accélération." },
      { text: "F = m v", correct: false, explanation: "Faux — c’est la quantité de mouvement." },
      { text: "F = v/m", correct: false, explanation: "Faux — formule incorrecte." },
      { text: "F = m g", correct: false, explanation: "Faux — c’est le poids uniquement." }
    ]
  },
  {
    question: "7. Le principe d’inertie stipule que :",
    answers: [
      { text: "Tout corps reste au repos ou en MRU si aucune force ne s’exerce", correct: true },
      { text: "Tout corps finit par s’arrêter naturellement", correct: false },
      { text: "Tout corps accélère spontanément", correct: false },
      { text: "La vitesse dépend de la masse", correct: false }
    ]
  },
  {
    question: "8. Le poids d’un corps est :",
    answers: [
      { text: "Une force de frottement", correct: false },
      { text: "Une force de gravitation exercée par la Terre", correct: true },
      { text: "Une force électrostatique", correct: false },
      { text: "Une force normale", correct: false }
    ]
  },
  {
    question: "9. L’unité du travail est :",
    answers: [
      { text: "Le newton", correct: false },
      { text: "Le joule", correct: true },
      { text: "Le watt", correct: false },
      { text: "Le pascal", correct: false }
    ]
  },
  {
    question: "10. Le travail d’une force constante est :",
    answers: [
      { text: "W = F · v", correct: false },
      { text: "W = F · r", correct: true },
      { text: "W = Δr / Δt", correct: false },
      { text: "W = F² / t", correct: false }
    ]
  },
  {
    question: "11. L’énergie cinétique d’un corps de masse m et vitesse v est :",
    answers: [
      { text: "Ec = mv", correct: false },
      { text: "Ec = 1/2 m v²", correct: true },
      { text: "Ec = m g h", correct: false },
      { text: "Ec = Fv", correct: false }
    ]
  },
  {
    question: "12. L’énergie potentielle de pesanteur est :",
    answers: [
      { text: "Ep = 1/2 m v²", correct: false },
      { text: "Ep = m g h", correct: true },
      { text: "Ep = m h²", correct: false },
      { text: "Ep = 1/2 k x²", correct: false }
    ]
  },
  {
    question: "13. Le travail du poids lors d’une descente est :",
    answers: [
      { text: "Négatif", correct: false },
      { text: "Positif", correct: true },
      { text: "Nul", correct: false },
      { text: "Dépend de la masse uniquement", correct: false }
    ]
  },
  {
    question: "14. La puissance mécanique instantanée est :",
    answers: [
      { text: "P = W / t", correct: false },
      { text: "P = F · v", correct: true },
      { text: "P = F v sin(θ)", correct: false },
      { text: "P = F² / t", correct: false }
    ]
  },
  {
    question: "15. L’énergie mécanique totale est :",
    answers: [
      { text: "E = Ec + Ep", correct: true },
      { text: "E = Ec - Ep", correct: false },
      { text: "E = Fv", correct: false },
      { text: "E = m a", correct: false }
    ]
  },
  {
    question: "16. L’énergie mécanique se conserve si :",
    answers: [
      { text: "Il n’y a pas de frottement", correct: false },
      { text: "Le système est isolé", correct: false },
      { text: "Les forces sont conservatives", correct: false },
      { text: "Toutes les réponses sont vraies", correct: true }
    ]
  },
  {
    question: "17. Le mouvement circulaire uniforme a :",
    answers: [
      { text: "Vitesse constante et accélération nulle", correct: false },
      { text: "Vitesse constante en norme mais direction variable", correct: true },
      { text: "Accélération tangentielle non nulle", correct: false },
      { text: "Trajectoire rectiligne", correct: false }
    ]
  },
  {
    question: "18. L’accélération centripète vaut :",
    answers: [
      { text: "a = v² / r", correct: true },
      { text: "a = v r", correct: false },
      { text: "a = r / v²", correct: false },
      { text: "a = 1 / (r v)", correct: false }
    ]
  },
  {
    question: "19. Le moment d’une force F par rapport à un point O est :",
    answers: [
      { text: "M = F × r", correct: false },
      { text: "M = r × F", correct: true },
      { text: "M = F + r", correct: false },
      { text: "M = r · F", correct: false }
    ]
  },
  {
    question: "20. Le moment cinétique se définit par :",
    answers: [
      { text: "L = m r × v", correct: true },
      { text: "L = F × v", correct: false },
      { text: "L = r + v", correct: false },
      { text: "L = r · F", correct: false }
    ]
  },
  {
    question: "21. Le moment cinétique se conserve si :",
    answers: [
      { text: "Le moment des forces extérieures est nul", correct: true },
      { text: "La vitesse est constante", correct: false },
      { text: "La force est constante", correct: false },
      { text: "La masse est nulle", correct: false }
    ]
  },
  {
    question: "22. Le principe fondamental de la dynamique relie :",
    answers: [
      { text: "Force et énergie", correct: false },
      { text: "Force et accélération", correct: true },
      { text: "Énergie et vitesse", correct: false },
      { text: "Masse et déplacement", correct: false }
    ]
  },
  {
    question: "23. La force de rappel d’un ressort obéit à :",
    answers: [
      { text: "F = k x", correct: false },
      { text: "F = -k x", correct: true },
      { text: "F = k / x", correct: false },
      { text: "F = k / x²", correct: false }
    ]
  },
  {
    question: "24. L’énergie potentielle élastique vaut :",
    answers: [
      { text: "Ep = 1/2 k x²", correct: true },
      { text: "Ep = k x", correct: false },
      { text: "Ep = m g h", correct: false },
      { text: "Ep = 1/2 m v²", correct: false }
    ]
  },
  {
    question: "25. Le mouvement harmonique simple est caractérisé par :",
    answers: [
      { text: "Accélération constante", correct: false },
      { text: "Force proportionnelle et opposée au déplacement", correct: true },
      { text: "Vitesse constante", correct: false },
      { text: "Déplacement exponentiel", correct: false }
    ]
  },
  {
    question: "26. L’équation d’un oscillateur harmonique est :",
    answers: [
      { text: "m d²x/dt² + k x = 0", correct: true },
      { text: "m dx/dt + k x = 0", correct: false },
      { text: "m d²x/dt² - k x = 0", correct: false },
      { text: "m d²x/dt² = k x", correct: false }
    ]
  },
  {
    question: "27. L’énergie totale d’un oscillateur harmonique est :",
    answers: [
      { text: "E = 1/2 k A²", correct: true },
      { text: "E = m g h", correct: false },
      { text: "E = 1/2 m v²", correct: false },
      { text: "E = 0", correct: false }
    ]
  },
  {
    question: "28. La loi de la gravitation universelle de Newton est :",
    answers: [
      { text: "F = G m1 m2 / r²", correct: true },
      { text: "F = G (m1 + m2) / r", correct: false },
      { text: "F = G m1 m2 r²", correct: false },
      { text: "F = G r² / (m1 m2)", correct: false }
    ]
  },
  {
    question: "29. L’énergie potentielle gravitationnelle vaut :",
    answers: [
      { text: "Ep = -G m1 m2 / r", correct: true },
      { text: "Ep = G m1 m2 / r²", correct: false },
      { text: "Ep = m g h", correct: false },
      { text: "Ep = 0", correct: false }
    ]
  },
  {
    question: "30. L’orbite d’un satellite autour de la Terre est :",
    answers: [
      { text: "Due à la force électrostatique", correct: false },
      { text: "Un mouvement rectiligne uniforme", correct: false },
      { text: "Un mouvement circulaire ou elliptique dû à la gravitation", correct: true },
      { text: "Impossible sans atmosphère", correct: false }
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
  const leconActuelle = urlParams.get('lecon') || "Mécanique";

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
