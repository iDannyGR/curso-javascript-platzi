let arreglo = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(arreglo.flat(2)); //valor de profundidad de flat


let arreglo2 = [1, 2, 3, 4, 5];

console.log(arreglo2.flatMap(value => [value, value * 2]));

let hola = '                 hola mundo';

console.log(hola);
console.log(hola.trimStart());

let hola2 = 'hola ñonga         ';

console.log(hola2);
console.log(hola2.trimEnd());


try {

} catch {
    error
}

let entradas=[['nombre','oscasr'],['age',32]];
console.log(Object.fromEntries(entradas));

let mySimbolo= 'mi simbolo';
let simbolo = Symbol(mySimbolo);
console.log(simbolo.description);