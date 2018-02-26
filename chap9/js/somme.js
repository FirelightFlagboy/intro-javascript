/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   somme.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 15:49:16 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 15:52:18 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var values = [11, 3, 7, 2, 9, 10, 42];

var somme = 0;
var max = values[0];

values.forEach(function(val) {
    somme += val;
    if (max < val)
        max = val;
});

console.log("la somme est " + somme);
console.log("le max est " + max);