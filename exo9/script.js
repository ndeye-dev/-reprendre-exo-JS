
// Demander à l'utilisateur de saisir un nombre
let nombre = prompt("Entrez un nombre pour calculer sa factorielle :");
nombre = parseInt(nombre); // Conversion en nombre entier

// Vérifier si l'entrée est valide (nombre positif)
if (nombre < 0) {
    console.log("Erreur : Veuillez saisir un nombre positif.");
} else {
    let factorielle = 1;
    for (let i = 2; i <= nombre; i++) {
        factorielle *= i;
    }

    console.log(`La factorielle de ${nombre} est : ${factorielle}`);
}
