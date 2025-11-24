document.addEventListener("DOMContentLoaded", async() => {
  const nomEl = document.getElementById("nomUtilisateur");
  const emailEl = document.getElementById("emailUtilisateur");

  // Si ces éléments n'existent pas → ce n'est pas la page profil
  if (!nomEl || !emailEl) return;

  //const user = JSON.parse(localStorage.getItem("utilisateur"));
  //const connecte = sessionStorage.getItem("connecte");
  const{data:{user},error}=await supabaseClient.auth.getUser();

  if(error || !user){
    alert("⚠️ Veuillez vous connecter !");
    window.location.href = "authentification.html";
    return;
  }
  // Redirige si non connecté
  /*if (!user || !connecte) {
    alert("⚠️ Veuillez vous connecter !");
    window.location.href = "authentification.html";
    return;
  }*/

  // Affiche les infos utilisateur
  //nomEl.textContent = user.nom;
  emailEl.textContent = user.email;

  const{data: profile,error: profileError }=await supabaseClient
    .from("profiles")
    .select("username")
    .eq("id",user.id)
    .single();

    if(profileError){
      console.error("Erreur chargement profil :", profileError.message);
      nomEl.textContent="Utilisateur";
    }
    else{
      nomEl.textContent=profile?.username || "utilisateur";
    }
  // Gère la déconnexion (ton lien dans le menu)
  const lienDeconnexion = document.querySelector('a[href="authentification.html"]');
  if (lienDeconnexion) {
    lienDeconnexion.addEventListener("click", async(e) => {
      e.preventDefault();
      await supabaseClient.auth.signOut();
      alert("👋 Déconnexion réussie !");
      window.location.href="authentification.html";
    });
  }
  /*if (lienDeconnexion) {
    lienDeconnexion.addEventListener("click", () => {
      sessionStorage.removeItem("connecte");
      alert("👋 Déconnexion réussie !");
    });
  }*/
});