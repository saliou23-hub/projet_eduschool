
    // Fonction pour afficher une section à la fois
    /*function afficherEtape(numero) {
      // On cache toutes les sections
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

      // On affiche la section demandée
      document.getElementById('etape' + numero).classList.add('active');
    }

    function fin() {
      alert("Mot de passe réinitialisé avec succès ✅");
      location.reload(); // recharge la page (facultatif)
    }*/
   const supabaseClient = supabase.createClient(
    "https://ppmyxgqyuetqozqzxsoz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbXl4Z3F5dWV0cW96cXp4c296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjMzNTYsImV4cCI6MjA3ODIzOTM1Nn0.Yyd8tJ5oc4qv1kBSWPCpzWIeLVvJORKXuzj5Qyvmtiw"
);

  async function envoyerReset() {
    
  const email=document.getElementById("email").value;
   if(!email){
    alert("Veuillez entrer votre adresse mail.");
    return;
   }

   const{ data, error}=await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost/reset_mdp.html"
   });

   if(error){
    alert("Erreur :" +error.message);
   }else{
    alert("Un email de réinitialisation a été envoyé !")
   }
 } 