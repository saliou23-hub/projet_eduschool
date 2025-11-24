// Init Supabase
const supabaseClient = supabase.createClient(
 "https://ppmyxgqyuetqozqzxsoz.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbXl4Z3F5dWV0cW96cXp4c296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjMzNTYsImV4cCI6MjA3ODIzOTM1Nn0.Yyd8tJ5oc4qv1kBSWPCpzWIeLVvJORKXuzj5Qyvmtiw"
);

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  //const nom = document.getElementById("nom").value;
  //const question = document.getElementById("question").value;

  const nom = e.target.nom.value;
  const question = e.target.questions.value;
  const { error } = await supabaseClient
    .from("faq_questions")
    .insert([{ nom: nom, question: question }]);
  
  if (error) {
    alert("Erreur : " + error.message);
  } else {
    alert("Votre question a été envoyée !");
    e.target.reset();
  }
});