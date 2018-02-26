/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   jdr.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 12:51:04 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 13:29:11 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var perso = {
	name: "aurora",
	life: 150,
	power: 30,
	xp: 0,
	decrire: function () {
		var description = this.name + " a " + this.life + " points de vie et " +
			this.power + " en force, niveau : "+this.xp;
		return description;
	},
};

console.log("bienvenue\n" + perso.decrire());
perso.life -= 20;
perso.power += 20;
perso.xp += 15;
console.log(perso.decrire());
