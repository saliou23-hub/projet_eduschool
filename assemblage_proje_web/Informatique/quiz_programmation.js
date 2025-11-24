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
  },
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
  },
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
const leconsMatiere = ["Programmation", "Bases de données",  "Réseaux"];

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
  const matiere = urlParams.get('matiere') || "Informatique";
  const leconActuelle = urlParams.get('lecon') || "Programmation";

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

  //  Toujours proposer de passer à la leçon suivante
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
