"use strict";
var etudiants = /** @class */ (function () {
    function etudiants(n, p, a, no) {
        this.nom = n;
        this.prenom = p;
        this.age = a;
        this.note = no;
    }
    etudiants.prototype.afficher = function () {
        console.log('Votre nom est : ' + ("" + this.nom) + "\n Votre de prenom :" + ("" + this.prenom) + "\n Et votre de age :" + ("" + this.age) + 'Votre note est : ' + ("" + this.note));
    };
    return etudiants;
}());
console.log("oubiji");
function traitement() {
    var y = parseInt(document.getElementById('ed').value);
    for (var p = 0; p < y; p++) {
        var i = document.getElementById('p1' + ("" + p)).value;
        var j = document.getElementById('p2' + ("" + p)).value;
        var k = parseInt(document.getElementById('p3' + ("" + p)).value);
        var h = parseInt(document.getElementById('p4' + ("" + p)).value);
        var OP = new etudiants(i, j, k, h);
        OP.afficher();
    }
}
