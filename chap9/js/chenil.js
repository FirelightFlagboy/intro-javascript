/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chenil.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 15:58:36 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 16:12:35 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var dog = {
    // select the bork borkType
    borkType: function() {
        var bork = "whoua !";
        if (this.size < 25)
            bork = "kaii !";
        else if (this.size > 60)
            bork = "Grrr !";
        return (bork);
    },
    // bork function
    borking: function() {
        var res = new String();
        for (var i = 0; i < this.borkLevel; i++) {
            res += this.bork;
            if (i + 1 < this.borkLevel)
                res += " ";
        }
        return (res);
    },
    // presentation
    presente: function() {
        console.log(this.name + " is a " + this.race + ", measuring " + this.size + " : he bork : " + this.borking());
    },
    // init function
    init: function(name, race, size) {
        this.name = name;
        this.race = race;
        this.size = size;
        this.bork = this.borkType();
        this.borkLevel = size / 20;
    },
};

var chenil = [];

var crok = Object.create(dog);
var pupi = Object.create(dog);
var medo = Object.create(dog);

crok.init("corkdur", "doggo", 75);
pupi.init("pupuce", "bichon", 22);
medo.init("medor", "labrador", 58);

chenil.push(crok);
chenil.push(pupi);
chenil.push(medo);

console.log("the spa have " + chenil.length + " dog");
for (var i = 0; i < chenil.length; i++) {
    chenil[i].presente();
}