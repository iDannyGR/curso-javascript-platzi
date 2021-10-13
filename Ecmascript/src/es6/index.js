function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'ES';
    console.log (name, age, country);
}

//es6
function newFunction2(name='oscar', age=32, country='ES'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('daniel', 32, 'ES');

let hello ='hola';
let world= 'mundo';
let epic= hello +' '+ world;
console.log(epic);

//template literal
let eppic2= `${hello} ${world}`;
console.log(eppic2);


let lorem = "quiero escribir una frase epica \n"
+ "otra frase eqpica que necesitamos.";
//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase eqpica que queremos`;

console.log(lorem);
console.log(lorem2);

let person ={
    'name':     'oscar',
    'age':      32,
    'country':  'ES'
}
console.log(person.name, person.age, person.country);
let{name,age,country} =person;
console.log(name,age,country);

let team1 =['oscar','julian','ricardo'];
let team2 =['valeria','jesika','camila'];

let education = ['davic', ...team1, ...team2];
console.log(education);


{
    var globalVar = 'global var';
}
{
let globalLet = 'global let';
console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';


let name = 'Daniel';
let age = 32;

obj = {name: name, age:age}
//es6
obj2 = {name, age};
console.log(obj2);

const nombres = [
    {nombre: 'daniel', age:32},
    {nombre: 'veronica', age:27},
];

let listOfnames = nombres.map( item => console.log(item.nombre));
/* 
/const listOfNames2 = (nombre, edad, country) =>{
    ...
}

const listOfName4= nombres =>{

}  */

const square = num => num*num;

const helloPromise = ()=>{
    return new Promise((resolve, reject)=>{
            if(false){
                resolve('hey todo bien');
            }else{
                reject('algo salio mal');
            }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


    class calculadora{
        constructor(){
            this.valorA =0;
            this.valorB =0;
        }
        sum(valorA,valorB){
            this.valorA = valorA;
            this.valorB = valorB;
            return this.valorA + this.valorB;
        }
    }
   const calc = new calculadora();
   console.log(calc.sum(2,2));


import {myExport} from './module'

   hola();


function* holaMundo(){
    if(true){
        yield 'hola, ';
    }
    if(true){
        yield 'Mundo';
    }
};

const generadorHola = holaMundo();
console.log(generadorHola.next().value);
console.log(generadorHola.next().value);
