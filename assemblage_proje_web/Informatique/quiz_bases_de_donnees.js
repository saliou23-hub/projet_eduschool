// ===============================
//  QUIZ : Bases de données et SGBD
// ===============================
const quizData = [
  {
    question: "1. Que signifie SGBD ?",
    answers: [
      { text: "Système de Gestion des Bases de Données", correct: true, explanation: "Exact — le SGBD permet de créer, gérer et exploiter les bases de données." },
      { text: "Système Général de Base de Données", correct: false, explanation: "Faux — ce n’est pas la définition correcte." },
      { text: "Service de Gestion Bancaire et de Données", correct: false, explanation: "Faux — confusion avec d’autres systèmes." },
      { text: "Système Global de Données Binaires", correct: false, explanation: "Faux — ce n’est pas un SGBD." }
    ]
  },
  {
    question: "2. Quelle est la différence entre une base de données et un SGBD ?",
    answers: [
      { text: "Il n’y a aucune différence", correct: false },
      { text: "Le SGBD est l’outil logiciel qui gère les bases de données", correct: true, explanation: "Exact — la base contient les données, le SGBD les manipule." },
      { text: "La base de données est un programme exécuté par le SGBD", correct: false },
      { text: "Le SGBD contient uniquement les programmes utilisateurs", correct: false }
    ]
  },
  {
    question: "3. Le langage LDD (ou DDL en anglais) sert à :",
    answers: [
      { text: "Manipuler les données", correct: false },
      { text: "Définir la structure de la base", correct: true },
      { text: "Supprimer les utilisateurs", correct: false },
      { text: "Lancer des requêtes réseau", correct: false }
    ]
  },
  {
    question: "4. Le langage LMD (ou DML en anglais) sert à :",
    answers: [
      { text: "Créer les tables", correct: false },
      { text: "Manipuler les données existantes", correct: true },
      { text: "Sauvegarder la base", correct: false },
      { text: "Gérer les utilisateurs", correct: false }
    ]
  },
  {
    question: "5. Quel langage permet d’interroger une base relationnelle ?",
    answers: [
      { text: "SQL", correct: true },
      { text: "HTML", correct: false },
      { text: "XML", correct: false },
      { text: "PHP", correct: false }
    ]
  },
  {
    question: "6. La propriété de confidentialité d’un SGBD garantit :",
    answers: [
      { text: "Que les données sont correctes", correct: false },
      { text: "Que seules les personnes autorisées accèdent aux données", correct: true },
      { text: "Que les données sont disponibles en tout temps", correct: false },
      { text: "Que les requêtes sont rapides", correct: false }
    ]
  },
  {
    question: "7. Quelle autre propriété complète la sécurité dans un SGBD ?",
    answers: [
      { text: "L’intégrité", correct: true },
      { text: "L’aléa", correct: false },
      { text: "Le masquage", correct: false },
      { text: "L’indexation", correct: false }
    ]
  },
  {
    question: "8. L’intégrité des données signifie :",
    answers: [
      { text: "Que les données ne peuvent être modifiées", correct: false },
      { text: "Que les données sont exactes, cohérentes et valides", correct: true },
      { text: "Que les données sont accessibles par tout le monde", correct: false },
      { text: "Que les données sont chiffrées", correct: false }
    ]
  },
  {
    question: "9. La concurrence dans un SGBD désigne :",
    answers: [
      { text: "L’exécution parallèle de transactions multiples", correct: true },
      { text: "L’accès unique à une donnée par un seul utilisateur", correct: false },
      { text: "Le verrouillage total du système", correct: false },
      { text: "L’accès réseau entre bases de données", correct: false }
    ]
  },
  {
    question: "10. Le partage des données signifie :",
    answers: [
      { text: "Qu’elles peuvent être modifiées par tous sans restriction", correct: false },
      { text: "Qu’elles sont stockées sur un serveur distant", correct: false },
      { text: "Que plusieurs utilisateurs peuvent les consulter et les mettre à jour sous contrôle", correct: true },
      { text: "Que les données sont dupliquées à chaque accès", correct: false }
    ]
  },
  {
    question: "11. Dans une architecture fonctionnelle d’un SGBD, le moteur principal est :",
    answers: [
      { text: "Le moteur de stockage", correct: false },
      { text: "Le moteur SQL", correct: false },
      { text: "Le moteur d’exécution des requêtes", correct: false },
      { text: "Toutes les réponses précédentes", correct: true }
    ]
  },
  {
    question: "12. Le système d’exploitation (OS) joue quel rôle dans un SGBD ?",
    answers: [
      { text: "Aucune relation", correct: false },
      { text: "Il fournit les services de fichiers, mémoire et processus nécessaires", correct: true },
      { text: "Il exécute les requêtes SQL", correct: false },
      { text: "Il remplace le moteur de base de données", correct: false }
    ]
  },
  {
    question: "13. Parmi les langages suivants, lequel n’est pas un langage de 4ᵉ génération ?",
    answers: [
      { text: "SQL", correct: false },
      { text: "C", correct: true },
      { text: "Prolog", correct: false },
      { text: "PL/SQL", correct: false }
    ]
  },
  {
    question: "14. Les langages de 4ᵉ génération se distinguent par :",
    answers: [
      { text: "Leur exécution rapide", correct: false },
      { text: "Leur indépendance du matériel", correct: false },
      { text: "Leur haut niveau d’abstraction et leur facilité d’utilisation", correct: true },
      { text: "Leur faible compatibilité avec les SGBD", correct: false }
    ]
  },
  {
    question: "15. Parmi ces langages, lesquels sont de 3ᵉ génération (procéduraux) ?",
    answers: [
      { text: "C, Java, Pascal, Cobol", correct: true },
      { text: "SQL, Prolog", correct: false },
      { text: "HTML, CSS", correct: false },
      { text: "XML, JSON", correct: false }
    ]
  },
  {
    question: "16. Quelle est la fonction d’une interface dans un SGBD ?",
    answers: [
      { text: "Communiquer entre l’utilisateur et la base de données", correct: true },
      { text: "Créer les fichiers binaires", correct: false },
      { text: "Compiler le code SQL", correct: false },
      { text: "Optimiser les index", correct: false }
    ]
  },
  {
    question: "17. Quel est le rôle du module de contrôle d’accès dans un SGBD ?",
    answers: [
      { text: "Gérer la concurrence", correct: false },
      { text: "Gérer les droits et permissions utilisateurs", correct: true },
      { text: "Exécuter les requêtes SQL", correct: false },
      { text: "Sauvegarder la base", correct: false }
    ]
  },
  {
    question: "18. Quelle est la conséquence d’un mauvais contrôle de concurrence ?",
    answers: [
      { text: "Une erreur syntaxique SQL", correct: false },
      { text: "Une perte de performance uniquement", correct: false },
      { text: "Des anomalies de lecture/écriture (incohérences)", correct: true },
      { text: "Une accélération du système", correct: false }
    ]
  },
  {
    question: "19. Quelle propriété garantit qu’une transaction est exécutée entièrement ou pas du tout ?",
    answers: [
      { text: "Atomicité", correct: true },
      { text: "Cohérence", correct: false },
      { text: "Isolation", correct: false },
      { text: "Durabilité", correct: false }
    ]
  },
  {
    question: "20. Le modèle ACID d’un SGBD regroupe :",
    answers: [
      { text: "Administration, Confidentialité, Intégrité, Disponibilité", correct: false },
      { text: "Atomicité, Cohérence, Isolation, Durabilité", correct: true },
      { text: "Architecture, Concurrence, Indexation, Distribution", correct: false },
      { text: "Aucun des choix", correct: false }
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
  const leconActuelle = urlParams.get('lecon') || "Bases de données";

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
