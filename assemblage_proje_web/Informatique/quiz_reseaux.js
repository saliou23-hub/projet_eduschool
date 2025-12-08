// =====================================
//   QUIZ : Protocoles Réseaux TCP/IP
// =====================================
const quizData = [
  {
    question: "1. Quelle est la taille d’une adresse MAC dans un réseau Ethernet ?",
    answers: [
      { text: "16 bits", correct: false, explanation: "Non, trop court — les adresses MAC font 48 bits (6 octets)." },
      { text: "32 bits", correct: false, explanation: "Faux, ce format correspond à IPv4, pas MAC." },
      { text: "48 bits", correct: true, explanation: "Exact ! Les adresses MAC sont codées sur 48 bits (6 octets)." },
      { text: "64 bits", correct: false, explanation: "Non — seules certaines extensions utilisent 64 bits." }
    ]
  },
 
  {
    question: "2. Dans une adresse MAC, que signifie le bit I/G ?",
    answers: [
      { text: "Il indique si l’adresse est universelle ou locale", correct: false, explanation: "C’est le bit U/L qui indique cela." },
      { text: "Il indique si l’adresse est individuelle ou de groupe", correct: true, explanation: "Oui — I/G = Individuel (0) ou Groupe (1)." },
      { text: "Il identifie le constructeur", correct: false, explanation: "C’est la partie OUI qui identifie le constructeur." },
      { text: "Il indique si l’adresse est publique ou privée", correct: false, explanation: "Non, pas ce bit-là." }
    ]
  },/*
 
  {
    question: "3. Quelle valeur du champ « Type » dans une trame Ethernet correspond à IPv4 ?",
    answers: [
      { text: "512", correct: false, explanation: "Faux — 512 n’est pas un code Type standard." },
      { text: "2048", correct: true, explanation: "Oui — 2048 (0x0800) correspond à IPv4." },
      { text: "2054", correct: false, explanation: "Non — 2054 (0x0806) correspond à ARP." },
      { text: "32823", correct: false, explanation: "Inexistant dans les standards Ethernet DIX." }
    ]
  },
 
  {
    question: "4. Quelle est la longueur minimale d’une trame Ethernet valide ?",
    answers: [
      { text: "46 octets", correct: false, explanation: "C’est la taille minimale du champ données, pas de la trame complète." },
      { text: "64 octets", correct: true, explanation: "Exact — une trame doit faire au moins 64 octets (adresse dest → CRC)." },
      { text: "128 octets", correct: false, explanation: "Non — cela n’a pas de signification ici." },
      { text: "1500 octets", correct: false, explanation: "C’est la taille maximale des données (MTU), pas minimale." }
    ]
  },
 
  {
    question: "5. Quelle est la différence entre Ethernet DIX et 802.3 ?",
    answers: [
      { text: "802.3 utilise un champ longueur au lieu du champ type", correct: true, explanation: "Oui — 802.3 remplace le champ Type par un champ Longueur." },
      { text: "802.3 a un préambule plus long", correct: false, explanation: "Non, le préambule reste de 7 octets." },
      { text: "DIX utilise la sous-couche LLC", correct: false, explanation: "C’est 802.3 qui utilise la sous-couche LLC." },
      { text: "802.3 ne supporte pas le multicast", correct: false, explanation: "Si, 802.3 le supporte aussi." }
    ]
  },
 
  {
    question: "6. Quel outil permet de capturer et d’analyser des trames réseau en ligne de commande ?",
    answers: [
      { text: "Wireshark", correct: false, explanation: "Wireshark a une interface graphique, pas CLI." },
      { text: "Tcpdump", correct: true, explanation: "Exact — Tcpdump capture et analyse les trames en ligne de commande." },
      { text: "Nmap", correct: false, explanation: "Nmap est un scanner de ports, pas un sniffer." },
      { text: "Ping", correct: false, explanation: "Ping teste la connectivité, pas la capture." }
    ]
  },
 
  {
    question: "7. Quelle option de tcpdump limite le nombre de paquets capturés ?",
    answers: [
      { text: "-n", correct: false, explanation: "Non — -n désactive la résolution DNS." },
      { text: "-i", correct: false, explanation: "Non — -i définit l’interface à écouter." },
      { text: "-c", correct: true, explanation: "Oui — -c <nombre> limite le nombre de paquets capturés." },
      { text: "-X", correct: false, explanation: "Non — -X affiche le contenu hexadécimal." }
    ]
  },
 
  {
    question: "8. Quelle est l’adresse MAC utilisée pour une diffusion générale (broadcast) ?",
    answers: [
      { text: "00:00:00:00:00:00", correct: false, explanation: "Non — c’est une adresse nulle." },
      { text: "FF:FF:FF:FF:FF:FF", correct: true, explanation: "Exact — tous les bits à 1 = diffusion générale." },
      { text: "11:11:11:11:11:11", correct: false, explanation: "Non, aucune signification particulière." },
      { text: "AA:AA:AA:AA:AA:AA", correct: false, explanation: "Non, utilisée parfois à d’autres fins." }
    ]
  },
 
  {
    question: "9. À quoi sert le protocole ARP ?",
    answers: [
      { text: "À trouver l’adresse IP à partir du nom de domaine", correct: false, explanation: "C’est DNS qui fait cela." },
      { text: "À convertir une adresse IP en adresse MAC", correct: true, explanation: "Oui — ARP convertit l’adresse IP en adresse MAC." },
      { text: "À transmettre des fichiers sur le réseau", correct: false, explanation: "Non — ce serait FTP." },
      { text: "À vérifier la disponibilité d’un hôte", correct: false, explanation: "C’est ICMP (ping)." }
    ]
  },
 
  {
    question: "10. Quelle valeur du champ operation dans ARP indique une requête ?",
    answers: [
      { text: "0", correct: false, explanation: "Non — invalide pour ARP." },
      { text: "1", correct: true, explanation: "Exact — 1 = requête ARP, 2 = réponse ARP." },
      { text: "2", correct: false, explanation: "2 = réponse ARP." },
      { text: "3", correct: false, explanation: "Inexistant dans ARP standard." }
    ]
  },
 
  {
    question: "11. Quelle est la longueur d’une adresse IP IPv4 ?",
    answers: [
      { text: "16 bits", correct: false, explanation: "Non — trop court." },
      { text: "32 bits", correct: true, explanation: "Oui — IPv4 = adresses sur 32 bits (4 octets)." },
      { text: "48 bits", correct: false, explanation: "C’est l’adresse MAC qui fait 48 bits." },
      { text: "64 bits", correct: false, explanation: "C’est IPv6 qui utilise 128 bits." }
    ]
  },
 
  {
    question: "12. Quelle est la fonction principale de la couche réseau ?",
    answers: [
      { text: "Le contrôle d’erreurs", correct: false, explanation: "C’est le rôle de la couche liaison." },
      { text: "La conversion analogique-numérique", correct: false, explanation: "C’est la couche physique." },
      { text: "Le routage des paquets", correct: true, explanation: "Exact — la couche réseau gère le routage IP." },
      { text: "L’encapsulation physique", correct: false, explanation: "Ce n’est pas la bonne couche." }
    ]
  },
 
  {
    question: "13. Que représente le champ TTL (Time To Live) d’un paquet IP ?",
    answers: [
      { text: "Le temps d’attente maximum avant réponse", correct: false, explanation: "Non — rien à voir." },
      { text: "Le nombre de sauts maximum avant destruction du paquet", correct: true, explanation: "Oui — décrémenté à chaque routeur." },
      { text: "La priorité de la trame", correct: false, explanation: "Non." },
      { text: "Le nombre de fragments", correct: false, explanation: "Ne correspond pas à TTL." }
    ]
  },
 
  {
    question: "14. Quelle est la taille maximale d’un paquet IP (MTU standard Ethernet) ?",
    answers: [
      { text: "512 octets", correct: false, explanation: "Non — c’est trop petit." },
      { text: "1024 octets", correct: false, explanation: "Incorrect." },
      { text: "1500 octets", correct: true, explanation: "Exact — MTU standard Ethernet = 1500 octets." },
      { text: "65535 octets", correct: false, explanation: "C’est la taille max d’un paquet IP fragmenté." }
    ]
  },
 
  {
    question: "15. Quel protocole est utilisé pour signaler une erreur réseau, comme TTL expiré ?",
    answers: [
      { text: "ARP", correct: false, explanation: "Non — ARP sert à résoudre IP→MAC." },
      { text: "ICMP", correct: true, explanation: "Exact — ICMP signale les erreurs et diagnostics (Echo, TTL, unreachable…)." },
      { text: "UDP", correct: false, explanation: "Non — transport non fiable." },
      { text: "DNS", correct: false, explanation: "Nom de domaine, pas erreurs réseau." }
    ]
  },
 
  {
    question: "16. Quelle commande utilise ICMP pour tester la connectivité entre deux hôtes ?",
    answers: [
      { text: "Nslookup", correct: false, explanation: "Utilisé pour DNS." },
      { text: "Telnet", correct: false, explanation: "Utilisé pour tester un port." },
      { text: "Ping", correct: true, explanation: "Oui — ping envoie des requêtes ICMP Echo." },
      { text: "Curl", correct: false, explanation: "HTTP, pas ICMP." }
    ]
  },
 
  {
    question: "17. Le protocole UDP est :",
    answers: [
      { text: "Fiable et orienté connexion", correct: false, explanation: "C’est TCP qui fonctionne ainsi." },
      { text: "Non fiable et sans connexion", correct: true, explanation: "Exact — UDP n’assure ni fiabilité ni retransmission." },
      { text: "Fiable et avec contrôle d’erreur", correct: false, explanation: "Pas UDP." },
      { text: "Utilisé uniquement pour le routage", correct: false, explanation: "Non." }
    ]
  },
 
  {
    question: "18. Le protocole TCP fournit :",
    answers: [
      { text: "Un service de diffusion", correct: false, explanation: "TCP ne fait pas de broadcast." },
      { text: "Un service sans connexion", correct: false, explanation: "Non — c’est UDP." },
      { text: "Un service orienté connexion et fiable", correct: true, explanation: "Oui — TCP assure fiabilité, ordre et retransmission." },
      { text: "Un service pour la couche physique", correct: false, explanation: "Totalement faux." }
    ]
  },
 
  {
    question: "19. Dans le protocole HTTP, le port standard utilisé par le serveur est :",
    answers: [
      { text: "20", correct: false, explanation: "C’est FTP data." },
      { text: "21", correct: false, explanation: "C’est FTP control." },
      { text: "25", correct: false, explanation: "C’est SMTP." },
      { text: "80", correct: true, explanation: "Exact — HTTP = port 80 (HTTPS = 443)." }
    ]
  },*/
 
  {
    question: "20. Quelle sous-couche du modèle IEEE 802 s’occupe du contrôle d’accès au médium ?",
    answers: [
      { text: "LLC", correct: false, explanation: "LLC = logique, pas accès au médium." },
      { text: "MAC", correct: true, explanation: "Exact — la sous-couche MAC gère l’accès au support partagé." },
      { text: "IP", correct: false, explanation: "IP = couche réseau." },
      { text: "TCP", correct: false, explanation: "TCP = transport." }
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
const leconsMatiere = ["Réseaux","Programmation", "Bases de données"];
 
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
 
/// ===============================
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
  const leconActuelle = urlParams.get('lecon') || "Réseaux";
 
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
 