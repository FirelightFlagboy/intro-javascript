var input = prompt("entre a day :");

input = input.toLowerCase();
switch (input) {
	case "lundi":
		console.log("mardi");
		break;
	case "mardi":
		console.log("mercredi");
		break;
	case "mercredi":
		console.log("jeudi");
		break;
	case "jeudi":
		console.log("vendredi");
		break;
	case "vendredi":
		console.log("samedi");
		break;
	case "samedi":
		console.log("dimanche");
		break;
	case "dimanche":
		console.log("lundi");
		break;
	default:
		console.log("error " + input + " not a day");
}
