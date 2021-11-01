var muted = true;
var people = [];
people = ['Juan', 'Daniel', 'Pedro'];
//people.push(9000) va a dar error porque es un numero en array string
var peopleAndNumber = [];
peopleAndNumber.push('Ricardo');
peopleAndNumber.push(9000);
//enum
var Color;
(function (Color) {
    Color["rojo"] = "rojo";
    Color["verde"] = "verde";
    Color["azul"] = "azul";
})(Color || (Color = {}));
var colorFavorito = Color.azul;
//console.log(`mi color favorito es ${colorFavorito}`);
//any
var comodin = 'joker';
comodin = { type: 'wildcard' };
//object
var someObject = [];
function add(a, b) {
    return a + b;
}
var sum = add(4, 6);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourPLus6 = addFour(6);
function fullName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'garcia'; }
    return firstName + " " + lastName;
}
// =>? sirve para que pueda ser undefine u opcional en variables de funciones TS
var daniel = fullName('daniel');
console.log(daniel);
