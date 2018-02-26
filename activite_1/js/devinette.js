/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
/*
 ** pour changer la difficulter
 ** il s'uffit d'augmenter/diminuer la var 'life_max'
 */
var life_max = 6;
var life = 0;

if (life_max <= 0)
	life_max = 1 //faut a moins avoir une tentative

while (life < life_max) {
	var ok = 0;
	while (ok === 0) {
		var input = Number(prompt("saisisser un numbre entre 0 et 100"));
		if (input >= 0 && input <= 100)
			ok = 1;
	}
	if (input === solution) {
		console.log("Bravo ! La solution etait " + solution);
		break;
	} else if (input < solution)
		console.log(input + " est trop petit");
	else
		console.log(input + " est trop grand");
	life++;
}

if (life >= life_max) {
	console.log("Dommage vous n'avez plus de vie,\nLa solution était " + solution);
} else {
	console.log((life + 1) + " essaie");
}
