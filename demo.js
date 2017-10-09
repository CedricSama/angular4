"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 1;
var Class1 = (function () {
    function Class1() {
        this.user = {
            nom: "",
            prenom: "",
            age: 25,
            login: "",
            password: ""
        };
        this.prop1 = "";
        this.prop2 = 0;
        this.prop3 = true;
        this.prop4 = 4;
        this.prop5 = true;
        this.Arrayprop = [];
        this.Arrayprop1 = ["chaines ", "de carracteres"];
        this.Arrayprop2 = [1, 2];
        this.Arrayprop3 = [];
        this.Arrayprop4 = [];
        this.Arrayprop5 = [];
        //ici instantiation de tous ce que la class need
        this.prop1 = "Valeur apres Constructeur";
        this.methodes();
    }
    Class1.prototype.methodes = function () {
    };
    Class1.prototype.onClick = function () {
    };
    Class1.prototype.OnmouseOver = function () {
    };
    return Class1;
}());
exports.Class1 = Class1;
;
