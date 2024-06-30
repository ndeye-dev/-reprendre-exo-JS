

// Demander à l'utilisateur de saisir un nombre et si il est positif , negatif ou nul
let nombre = prompt("Entrez un nombre :");
nombre = parseInt(nombre); 
if (nombre > 0) {
    alert("Le nombre saisi est positif.");
} else if (nombre < 0) {
    alert("Le nombre saisi est négatif.");
} else {
    alert("Le nombre saisi est nul.");
}
