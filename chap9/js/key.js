/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   key.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 15:54:09 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 15:56:06 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var key = [];

while (true) {
    var input = prompt("entre something or 'stop' to stop");
    if (input === "stop")
        break;
    key.push(input);
}

for (var i = 0; i < key.length; i++) {
    console.log(key[i]);
}