/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chien.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 13:30:29 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 13:37:58 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var chien = {
    nom: "gyzmo",
    race: "epagneul",
    taille: "50",
    aboyment: "grrr!",
    aboyer: function() {
        var s = new String();
        for (var i = 0; i < 2; i++) {
            s += this.aboyment;
        }
        return (s);
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());