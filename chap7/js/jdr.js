/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   jdr.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 12:51:04 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 15:07:25 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var perso = {
    name: "",
    life: 0,
    power: 0,
    xp: 0,
    init: function(name, life, power) {
        this.name = name;
        this.life = life;
        this.power = power;
    },
    decrire: function() {
        var description = this.name + " a " + this.life + " points de vie et " +
            this.power + " en force, niveau : " + this.xp;
        return description;
    },
};

console.log("bienvenue\n");
var aurora = Object.create(perso);
var glacius = Object.create(perso);
var andesite = Object.create(perso);

aurora.name = "aurora";
aurora.life = 150;
aurora.power = 20;

glacius.name = "glacius";
glacius.life = 130;
glacius.power = 35;

andesite.init("andesite", 100, 50);

console.log(aurora.decrire());
console.log(glacius.decrire());
console.log(andesite.decrire());