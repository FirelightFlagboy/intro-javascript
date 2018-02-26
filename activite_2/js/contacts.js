/*
Activité : gestion des contacts
*/

var contacts = {
    // init function
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // describe function
    describe: function() {
        return ("nom : " + this.nom + ", prenom : " + this.prenom);
    },
}

var carole = Object.create(contacts);
var melodi = Object.create(contacts);

carole.init("Lévisse", "Carole");
melodi.init("Nelsonne", "Mélodie");

var tabContact = [carole, melodi];

function menu() {
    console.log("--- Menu : ---");
    console.log("0 - ajouter un contact");
    console.log("1 - afficher les contacts");
    console.log("2 - quitter");
}

function addContact() {
    var nom = prompt("entrer le nom de la personne a ajouter :");
    var prenom = prompt("entrer le prenom de la personne a ajouter :");

    var newContact = Object.create(contacts);
    newContact.init(nom, prenom);
    tabContact.push(newContact);
    console.log("le contact a bien été ajouter !");
}

function displayContact() {
    tabContact.forEach(function(contact) {
        console.log(contact.describe());
    });
}

var continu = true;
console.log("bienvenue dans le gestionnaire de contact");
while (continu) {
    menu();
    var input = prompt("entre un choix :");
    switch (input) {
        case "0":
            addContact();
            break;
        case "1":
            displayContact();
            break;
        case "2":
            continu = false;
            break;
        default:
            console.log("erreur " + input + " ne fait pas parti des choix possible");
    }
}