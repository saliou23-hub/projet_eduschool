document.addEventListener("DOMContentLoaded", () => {
  const formInscription = document.getElementById("registerForm");
  if (!formInscription) return; // Si on n'est pas sur la page inscription.html

  formInscription.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value.trim();

    // Vérifie les champs
    if (!nom || !email || !motdepasse) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // ✅ Création du compte utilisateur
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: motdepasse,
        options: {
          data: { full_name: nom }, // enregistre dans user_metadata
        },
      });

      if (error) {
        alert("Erreur : " + error.message);
        return;
      }

      const user = data.user;
      if (!user) {
        // Cas où la vérification d’email est activée (user pas encore actif)
        alert("Inscription réussie ! Vérifiez votre email pour activer votre compte.");
        window.location.href = "authentification.html";
        return;
      }

      // ✅ Insertion d'informations supplémentaires dans la table profiles
      const { error: insertError } = await supabaseClient
        .from("profiles")
        .insert([
          {
            id: user.id,
            username: nom,
            created_at: new Date(),
          },
        ]);

      if (insertError) {
        alert("Erreur lors de la sauvegarde du profil : " + insertError.message);
        return;
      }

      alert("✅ Inscription réussie !");
      window.location.href = "authentification.html";
    } catch (err) {
      console.error(err);
      alert("Erreur inattendue : " + err.message);
    }
  });
});
