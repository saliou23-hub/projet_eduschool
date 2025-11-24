// Init Supabase
const supabaseClient = supabase.createClient(
  "https://ppmyxgqyuetqozqzxsoz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbXl4Z3F5dWV0cW96cXp4c296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjMzNTYsImV4cCI6MjA3ODIzOTM1Nn0.Yyd8tJ5oc4qv1kBSWPCpzWIeLVvJORKXuzj5Qyvmtiw"
);


async function loadQuestions() {
  const { data, error } = await supabaseClient
    .from("faq_questions")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("faq-list");

  if (error) {
    container.innerHTML = "<p>Erreur lors du chargement.</p>";
    return;
  }

  let html = "";
  data.forEach(item => {
    html += `
      <div style="margin-bottom: 20px;">
        <h3>${item.nom} a demandé :</h3>
        <p>${item.question}</p>
        <small>Posté le : ${new Date(item.created_at).toLocaleString()}</small>
        <hr>
      </div>
    `;
  });

  container.innerHTML = html;
}

loadQuestions();
