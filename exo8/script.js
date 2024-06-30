
// Demander à l'utilisateur de saisir son âge actuel
let ageActuel = prompt("Entrez votre âge actuel :");
ageActuel = parseInt(ageActuel); // Conversion en nombre entier (utilisation de parseInt)
let joursAVivre = prompt("Entrez le nombre de jours que vous souhaitez vivre :");
joursAVivre = parseInt(joursAVivre); // Conversion en nombre entier
let dateActuelle = new Date();
let anneeActuelle = dateActuelle.getFullYear(); // Récupérer l'année actuelle depuis l'objet Date
let anneeFinale = anneeActuelle + Math.ceil(joursAVivre / 365); // Math.ceil pour arrondir à l'année supérieure

console.log(`Vous atteindrez l'âge de ${ageActuel} ans en l'an ${anneeFinale}.`);
