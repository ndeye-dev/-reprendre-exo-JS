


function longueursDesChaines(tableau) {
    // Initialiser un tableau pour stocker les longueurs des chaînes
    let longueurs = [];

    // Parcourir le tableau d'entrée et calculer les longueurs
    for (let i = 0; i < tableau.length; i++) {
        // Récupérer la longueur de la chaîne à l'indice i et la stocker dans le tableau longueurs
        longueurs.push(tableau[i].length);
    }

    // Retourner le tableau contenant les longueurs des chaînes
    return longueurs;
}

// Exemple d'utilisation de la fonction
let tableauDeChaines = ["Hello", "Bonjour", "Hola", "Ciao"];

let longueurs = longueursDesChaines(tableauDeChaines);
console.log("Longueurs des chaînes :", longueurs);
