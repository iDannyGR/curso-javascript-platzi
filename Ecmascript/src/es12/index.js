const texto= 'javascript es chingon putita, javascript es futuro';

const textReplace = texto.replace('javascript', 'phiton');

console.log(textReplace);
//ES12
const textReplace2= texto.replaceAll('javascript', 'phyton');
console.log(textReplace2);

class mensaje {
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}

const mensajeX = new mensaje();
mensajeX.show('hola');


const promesa1 = new Promise((resolve, reject)=> reject ('1'));
const promesa2 = new Promise((resolve, reject)=> resolve ('2'));
const promesa3 = new Promise((resolve, reject)=> resolve ('3'));
// any es el primero que se resuelva
Promise.any([promesa1,promesa2,promesa3])
    .then(response => console.log(response));

class cualquiera {
    constructor(element){
        this.ref= new WeakRef(element)
    }
    {...}
}

let esVerdadero = true;
let esFalso = false;
console.log(esVerdadero &&= esFalso);
console.log(esVerdadero ||= esFalso);
console.log(esVerdadero ??= esFalso);
