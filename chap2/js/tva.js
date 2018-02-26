var tva = 0.196;

var v = prompt("enter a price :");
v = Number(v);

var ttc = v * (tva + 1);
console.log("le prix : " + v + " a la tva : " + tva + " done : " + ttc);
