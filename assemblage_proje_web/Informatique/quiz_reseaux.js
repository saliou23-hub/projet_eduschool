// =====================================
//   QUIZ : Protocoles Réseaux TCP/IP
// =====================================
const quizData = [
  { question: "1. Quelle est la taille d’une adresse MAC dans un réseau Ethernet ?", answers: [
      { text: "16 bits", correct: false, explanation: "Non, trop court — les adresses MAC font 48 bits (6 octets)." },
      { text: "32 bits", correct: false, explanation: "Faux, ce format correspond à IPv4, pas MAC." },
      { text: "48 bits", correct: true, explanation: "Exact ! Les adresses MAC sont codées sur 48 bits (6 octets)." },
      { text: "64 bits", correct: false, explanation: "Non — seules certaines extensions utilisent 64 bits." }
  ]},
  { question: "2. Dans une adresse MAC, que signifie le bit I/G ?", answers: [
      { text: "Il indique si l’adresse est universelle ou locale", correct: false, explanation: "C’est le bit U/L qui indique cela." },
      { text: "Il indique si l’adresse est individuelle ou de groupe", correct: true, explanation: "Oui — I/G = Individuel (0) ou Groupe (1)." },
      { text: "Il identifie le constructeur", correct: false, explanation: "C’est la partie OUI qui identifie le constructeur." },
      { text: "Il indique si l’adresse est publique ou privée", correct: false, explanation: "Non, pas ce bit-là." }
  ]},
  { question: "3. Quelle valeur du champ « Type » dans une trame Ethernet correspond à IPv4 ?", answers: [
      { text: "512", correct: false, explanation: "Faux — 512 n’est pas un code Type standard." },
      { text: "2048", correct: true, explanation: "Oui — 2048 (0x0800) correspond à IPv4." },
      { text: "2054", correct: false, explanation: "Non — 2054 (0x0806) correspond à ARP." },
      { text: "32823", correct: false, explanation: "Inexistant dans les standards Ethernet DIX." }
  ]},
  { question: "4. Quelle est la longueur minimale d’une trame Ethernet valide ?", answers: [
      { text: "46 octets", correct: false, explanation: "C’est la taille minimale du champ données, pas de la trame complète." },
      { text: "64 octets", correct: true, explanation: "Exact — une trame doit faire au moins 64 octets (adresse dest → CRC)." },
      { text: "128 octets", correct: false, explanation: "Non — cela n’a pas de signification ici." },
      { text: "1500 octets", correct: false, explanation: "C’est la taille maximale des données (MTU), pas minimale." }
  ]},
  { question: "5. Quelle est la différence entre Ethernet DIX et 802.3 ?", answers: [
      { text: "802.3 utilise un champ longueur au lieu du champ type", correct: true, explanation: "Oui — 802.3 remplace le champ Type par un champ Longueur." },
      { text: "802.3 a un préambule plus long", correct: false, explanation: "Non, le préambule reste de 7 octets." },
      { text: "DIX utilise la sous-couche LLC", correct: false, explanation: "C’est 802.3 qui utilise la sous-couche LLC." },
      { text: "802.3 ne supporte pas le multicast", correct: false, explanation: "Si, 802.3 le supporte aussi." }
  ]},
  { question: "6. Quel outil permet de capturer et d’analyser des trames réseau en ligne de commande ?", answers: [
      { text: "Wireshark", correct: false, explanation: "Wireshark a une interface graphique, pas CLI." },
      { text: "Tcpdump", correct: true, explanation: "Exact — Tcpdump capture et analyse les trames en ligne de commande." },
      { text: "Nmap", correct: false, explanation: "Nmap est un scanner de ports, pas un sniffer." },
      { text: "Ping", correct: false, explanation: "Ping teste la connectivité, pas la capture." }
  ]},
  { question: "7. Quelle option de tcpdump limite le nombre de paquets capturés ?", answers: [
      { text: "-n", correct: false, explanation: "Non — -n désactive la résolution DNS." },
      { text: "-i", correct: false, explanation: "Non — -i définit l’interface à écouter." },
      { text: "-c", correct: true, explanation: "Oui — -c <nombre> limite le nombre de paquets capturés." },
      { text: "-X", correct: false, explanation: "Non — -X affiche le contenu hexadécimal." }
  ]},
  { question: "8. Quelle est l’adresse MAC utilisée pour une diffusion générale (broadcast) ?", answers: [
      { text: "00:00:00:00:00:00", correct: false, explanation: "Non — c’est une adresse nulle." },
      { text: "FF:FF:FF:FF:FF:FF", correct: true, explanation: "Exact — tous les bits à 1 = diffusion générale." },
      { text: "11:11:11:11:11:11", correct: false, explanation: "Non, aucune signification particulière." },
      { text: "AA:AA:AA:AA:AA:AA", correct: false, explanation: "Non, utilisée parfois à d’autres fins." }
  ]},
  { question: "9. À quoi sert le protocole ARP ?", answers: [
      { text: "À trouver l’adresse IP à partir du nom de domaine", correct: false, explanation: "C’est DNS qui fait cela." },
      { text: "À convertir une adresse IP en adresse MAC", correct: true, explanation: "Oui — ARP convertit l’adresse IP en adresse MAC." },
      { text: "À transmettre des fichiers sur le réseau", correct: false, explanation: "Non — ce serait FTP." },
      { text: "À vérifier la disponibilité d’un hôte", correct: false, explanation: "C’est ICMP (ping)." }
  ]},
  { question: "10. Quelle valeur du champ operation dans ARP indique une requête ?", answers: [
      { text: "0", correct: false },
      { text: "1", correct: true, explanation: "Exact — 1 = requête ARP, 2 = réponse ARP." },
      { text: "2", correct: false },
      { text: "3", correct: false }
  ]},
  { question: "11. Quelle est la longueur d’une adresse IP IPv4 ?", answers: [
      { text: "16 bits", correct: false },
      { text: "32 bits", correct: true, explanation: "Oui — IPv4 = adresses sur 32 bits (4 octets)." },
      { text: "48 bits", correct: false },
      { text: "64 bits", correct: false }
  ]},
  { question: "12. Quelle est la fonction principale de la couche réseau ?", answers: [
      { text: "Le contrôle d’erreurs", correct: false },
      { text: "La conversion analogique-numérique", correct: false },
      { text: "Le routage des paquets", correct: true, explanation: "Exact — la couche réseau gère le routage IP." },
      { text: "L’encapsulation physique", correct: false }
  ]},
  { question: "13. Que représente le champ TTL (Time To Live) d’un paquet IP ?", answers: [
      { text: "Le temps d’attente maximum avant réponse", correct: false },
      { text: "Le nombre de sauts maximum avant destruction du paquet", correct: true, explanation: "Oui — décrémenté à chaque routeur." },
      { text: "La priorité de la trame", correct: false },
      { text: "Le nombre de fragments", correct: false }
  ]},
  { question: "14. Quelle est la taille maximale d’un paquet IP (MTU standard Ethernet) ?", answers: [
      { text: "512 octets", correct: false },
      { text: "1024 octets", correct: false },
      { text: "1500 octets", correct: true, explanation: "Exact — MTU standard Ethernet = 1500 octets." },
      { text: "65535 octets", correct: false }
  ]},
  { question: "15. Quel protocole est utilisé pour signaler une erreur réseau, comme TTL expiré ?", answers: [
      { text: "ARP", correct: false },
      { text: "ICMP", correct: true, explanation: "Exact — ICMP signale les erreurs et les diagnostics (Echo, TTL, unreachable…)." },
      { text: "UDP", correct: false },
      { text: "DNS", correct: false }
  ]},
  { question: "16. Quelle commande utilise ICMP pour tester la connectivité entre deux hôtes ?", answers: [
      { text: "Nslookup", correct: false },
      { text: "Telnet", correct: false },
      { text: "Ping", correct: true, explanation: "Oui — ping envoie des requêtes ICMP Echo." },
      { text: "Curl", correct: false }
  ]},
  { question: "17. Le protocole UDP est :", answers: [
      { text: "Fiable et orienté connexion", correct: false },
      { text: "Non fiable et sans connexion", correct: true, explanation: "Exact — UDP n’assure ni fiabilité ni retransmission." },
      { text: "Fiable et avec contrôle d’erreur", correct: false },
      { text: "Utilisé uniquement pour le routage", correct: false }
  ]},
  { question: "18. Le protocole TCP fournit :", answers: [
      { text: "Un service de diffusion", correct: false },
      { text: "Un service sans connexion", correct: false },
      { text: "Un service orienté connexion et fiable", correct: true, explanation: "Oui — TCP assure fiabilité, ordre et retransmission." },
      { text: "Un service pour la couche physique", correct: false }
  ]},
  { question: "19. Dans le protocole HTTP, le port standard utilisé par le serveur est :", answers: [
      { text: "20", correct: false },
      { text: "21", correct: false },
      { text: "25", correct: false },
      { text: "80", correct: true, explanation: "Exact — HTTP = port 80 (HTTPS = 443)." }
  ]},
  { question: "20. Quelle sous-couche du modèle IEEE 802 s’occupe du contrôle d’accès au médium ?", answers: [
      { text: "LLC", correct: false },
      { text: "MAC", correct: true, explanation: "Exact — la sous-couche MAC gère l’accès au support partagé." },
      { text: "IP", correct: false },
      { text: "TCP", correct: false }
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
  const leconActuelle = urlParams.get('lecon') || "Réseaux";

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
  resultEl.innerHTML += `<p> Vous pouvez passer à la leçon suivante :</p>
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
