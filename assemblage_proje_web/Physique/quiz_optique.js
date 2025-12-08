// ===============================
//  QUIZ : Optique Géométrique
// ===============================
const quizData = [
  // I. Lois de l’optique géométrique
  { question: "1. Dans le vide, la lumière se propage à une vitesse :", answers: [
      { text: "Dépendant de la fréquence", correct: false, explanation: "Non, dans le vide la vitesse de la lumière est constante." },
      { text: "Dépendant de la direction de propagation", correct: false, explanation: "Non, elle est indépendante de la direction." },
      { text: "Constante, notée c = 3 × 10⁸ m·s⁻¹", correct: true, explanation: "Exact — la vitesse de la lumière dans le vide est c = 3 × 10⁸ m/s." },
      { text: "Variable selon l’observateur", correct: false, explanation: "Non, elle est constante pour tous les observateurs dans le vide." }
  ]},
  { question: "2. L’approximation de l’optique géométrique est valable lorsque :", answers: [
      { text: "Les longueurs d’onde sont du même ordre que la taille des obstacles", correct: false, explanation: "Non, dans ce cas les effets de diffraction sont importants." },
      { text: "Les propriétés du milieu varient lentement devant λ", correct: true, explanation: "Exact — c’est la condition pour que l’approximation géométrique soit valable." },
      { text: "La lumière est monochromatique", correct: false, explanation: "Non, la monochromaticité n’est pas suffisante." },
      { text: "L’intensité lumineuse est faible", correct: false, explanation: "Non, l’intensité n’a pas d’effet sur l’approximation géométrique." }
  ]},/*
  { question: "3. L’indice de réfraction d’un milieu est défini par :", answers: [
      { text: "n = λ/λ₀", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "n = c/v", correct: true, explanation: "Exact — l’indice de réfraction est le rapport de la vitesse de la lumière dans le vide sur celle dans le milieu." },
      { text: "n = c·v", correct: false, explanation: "Non, formule incorrecte." },
      { text: "n = 1/λ", correct: false, explanation: "Non, ce n’est pas la définition de l’indice." }
  ]},
  { question: "4. D’après les lois de Snell-Descartes, pour la réfraction :", answers: [
      { text: "sin i₁ = sin i₂", correct: false, explanation: "Non, ce n’est vrai que si les indices sont égaux." },
      { text: "n₁ sin i₁ = n₂ sin i₂", correct: true, explanation: "Exact — c’est la loi de Snell-Descartes qui relie les angles d’incidence et de réfraction." },
      { text: "n₁/n₂ = i₁/i₂", correct: false, explanation: "Non, formule incorrecte." },
      { text: "i₁ = i₂", correct: false, explanation: "Non, sauf si les indices sont égaux." }
  ]},
  { question: "5. La réflexion totale interne peut se produire si :", answers: [
      { text: "n₁ < n₂", correct: false, explanation: "Non, il faut que la lumière passe d’un milieu plus réfringent à un moins réfringent." },
      { text: "i₁ < iℓ", correct: false, explanation: "Non, il faut que l’angle dépasse l’angle critique." },
      { text: "n₁ > n₂", correct: true, explanation: "Exact — la réflexion totale interne se produit lorsque n₁ > n₂ et i₁ > angle critique." },
      { text: "La lumière est polychromatique", correct: false, explanation: "Non, la polychromaticité n’a pas d’effet direct." }
  ]},
 
  // II. Les miroirs
  { question: "6. Un miroir plan donne une image :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact — l’image d’un miroir plan est droite et virtuelle." },
      { text: "Réelle et droite", correct: false, explanation: "Non, elle n’est pas réelle." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non, elle est droite." }
  ]},
  { question: "7. Le miroir plan est :", answers: [
      { text: "Rigoureusement stigmatique et aplanétique", correct: true, explanation: "Exact — il ne présente ni aberration ni déformation." },
      { text: "Seulement aplanétique", correct: false, explanation: "Non, il est également stigmatique." },
      { text: "Seulement stigmatique", correct: false, explanation: "Non, il est également aplanétique." },
      { text: "Ni l’un ni l’autre", correct: false, explanation: "Non." }
  ]},
  { question: "8. Pour un miroir concave, le foyer est :", answers: [
      { text: "Situé au centre de la calotte", correct: false, explanation: "Non, c’est le centre de courbure." },
      { text: "Au sommet du miroir", correct: false, explanation: "Non, le sommet n’est pas le foyer." },
      { text: "À la moitié du rayon de courbure", correct: true, explanation: "Exact — F = R/2." },
      { text: "À l’infini", correct: false, explanation: "Non, uniquement pour miroir plan." }
  ]},
  { question: "9. La formule de conjugaison des miroirs sphériques (approx. de Gauss) est :", answers: [
      { text: "1/SA + 1/SA’ = 1/f", correct: true, explanation: "Exact — c’est la relation fondamentale des miroirs sphériques." },
      { text: "SA + SA’ = 2f", correct: false, explanation: "Non, formule incorrecte." },
      { text: "1/SA – 1/SA’ = 1/f", correct: false, explanation: "Non." },
      { text: "SA × SA’ = f²", correct: false, explanation: "Non." }
  ]},
  { question: "10. Si l’objet est placé entre le foyer et un miroir concave, l’image est :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact — l’image est droite et agrandie." },
      { text: "Réelle et droite", correct: false, explanation: "Non." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non." }
  ]},
 
  // III. Lentilles minces
  { question: "11. Une lentille convergente est caractérisée par :", answers: [
      { text: "Des bords plus épais que le centre", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "Des bords plus minces que le centre", correct: true, explanation: "Exact — la lentille est plus épaisse au centre que sur les bords." },
      { text: "Un foyer virtuel", correct: false, explanation: "Non, foyer réel si lentille convergente." },
      { text: "Une vergence négative", correct: false, explanation: "Non, vergence positive pour une lentille convergente." }
  ]},
  { question: "12. La vergence d’une lentille mince dans l’air vaut :", answers: [
      { text: "V = 1/f’", correct: true, explanation: "Exact — f’ en mètres, V en dioptries." },
      { text: "V = –1/f’", correct: false, explanation: "Non, négative pour lentilles divergentes." },
      { text: "V = n/f’", correct: false, explanation: "Non, formule incorrecte." },
      { text: "V = 1/nf", correct: false, explanation: "Non." }
  ]},
  { question: "13. La formule de Descartes pour les lentilles minces est :", answers: [
      { text: "1/OA + 1/OA’ = 1/f’", correct: false, explanation: "Non, c’est pour miroir." },
      { text: "1/OA’ – 1/OA = 1/f’", correct: true, explanation: "Exact — relation des lentilles minces." },
      { text: "OA + OA’ = f’", correct: false, explanation: "Non." },
      { text: "OA’/OA = f’", correct: false, explanation: "Non." }
  ]},
  { question: "14. Pour une lentille convergente, un objet réel entre F et O donne :", answers: [
      { text: "Une image réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Une image virtuelle et droite", correct: true, explanation: "Exact — l’image est agrandie et droite." },
      { text: "Une image réelle et droite", correct: false, explanation: "Non." },
      { text: "Pas d’image", correct: false, explanation: "Non." }
  ]},
  { question: "15. Pour une lentille divergente, l’image d’un objet réel est toujours :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact — l’image est droite et réduite." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non." },
      { text: "Réelle et droite", correct: false, explanation: "Non." }
  ]},
 
  // IV. Instruments d’optique
  { question: "16. Dans l’œil humain, la lentille principale est :", answers: [
      { text: "La pupille", correct: false, explanation: "Non, la pupille est un diaphragme." },
      { text: "La cornée", correct: false, explanation: "Non, la cornée contribue à la réfraction, mais le cristallin est la lentille principale." },
      { text: "Le cristallin", correct: true, explanation: "Exact — il focalise l’image sur la rétine." },
      { text: "La rétine", correct: false, explanation: "Non, c’est le détecteur." }
  ]},
  { question: "17. La loupe est utilisée :", answers: [
      { text: "Pour observer des objets lointains", correct: false, explanation: "Non." },
      { text: "Avec un objet placé entre le foyer et la lentille", correct: true, explanation: "Exact — elle permet de former une image virtuelle agrandie." },
      { text: "Avec un objet au-delà du foyer", correct: false, explanation: "Non." },
      { text: "Pour former une image réelle sur un écran", correct: false, explanation: "Non." }
  ]},
  { question: "18. La lunette astronomique donne :", answers: [
      { text: "Une image réelle et droite", correct: false, explanation: "Non, l’image est virtuelle et renversée." },
      { text: "Une image virtuelle et renversée", correct: true, explanation: "Exact — l’image finale vue à l’oculaire est virtuelle et renversée." },
      { text: "Une image virtuelle et droite", correct: false, explanation: "Non." },
      { text: "Une image réelle et renversée", correct: false, explanation: "Non." }
  ]},
  { question: "19. L’appareil photo fonctionne selon :", answers: [
      { text: "Une lentille divergente", correct: false, explanation: "Non." },
      { text: "Une lentille convergente formant une image réelle", correct: true, explanation: "Exact — l’objectif forme une image réelle sur le capteur." },
      { text: "Une lentille convergente formant une image virtuelle", correct: false, explanation: "Non." },
      { text: "Un miroir convexe", correct: false, explanation: "Non." }
  ]},*/
  { question: "20. Le microscope optique est constitué :", answers: [
      { text: "D’une seule lentille convergente", correct: false, explanation: "Non, il en a deux." },
      { text: "D’une lentille divergente et d’un miroir", correct: false, explanation: "Non." },
      { text: "De deux lentilles convergentes : objectif et oculaire", correct: true, explanation: "Exact — objectif et oculaire sont toutes deux convergentes." },
      { text: "De deux miroirs concaves", correct: false, explanation: "Non." }
  ]}
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
const leconsMatiere = ["Optique", "Mécanique", "Électricité"];
 
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
  const matiere = urlParams.get('matiere') || "Physique";
  const leconActuelle = urlParams.get('lecon') || "Optique";
 
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
 
 