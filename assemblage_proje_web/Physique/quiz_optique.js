// ===============================
//  QUIZ : Optique Géométrique
// ===============================
const quizData = [
  // I. Lois de l’optique géométrique
  { question: "1. Dans le vide, la lumière se propage à une vitesse :", answers: [
      { text: "Dépendant de la fréquence", correct: false, explanation: "Non, dans le vide la vitesse de la lumière est constante." },
      { text: "Dépendant de la direction de propagation", correct: false, explanation: "Non, elle est indépendante de la direction." },
      { text: "Constante, notée c = 3 × 10⁸ m·s⁻¹", correct: true, explanation: "Exact, c’est la vitesse de la lumière dans le vide." },
      { text: "Variable selon l’observateur", correct: false, explanation: "Non, elle est constante pour tous les observateurs dans le vide." }
  ]},
  { question: "2. L’approximation de l’optique géométrique est valable lorsque :", answers: [
      { text: "Les longueurs d’onde sont du même ordre que la taille des obstacles", correct: false, explanation: "Non, dans ce cas les effets de diffraction sont importants." },
      { text: "Les propriétés du milieu varient lentement devant λ", correct: true, explanation: "Exact, c’est la condition pour l’approximation géométrique." },
      { text: "La lumière est monochromatique", correct: false, explanation: "Non, la monochromaticité n’est pas suffisante." },
      { text: "L’intensité lumineuse est faible", correct: false, explanation: "Non, l’intensité n’est pas un critère." }
  ]},
  { question: "3. L’indice de réfraction d’un milieu est défini par :", answers: [
      { text: "n = λ/λ₀", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "n = c/v", correct: true, explanation: "Exact, indice = vitesse dans le vide / vitesse dans le milieu." },
      { text: "n = c·v", correct: false, explanation: "Non, c’est incorrect." },
      { text: "n = 1/λ", correct: false, explanation: "Non, ce n’est pas la définition de l’indice." }
  ]},
  { question: "4. D’après les lois de Snell-Descartes, pour la réfraction :", answers: [
      { text: "sin i₁ = sin i₂", correct: false, explanation: "Non, ce n’est vrai que si les indices sont égaux." },
      { text: "n₁ sin i₁ = n₂ sin i₂", correct: true, explanation: "Exact, c’est la loi de Snell-Descartes." },
      { text: "n₁/n₂ = i₁/i₂", correct: false, explanation: "Non, formule incorrecte." },
      { text: "i₁ = i₂", correct: false, explanation: "Non, sauf si les indices sont égaux." }
  ]},
  { question: "5. La réflexion totale interne peut se produire si :", answers: [
      { text: "n₁ < n₂", correct: false, explanation: "Non, il faut que la lumière passe d’un milieu plus réfringent à un moins réfringent." },
      { text: "i₁ < iℓ", correct: false, explanation: "Non, il faut que l’angle dépasse l’angle critique." },
      { text: "n₁ > n₂", correct: true, explanation: "Exact, réflexion totale interne possible si n₁ > n₂." },
      { text: "La lumière est polychromatique", correct: false, explanation: "Non, la polychromaticité n’a pas d’effet direct." }
  ]},
  // II. Les miroirs
  { question: "6. Un miroir plan donne une image :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact, l’image est droite et virtuelle." },
      { text: "Réelle et droite", correct: false, explanation: "Non, l’image n’est pas réelle." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non, elle est droite." }
  ]},
  { question: "7. Le miroir plan est :", answers: [
      { text: "Rigoureusement stigmatique et aplanétique", correct: true, explanation: "Exact, il ne présente ni aberration ni déformation." },
      { text: "Seulement aplanétique", correct: false, explanation: "Non, il est également stigmatique." },
      { text: "Seulement stigmatique", correct: false, explanation: "Non, il est également aplanétique." },
      { text: "Ni l’un ni l’autre", correct: false, explanation: "Non." }
  ]},
  { question: "8. Pour un miroir concave, le foyer est :", answers: [
      { text: "Situé au centre de la calotte", correct: false, explanation: "Non, c’est le centre de courbure." },
      { text: "Au sommet du miroir", correct: false, explanation: "Non, au sommet le rayon est nul." },
      { text: "À la moitié du rayon de courbure", correct: true, explanation: "Exact, F = R/2." },
      { text: "À l’infini", correct: false, explanation: "Non, uniquement pour miroir plan." }
  ]},
  { question: "9. La formule de conjugaison des miroirs sphériques (approx. de Gauss) est :", answers: [
      { text: "1/SA + 1/SA’ = 1/f", correct: true, explanation: "Exact, relation fondamentale des miroirs sphériques." },
      { text: "SA + SA’ = 2f", correct: false, explanation: "Non, incorrect." },
      { text: "1/SA – 1/SA’ = 1/f", correct: false, explanation: "Non." },
      { text: "SA × SA’ = f²", correct: false, explanation: "Non." }
  ]},
  { question: "10. Si l’objet est placé entre le foyer et un miroir concave, l’image est :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact, elle est droite et agrandie." },
      { text: "Réelle et droite", correct: false, explanation: "Non." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non." }
  ]},
  // III. Lentilles minces
  { question: "11. Une lentille convergente est caractérisée par :", answers: [
      { text: "Des bords plus épais que le centre", correct: false, explanation: "Non, c’est l’inverse." },
      { text: "Des bords plus minces que le centre", correct: true, explanation: "Exact, la lentille est plus épaisse au centre." },
      { text: "Un foyer virtuel", correct: false, explanation: "Non, foyer réel si lentille convergente." },
      { text: "Une vergence négative", correct: false, explanation: "Non, vergence positive." }
  ]},
  { question: "12. La vergence d’une lentille mince dans l’air vaut :", answers: [
      { text: "V = 1/f’", correct: true, explanation: "Exact, f’ en mètres, V en dioptries." },
      { text: "V = –1/f’", correct: false, explanation: "Non, négative pour lentilles divergentes." },
      { text: "V = n/f’", correct: false, explanation: "Non, formule incorrecte." },
      { text: "V = 1/nf", correct: false, explanation: "Non." }
  ]},
  { question: "13. La formule de Descartes pour les lentilles minces est :", answers: [
      { text: "1/OA + 1/OA’ = 1/f’", correct: false, explanation: "Non, c’est pour miroir." },
      { text: "1/OA’ – 1/OA = 1/f’", correct: true, explanation: "Exact, relation des lentilles minces." },
      { text: "OA + OA’ = f’", correct: false, explanation: "Non." },
      { text: "OA’/OA = f’", correct: false, explanation: "Non." }
  ]},
  { question: "14. Pour une lentille convergente, un objet réel entre F et O donne :", answers: [
      { text: "Une image réelle et renversée", correct: false, explanation: "Non, l’image est virtuelle." },
      { text: "Une image virtuelle et droite", correct: true, explanation: "Exact, agrandie et droite." },
      { text: "Une image réelle et droite", correct: false, explanation: "Non." },
      { text: "Pas d’image", correct: false, explanation: "Non." }
  ]},
  { question: "15. Pour une lentille divergente, l’image d’un objet réel est toujours :", answers: [
      { text: "Réelle et renversée", correct: false, explanation: "Non." },
      { text: "Virtuelle et droite", correct: true, explanation: "Exact, image droite et réduite." },
      { text: "Virtuelle et renversée", correct: false, explanation: "Non." },
      { text: "Réelle et droite", correct: false, explanation: "Non." }
  ]},
  // IV. Instruments d’optique
  { question: "16. Dans l’œil humain, la lentille principale est :", answers: [
      { text: "La pupille", correct: false, explanation: "Non, la pupille est un diaphragme." },
      { text: "La cornée", correct: false, explanation: "Non, la cornée contribue à la réfraction, mais cristallin = lentille principale." },
      { text: "Le cristallin", correct: true, explanation: "Exact, il focalise l’image sur la rétine." },
      { text: "La rétine", correct: false, explanation: "Non, c’est le détecteur." }
  ]},
  { question: "17. La loupe est utilisée :", answers: [
      { text: "Pour observer des objets lointains", correct: false, explanation: "Non." },
      { text: "Avec un objet placé entre le foyer et la lentille", correct: true, explanation: "Exact, permet une image virtuelle agrandie." },
      { text: "Avec un objet au-delà du foyer", correct: false, explanation: "Non." },
      { text: "Pour former une image réelle sur un écran", correct: false, explanation: "Non." }
  ]},
  { question: "18. La lunette astronomique donne :", answers: [
      { text: "Une image réelle et droite", correct: false, explanation: "Non, l’image est virtuelle et renversée." },
      { text: "Une image virtuelle et renversée", correct: true, explanation: "Exact." },
      { text: "Une image virtuelle et droite", correct: false, explanation: "Non." },
      { text: "Une image réelle et renversée", correct: false, explanation: "Non." }
  ]},
  { question: "19. L’appareil photo fonctionne selon :", answers: [
      { text: "Une lentille divergente", correct: false, explanation: "Non." },
      { text: "Une lentille convergente formant une image réelle", correct: true, explanation: "Exact." },
      { text: "Une lentille convergente formant une image virtuelle", correct: false, explanation: "Non." },
      { text: "Un miroir convexe", correct: false, explanation: "Non." }
  ]},
  { question: "20. Le microscope optique est constitué :", answers: [
      { text: "D’une seule lentille convergente", correct: false, explanation: "Non, il en a deux." },
      { text: "D’une lentille divergente et d’un miroir", correct: false, explanation: "Non." },
      { text: "De deux lentilles convergentes : objectif et oculaire", correct: true, explanation: "Exact." },
      { text: "De deux miroirs concaves", correct: false, explanation: "Non." }
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
  const leconActuelle = urlParams.get('lecon') || "Optique";

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
