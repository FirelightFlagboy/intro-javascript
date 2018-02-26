/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chien.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 15:15:45 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 15:19:29 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var Chien = {
    aboyement: "grrr !",
    borkLevel: 2,

    aboyer: function() {
        var res = new String();
        for (var i = 0; i < this.borkLevel; i++)
            res += this.aboyement;
        return (res);
    },

    init: function(name, race, size) {
        this.nom = name;
        this.race = race;
        this.taille = size;
    },
};

// TODO : ajoutez ici la définition de l'objet Chien

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());