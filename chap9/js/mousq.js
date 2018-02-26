/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mousq.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: fbenneto <fbenneto@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/02/26 15:31:44 by fbenneto          #+#    #+#             */
/*   Updated: 2018/02/26 15:46:47 by fbenneto         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var Mousq = {
    init: function(name) {
        this.name = name;
    },
    presente: function() {
        console.log(this.name);
    },
};

var tName = ["Athos", "Porthos", "Aramis"];
var tMousq = [];

console.log("voila les 3 mousquetaire");
for (var i = 0; i < tName.length; i++) {
    tMousq.push(Object.create(Mousq));
    tMousq[i].init(tName[i]);
}

for (i = 0; i < tMousq.length; i++) {
    tMousq[i].presente();
}
console.log("a present, ils sont 4");
tMousq.push(Object.create(Mousq));
tMousq[tMousq.length - 1].init("d'artagnan");
tMousq.forEach(function(mousq) {
    mousq.presente();
});