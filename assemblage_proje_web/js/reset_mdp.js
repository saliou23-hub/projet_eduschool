const supabaseClient= supabaseClient(
    "https://ppmyxgqyuetqozqzxsoz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbXl4Z3F5dWV0cW96cXp4c296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjMzNTYsImV4cCI6MjA3ODIzOTM1Nn0.Yyd8tJ5oc4qv1kBSWPCpzWIeLVvJORKXuzj5Qyvmtiw"
);
async function updatePassword() {
    const password= document.getElementById("password").value;

    const {data ,error}=await supabaseClient.auth.updateUser({
        password:password
    });

    if(error){
        alert("Erreur: " +error.message);
    }else{
     alert("Votre mot de passe a été mis à jour !");
     window.location.href="authentification.html"   
    }
    
}