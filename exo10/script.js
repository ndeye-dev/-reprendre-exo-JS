

// Demander à l'utilisateur de saisir deux nombres et compares les
let nombre1 = prompt("Entrez le premier nombre :");
let nombre2 = prompt("Entrez le deuxième nombre :");
nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);

if (nombre1 > nombre2) {
   document.write(`${nombre1} est plus grand que ${nombre2}.`);
} else if (nombre1 < nombre2) {
   document.write(`${nombre1} est plus petit que ${nombre2}.`);
} else {
   document.write(`${nombre1} est égal à ${nombre2}.`);
}
