document.addEventListener("DOMContentLoaded", async() => {
  const nomEl = document.getElementById("nomUtilisateur");
  const emailEl = document.getElementById("emailUtilisateur");

  // Si ces éléments n'existent pas ce n'est pas la page profil
  if (!nomEl || !emailEl) return;

  const{data:{user},error}=await supabaseClient.auth.getUser();

  if(error || !user){
    alert(" Veuillez vous connecter !");
    window.location.href = "authentification.html";
    return;
  }
  
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
      alert(" Déconnexion réussie !");
      window.location.href="authentification.html";
    });
  }
   /*
   *  ------------------------
   *   AFFICHAGE PROGRESSION
   *  ------------------------
   *  Table Supabase : progressions
   *  Colonnes : user_id, matiere, lecon, statut, score
   */

  const { data: progressData, error: progressError } = await supabaseClient
    .from("progressions")
    .select("*")
    .eq("user_id", user.id);

  if (progressError) {
    console.error("Erreur chargement progression :", progressError.message);
    return;
  }

  // Si aucune progression → ne rien afficher
  if (!progressData || progressData.length === 0) return;

  // Création du bloc progression
  const container = document.createElement("section");
  container.className = "progression-container";
  container.innerHTML = `
    <h3>Mes progrès</h3>
    <div id="coursProgression"></div>
  `;
  document.querySelector(".profile-container").after(container);

  const coursContainer = document.getElementById("coursProgression");
  coursContainer.innerHTML = "";

  // Grouper par matière
  const progressByCourse = {};
  progressData.forEach(p => {
    if (!progressByCourse[p.matiere]) progressByCourse[p.matiere] = [];
    progressByCourse[p.matiere].push(p);
  });

  // Affichage matière par matière
  for (const [matiere, lecons] of Object.entries(progressByCourse)) {
    const total = lecons.length;
    const terminees = lecons.filter(l => l.statut === "vu" || l.statut === "quiz_validé").length;
    const pourcentage = Math.round((terminees / total) * 100);

    const div = document.createElement("div");
    div.className = "cours-progress";
    div.innerHTML = `
      <h4>${matiere}</h4>
      <div class="progress-bar">
        <div class="progress" style="width:${pourcentage}%"></div>
      </div>
      <p>${terminees}/${total} leçons terminées (${pourcentage}%)</p>
    `;

    coursContainer.appendChild(div);
  }

});