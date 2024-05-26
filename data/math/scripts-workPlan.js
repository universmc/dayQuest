function afficherPlanDeTravail(plan) {
    for (const pas of plan.steps) {
      console.log(`Pas : ${pas.description}`);
      console.log("Détails :");
      for (const detail of pas.details) {
        console.log("- " + detail);
      }
      console.log("");
    }
  }
  
  // Chargement du fichier JSON et affichage du plan de travail
  fetch('scripts-workPlan.json')
    .then(response => response.json())
    .then(data => {
      afficherPlanDeTravail(data);
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
  