var mot = prompt("entre something :");

console.log("the name " + mot + " contains " + mot.length + " character");
console.log("in lower case give:" + mot.toLowerCase());
console.log("in upper case give:" + mot.toUpperCase());

var countC = 0;
var countV = 0;

function isVoyelle(c) {
	if (c === 'a' || c === 'e' || c === 'y' || c === 'u' || c === 'i' || c === 'o')
		return (true);
	return (false);
}

function inverse(str) {
	var s = new String();
	for (var i = 0; i < str.length; i++) {
		s = s + (str.charAt(str.length - i - 1));
	}
	return (s);
}

function palindorme(str) {
	str = str.toLowerCase();
	console.log("type :" + str.type);
	for (var i = 0; i < str.length / 2; i++) {
		if (str.charAt(i) !== str.charAt(str.length - 1 - i))
			return (false);
	}
	return (true);
}

function findLetterLeet(char) {
	switch (char) {
		case "a":
			return ("4");
		case "b":
			return ("8");
		case "e":
			return ("3");
		case "l":
			return ("1");
		case "o":
			return ("0");
		case "s":
			return ("5");
		default:
			return (char);
	}
}

function convToLeetSpeak(str) {
	str = str.toLowerCase();
	var res = new String();
	for (var i = 0; i < str.length; i++) {
		res += findLetterLeet(str[i]);
	}
	return (res);
}

var count = mot.toLowerCase();
for (var i = 0; i < count.length; i++) {
	var char = count.charAt(i);
	if (isVoyelle(char))
		countV++;
	else
		countC++;
}

console.log("il contient " + countC + " consonne, " + countV + " voyelle");
console.log("in reverse :" + inverse(mot));
if (palindorme(mot))
	console.log("est un palindrome");
else
	console.log("n'est pas u palindrome");
console.log("to leet :" + convToLeetSpeak(mot));
