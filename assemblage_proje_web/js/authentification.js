document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  if (!loginBtn) return; // Si on n'est pas sur la page de connexion → on sort

  loginBtn.addEventListener("click", async(e) => {
    e.preventDefault();

    const email = document.getElementById("Identifiantinput").value.trim();
    const motdepasse = document.getElementById("mdpinput").value.trim();

    //const user = JSON.parse(localStorage.getItem("utilisateur"));
    if(!email || !motdepasse){
      alert("Veuillez remplir tous les champs !");
      return;
    }
    try {
      const{data, error}=await supabaseClient.auth.signInWithPassword({
        email,
        password: motdepasse,
      });
      if(error){
        alert("❌ Identifiants incorrects : " +error.message);
        return;
      }
      const user= data.user;
      if(!user){
        alert("erreur : utilisateur introuvable !");
        return;
      }
      sessionStorage.setItem("user",JSON.stringify(user));
      alert("✅ Connexion réussie !");
      window.location.href="profil.html"
    }catch(err){
      console.error(err);
      alert("Erreur inatendue :" +err.message);
    }
    
    
    
    /*if (!user) {
      alert("Aucun utilisateur inscrit !");
      return;
    }

    if (email === user.email && motdepasse === user.motdepasse) {
      // Crée une session active
      sessionStorage.setItem("connecte", "true");
      alert("✅ Connexion réussie !");
      window.location.href = "profil.html";
    } else {
      alert("❌ Identifiants incorrects !");
    }*/
  });
});