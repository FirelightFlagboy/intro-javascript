/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cours.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 12:22:23 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 12:26:50 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "bic"
};

function objStyle(){

}

var monObj = new objStyle();
console.log(stylo.type);
console.log(stylo.couleur);
stylo['couleur'] = "vert";
console.log(stylo.couleur);
stylo.couleur = "rouge";
console.log(stylo.couleur);
console.log(stylo.marque);
