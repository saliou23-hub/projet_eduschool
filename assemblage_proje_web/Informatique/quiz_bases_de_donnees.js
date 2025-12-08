// ===============================
//  QUIZ : Bases de données et SGBD
// ===============================
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
      { text: "Il n’y a aucune différence", correct: false, explanation: "Faux — la base contient les données, le SGBD les manipule." },
      { text: "Le SGBD est l’outil logiciel qui gère les bases de données", correct: true, explanation: "Exact — la base contient les données, le SGBD les manipule." },
      { text: "La base de données est un programme exécuté par le SGBD", correct: false, explanation: "Faux — la base contient les données, ce n’est pas un programme." },
      { text: "Le SGBD contient uniquement les programmes utilisateurs", correct: false, explanation: "Faux — le SGBD contient le logiciel de gestion et contrôle des bases." }
    ]
  },
  {
    question: "3. Le langage LDD (ou DDL en anglais) sert à :",
    answers: [
      { text: "Manipuler les données", correct: false, explanation: "Faux — c’est le rôle du DML." },
      { text: "Définir la structure de la base", correct: true, explanation: "Exact — le DDL sert à créer, modifier ou supprimer les objets de la base." },
      { text: "Supprimer les utilisateurs", correct: false, explanation: "Faux — ce n’est pas la fonction principale du DDL." },
      { text: "Lancer des requêtes réseau", correct: false, explanation: "Faux — le DDL n’a pas de rôle réseau." }
    ]
  },/*
  {
    question: "4. Le langage LMD (ou DML en anglais) sert à :",
    answers: [
      { text: "Créer les tables", correct: false, explanation: "Faux — création de tables = DDL." },
      { text: "Manipuler les données existantes", correct: true, explanation: "Exact — le DML sert à insérer, modifier, supprimer et interroger les données." },
      { text: "Sauvegarder la base", correct: false, explanation: "Faux — sauvegarde = rôle du SGBD ou OS." },
      { text: "Gérer les utilisateurs", correct: false, explanation: "Faux — gestion des utilisateurs = rôle du SGBD." }
    ]
  },
  {
    question: "5. Quel langage permet d’interroger une base relationnelle ?",
    answers: [
      { text: "SQL", correct: true, explanation: "Exact — SQL est le langage standard pour interroger et manipuler les bases relationnelles." },
      { text: "HTML", correct: false, explanation: "Faux — HTML sert à structurer des pages web." },
      { text: "XML", correct: false, explanation: "Faux — XML est un format de données, pas un langage de requête." },
      { text: "PHP", correct: false, explanation: "Faux — PHP est un langage serveur, pas un langage d’interrogation SQL." }
    ]
  },
  {
    question: "6. La propriété de confidentialité d’un SGBD garantit :",
    answers: [
      { text: "Que les données sont correctes", correct: false, explanation: "Faux — c’est l’intégrité des données qui garantit cela." },
      { text: "Que seules les personnes autorisées accèdent aux données", correct: true, explanation: "Exact — la confidentialité empêche l’accès non autorisé." },
      { text: "Que les données sont disponibles en tout temps", correct: false, explanation: "Faux — c’est la disponibilité." },
      { text: "Que les requêtes sont rapides", correct: false, explanation: "Faux — performance = optimisation, pas confidentialité." }
    ]
  },
  {
    question: "7. Quelle autre propriété complète la sécurité dans un SGBD ?",
    answers: [
      { text: "L’intégrité", correct: true, explanation: "Exact — l’intégrité garantit que les données sont exactes, cohérentes et valides." },
      { text: "L’aléa", correct: false, explanation: "Faux — l’aléa n’a pas de rapport avec la sécurité." },
      { text: "Le masquage", correct: false, explanation: "Faux — le masquage est une technique de confidentialité mais pas la propriété principale." },
      { text: "L’indexation", correct: false, explanation: "Faux — l’indexation améliore les performances, pas la sécurité." }
    ]
  },
  {
    question: "8. L’intégrité des données signifie :",
    answers: [
      { text: "Que les données ne peuvent être modifiées", correct: false, explanation: "Faux — elles peuvent être modifiées selon les règles." },
      { text: "Que les données sont exactes, cohérentes et valides", correct: true, explanation: "Exact — l’intégrité garantit la fiabilité des données." },
      { text: "Que les données sont accessibles par tout le monde", correct: false, explanation: "Faux — l’accès dépend des permissions." },
      { text: "Que les données sont chiffrées", correct: false, explanation: "Faux — le chiffrement relève de la confidentialité." }
    ]
  },
  {
    question: "9. La concurrence dans un SGBD désigne :",
    answers: [
      { text: "L’exécution parallèle de transactions multiples", correct: true, explanation: "Exact — plusieurs utilisateurs peuvent exécuter des transactions simultanément." },
      { text: "L’accès unique à une donnée par un seul utilisateur", correct: false, explanation: "Faux — c’est le contraire de la concurrence." },
      { text: "Le verrouillage total du système", correct: false, explanation: "Faux — le verrouillage peut gérer la concurrence, mais pas la définir." },
      { text: "L’accès réseau entre bases de données", correct: false, explanation: "Faux — ce n’est pas la définition de la concurrence." }
    ]
  },
  {
    question: "10. Le partage des données signifie :",
    answers: [
      { text: "Qu’elles peuvent être modifiées par tous sans restriction", correct: false, explanation: "Faux — le contrôle d’accès reste en place." },
      { text: "Qu’elles sont stockées sur un serveur distant", correct: false, explanation: "Faux — stockage distant n’implique pas partage." },
      { text: "Que plusieurs utilisateurs peuvent les consulter et les mettre à jour sous contrôle", correct: true, explanation: "Exact — le partage se fait sous contrôle de permissions et intégrité." },
      { text: "Que les données sont dupliquées à chaque accès", correct: false, explanation: "Faux — duplication n’est pas obligatoire pour le partage." }
    ]
  },
  {
    question: "11. Dans une architecture fonctionnelle d’un SGBD, le moteur principal est :",
    answers: [
      { text: "Le moteur de stockage", correct: false, explanation: "Faux — c’est une partie du moteur principal, pas le seul." },
      { text: "Le moteur SQL", correct: false, explanation: "Faux — c’est une partie du moteur principal." },
      { text: "Le moteur d’exécution des requêtes", correct: false, explanation: "Faux — ce n’est qu’un composant." },
      { text: "Toutes les réponses précédentes", correct: true, explanation: "Exact — le moteur principal comprend stockage, SQL et exécution des requêtes." }
    ]
  },
  {
    question: "12. Le système d’exploitation (OS) joue quel rôle dans un SGBD ?",
    answers: [
      { text: "Aucune relation", correct: false, explanation: "Faux — le SGBD dépend des services fournis par l’OS." },
      { text: "Il fournit les services de fichiers, mémoire et processus nécessaires", correct: true, explanation: "Exact — l’OS fournit les ressources matérielles et services essentiels au SGBD." },
      { text: "Il exécute les requêtes SQL", correct: false, explanation: "Faux — c’est le SGBD qui exécute SQL." },
      { text: "Il remplace le moteur de base de données", correct: false, explanation: "Faux — l’OS ne remplace pas le SGBD." }
    ]
  },
  {
    question: "13. Parmi les langages suivants, lequel n’est pas un langage de 4ᵉ génération ?",
    answers: [
      { text: "SQL", correct: false, explanation: "Faux — SQL est un langage 4G." },
      { text: "C", correct: true, explanation: "Exact — C est un langage procédural 3G." },
      { text: "Prolog", correct: false, explanation: "Faux — Prolog est un langage déclaratif 4G." },
      { text: "PL/SQL", correct: false, explanation: "Faux — PL/SQL est un langage 4G spécialisé pour bases de données." }
    ]
  },
  {
    question: "14. Les langages de 4ᵉ génération se distinguent par :",
    answers: [
      { text: "Leur exécution rapide", correct: false, explanation: "Faux — vitesse n’est pas le critère principal." },
      { text: "Leur indépendance du matériel", correct: false, explanation: "Faux — certains 3G aussi sont indépendants du matériel." },
      { text: "Leur haut niveau d’abstraction et leur facilité d’utilisation", correct: true, explanation: "Exact — 4G privilégie la simplicité et l’abstraction." },
      { text: "Leur faible compatibilité avec les SGBD", correct: false, explanation: "Faux — ils sont souvent conçus pour SGBD." }
    ]
  },
  {
    question: "15. Parmi ces langages, lesquels sont de 3ᵉ génération (procéduraux) ?",
    answers: [
      { text: "C, Java, Pascal, Cobol", correct: true, explanation: "Exact — ce sont des langages procéduraux 3G." },
      { text: "SQL, Prolog", correct: false, explanation: "Faux — SQL et Prolog sont 4G." },
      { text: "HTML, CSS", correct: false, explanation: "Faux — HTML et CSS sont des langages de balisage." },
      { text: "XML, JSON", correct: false, explanation: "Faux — ce sont des formats de données." }
    ]
  },
  {
    question: "16. Quelle est la fonction d’une interface dans un SGBD ?",
    answers: [
      { text: "Communiquer entre l’utilisateur et la base de données", correct: true, explanation: "Exact — l’interface permet d’échanger avec la base via commandes ou GUI." },
      { text: "Créer les fichiers binaires", correct: false, explanation: "Faux — c’est le rôle du moteur de stockage." },
      { text: "Compiler le code SQL", correct: false, explanation: "Faux — le moteur d’exécution compile/interprète SQL." },
      { text: "Optimiser les index", correct: false, explanation: "Faux — optimisation = moteur ou SGBD, pas interface." }
    ]
  },
  {
    question: "17. Quel est le rôle du module de contrôle d’accès dans un SGBD ?",
    answers: [
      { text: "Gérer la concurrence", correct: false, explanation: "Faux — la concurrence est gérée par le moteur de transactions." },
      { text: "Gérer les droits et permissions utilisateurs", correct: true, explanation: "Exact — il contrôle qui peut accéder ou modifier quelles données." },
      { text: "Exécuter les requêtes SQL", correct: false, explanation: "Faux — c’est le rôle du moteur SQL." },
      { text: "Sauvegarder la base", correct: false, explanation: "Faux — sauvegarde = rôle du SGBD et OS." }
    ]
  },
  {
    question: "18. Quelle est la conséquence d’un mauvais contrôle de concurrence ?",
    answers: [
      { text: "Une erreur syntaxique SQL", correct: false, explanation: "Faux — syntaxe SQL reste correcte." },
      { text: "Une perte de performance uniquement", correct: false, explanation: "Faux — incohérences peuvent apparaître." },
      { text: "Des anomalies de lecture/écriture (incohérences)", correct: true, explanation: "Exact — mauvaise gestion concurrence = anomalies dans les données." },
      { text: "Une accélération du système", correct: false, explanation: "Faux — ce n’est jamais un effet positif." }
    ]
  },
  {
    question: "19. Quelle propriété garantit qu’une transaction est exécutée entièrement ou pas du tout ?",
    answers: [
      { text: "Atomicité", correct: true, explanation: "Exact — une transaction est atomique : tout ou rien." },
      { text: "Cohérence", correct: false, explanation: "Faux — cohérence = respect des règles de la base." },
      { text: "Isolation", correct: false, explanation: "Faux — isolation = transactions séparées entre elles." },
      { text: "Durabilité", correct: false, explanation: "Faux — durabilité = persistance des changements validés." }
    ]
  },*/
  {
    question: "20. Le modèle ACID d’un SGBD regroupe :",
    answers: [
      { text: "Administration, Confidentialité, Intégrité, Disponibilité", correct: false, explanation: "Faux — ce sont des concepts de sécurité, pas ACID." },
      { text: "Atomicité, Cohérence, Isolation, Durabilité", correct: true, explanation: "Exact — ACID définit ces quatre propriétés pour les transactions." },
      { text: "Architecture, Concurrence, Indexation, Distribution", correct: false, explanation: "Faux — ce n’est pas ACID." },
      { text: "Aucun des choix", correct: false, explanation: "Faux — la bonne réponse est ACID." }
    ]
  }
];
 
 
// ===============================
// VARIABLES GLOBALES
// ===============================
let currentQuestion = 0;
let score = 0;
localStorage.removeItem("quiz_answers");
let userAnswers = Array(quizData.length).fill(null);
 
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz");
 
// nouveau : finish + popup elements
const finishBtn = document.getElementById("finish-test-btn");
const popup = document.getElementById("confirm-popup");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
 
 
// Liste des leçons
const leconsMatiere = ["Programmation", "Bases de données",  "Réseaux"];
 
// ===============================
// TIMER
// ===============================
let timeLeft = 100; // 1.40 minutes
let timerInterval;
 
function startTimer() {
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent =
      `${minutes}:${seconds.toString().padStart(2,"0")}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
    timeLeft--;
  }, 1000);
}
 
// ===============================
// PROGRESSION
// ===============================
function updateProgressBar() {
  const progress = ((currentQuestion+1)/quizData.length)*100;
  document.getElementById("progress-bar").style.width = progress + "%";
}
 
// ===============================
// AFFICHER QUESTION
// ===============================
function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
 
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("btn");
 
    if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] === index) {
      btn.classList.add("selected");
    }
 
    btn.onclick = () => {
      Array.from(answersEl.children).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      userAnswers[currentQuestion] = index;
      localStorage.setItem("quiz_answers", JSON.stringify(userAnswers));
    };
 
    answersEl.appendChild(btn);
  });
 
  // navigation: précédent visible sauf première question
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
 
  // --- IMPORTANT : gérer l'affichage du bouton "Terminer le test" uniquement à la dernière question
  if (currentQuestion === quizData.length - 1) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    finishBtn.style.display = "none";
  }
 
  updateProgressBar();
}
 
// ===============================
// BOUTONS
// ===============================
nextBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestion] === null) {
    alert("Veuillez sélectionner une réponse avant de continuer.");
    return;
  }
 
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});
 
prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});
 
// finish button : ouvre la popup, mais vérifie d'abord qu'une réponse est sélectionnée sur la dernière question
finishBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestion] === null) {
    alert("Veuillez sélectionner une réponse pour la dernière question avant de terminer le test.");
    return;
  }
  popup.style.display = "flex";
});
 
// popup boutons
cancelBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
 
confirmBtn.addEventListener("click", () => {
  popup.style.display = "none";
  showResult();
});
 
// ===============================
// AFFICHER RESULTATS
// ===============================
function showResult() {
  clearInterval(timerInterval);
  finishBtn.style.display = "none";
  quizContainer.style.display = "none";
  resultEl.style.display = "block";
 
  score = 0;
  let html = `<h2>Résultat du quiz</h2>`;
  const seuil = 60;
 
  quizData.forEach((q,i) => {
    const userIndex = userAnswers[i];
    const selected = q.answers[userIndex];
    const correct = q.answers.find(a => a.correct);
 
    if (selected && selected.correct) score++;
 
    html += `
      <div class="result-block">
        <p><strong>${q.question}</strong></p>
        <p>Votre réponse : <span class="${selected && selected.correct ? "correct" : "incorrect"}">${selected ? selected.text : "Aucune réponse"}</span></p>
        <p>Bonne réponse : <strong>${correct ? correct.text : "—"}</strong></p>
        <p class="explanation">${correct ? correct.explanation : ""}</p>
      </div>
    `;
  });
 
  const pourcentage = (score/quizData.length)*100;
 
  const urlParams = new URLSearchParams(window.location.search);
  const matiere = urlParams.get('matiere') || "Informatique";
  const leconActuelle = urlParams.get('lecon') || "Bases de données";
 
  if (pourcentage >= seuil) {
    localStorage.setItem("lecon_validee", leconActuelle);
 
    html += `<p>Bravo ! Vous avez validé la leçon <strong>${leconActuelle}</strong>.</p>`;
 
    // Affichage automatique du bouton vers la leçon suivante
    const indexActuelle = leconsMatiere.indexOf(leconActuelle);
    const leconSuivante = leconsMatiere[indexActuelle + 1] || "Fin du cours";
    if (leconSuivante !== "Fin du cours") {
      const leconSuivanteUrl = `lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconSuivante)}`;
      html += `<a href="${leconSuivanteUrl}" class="btn">Passer à la leçon suivante : ${leconSuivante}</a>`;
    }
  } else {
    html += `<p>Vous n'avez pas atteint le score minimum (${seuil}%). Réessayez la leçon <strong>${leconActuelle}</strong>.</p>`;
    html += `<a href="lecon.html?matiere=${encodeURIComponent(matiere)}&lecon=${encodeURIComponent(leconActuelle)}" class="btn">Recommencer</a>`;
  }
 
  html += `<p>Score final : ${score}/${quizData.length} (${pourcentage.toFixed(2)}%)</p>`;
 
  resultEl.innerHTML = html;
}
 
// ===============================
// INITIALISATION
// ===============================
// Cacher le bouton terminer au chargement (sécurité si HTML ne contient pas d'attribut style)
finishBtn.style.display = "none";
 
showQuestion();
startTimer();
 