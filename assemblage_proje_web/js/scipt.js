const supabaseClient = supabase.createClient(
  "https://ppmyxgqyuetqozqzxsoz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbXl4Z3F5dWV0cW96cXp4c296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjMzNTYsImV4cCI6MjA3ODIzOTM1Nn0.Yyd8tJ5oc4qv1kBSWPCpzWIeLVvJORKXuzj5Qyvmtiw"
);


// ----------------------
// CHARGER LES QUESTIONS
// ----------------------
async function loadQuestions() {
  const { data, error } = await supabaseClient
    .from("contact_questions")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("faq-dynamic");

  if (error) {
    container.innerHTML = "<p>Erreur lors du chargement.</p>";
    return;
  }

  container.innerHTML = ""; // vider l'affichage

  for (const q of data) {
    const item = document.createElement("details");
    item.classList.add("faq-item");

    const summary = document.createElement("summary");
    summary.textContent = `${q.sujet} — demandé par ${q.nom}`;

    const questionText = document.createElement("p");
    questionText.textContent = q.question;

    // Zone où les réponses seront affichées
    const reponsesContainer = document.createElement("div");
    reponsesContainer.className = "reponses-container";

    // Bouton répondre
    const btnRepondre = document.createElement("button");
    btnRepondre.textContent = "Répondre";
    btnRepondre.className = "btn-repondre";
    

    // Formulaire caché
    const form = document.createElement("div");
    form.className = "reponse-form";
    form.style.display = "none";

    form.innerHTML = `
      <input type="text" id="rep-nom-${q.id}" placeholder="Votre nom" style="width:100%;margin:6px 0;">
      <textarea id="rep-texte-${q.id}" placeholder="Votre réponse" style="width:100%;height:80px"></textarea>
      <button class="btn-envoyer">Envoyer la réponse</button>
    `;
    const btnEnvoyer=form.querySelector(".btn-envoyer");
    btnEnvoyer.addEventListener("click", () =>envoyerReponse(q.id));
    btnRepondre.onclick = () => {
      form.style.display = form.style.display === "block" ? "none" : "block";
    };

    item.appendChild(summary);
    item.appendChild(questionText);
    item.appendChild(reponsesContainer);
    item.appendChild(btnRepondre);
    item.appendChild(form);

    container.appendChild(item);

    
    loadReponses(q.id, reponsesContainer);
  }
}


// ----------------------
// CHARGER LES RÉPONSES
// ----------------------
async function loadReponses(question_id, container) {
  const { data, error } = await supabaseClient
    .from("faq_reponses")
    .select("*")
    .eq("question_id", question_id)
    .order("created_at", { ascending: true });

  if (error) return;

  container.innerHTML = "";

  data.forEach(rep => {
    const p = document.createElement("p");
    p.style.marginTop = "10px";
    p.innerHTML = `<strong>${rep.nom} :</strong> ${rep.reponse}`;
    container.appendChild(p);
  });
}


// ----------------------
// ENVOYER UNE RÉPONSE
// ----------------------
async function envoyerReponse(question_id) {
  const nom = document.getElementById(`rep-nom-${question_id}`).value;
  const texte = document.getElementById(`rep-texte-${question_id}`).value;

  if (!nom || !texte) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const { error } = await supabaseClient
    .from("faq_reponses")
    .insert([
      { question_id, nom, reponse: texte }
    ]);

  if (error) {
    alert("Erreur lors de l'envoi.");
    return;
  }

  alert("Réponse envoyée !");
  loadQuestions(); // refresh
}


loadQuestions();
