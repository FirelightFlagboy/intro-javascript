console.log("bonjour");

var nb_m = prompt("entre a number between 1 and 12  :");
var i_m = Number(nb_m);

function main() {
	if (i_m === 2)
		console.log("29 jour");
	else if (i_m % 2 == 0)
		console.log("31 jour");
	else
		console.log("30 jour")
}

if (i_m >= 1 && i_m <= 12)
	main();
else
	console.log("error the number must be between 1 and 12");
