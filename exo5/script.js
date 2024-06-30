

// Demander à l'utilisateur de saisir une lettre
let lettre = prompt("Entrez une lettre :");

// Convertir la lettre en minuscule pour simplifier la vérification
lettre = lettre.toLowerCase();

// Vérifier si la lettre est une voyelle ou une consonne
if (lettre.length === 1 && /^[a-zA-Z]$/.test(lettre)) {
    if (lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u") {
        console.log("La lettre " + lettre + " est une voyelle.");
    } else {
        console.log("La lettre " + lettre + " est une consonne.");
    }
} else {
    console.log("Veuillez entrer une seule lettre de l'alphabet.");
}
