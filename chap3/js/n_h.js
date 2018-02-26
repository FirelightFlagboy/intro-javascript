var ih = prompt("entre a hour :");
var im = prompt("entre a minute :");
var is = prompt("entre a seconde :");

var h = Number(ih);
var m = Number(im);
var s = Number(is);

var er = 0;

while (er <= 4) {
	console.log(er);
	er++;
}

for (er = 1; er < 5; er++) {
	console.log("er:" + er);
}
er = 0;

function add_hour() {
	var sec = h * 3600 + m * 60 + s;
	sec++;
	h = Math.floor(sec / 3600);
	sec %= 3600;
	m = Math.floor(sec / 60);
	sec %= 60;
	s = sec;
	if (h === 24)
		h = 0;
}

if (h < 0 || h > 23) {
	console.log("error hour must be between 0 and 23");
	er = 1;
}
if (m < 0 || m > 59) {
	console.log("error minute must be between 0 and 59");
	er = 1;
}
if (s < 0 || s > 59) {
	console.log("error seconde must be between 0 and 59");
	er = 1;
}

if (er === 0) {
	add_hour();
	console.log(h + "h" + m + "m" + s + "s");
}
