let muted = true;
let people:string[]=[];
people=['Juan','Daniel','Pedro'];
//people.push(9000) va a dar error porque es un numero en array string

let peopleAndNumber:Array<string | number> =[];
peopleAndNumber.push('Ricardo');
peopleAndNumber.push(9000);

//enum

enum Color{
    rojo=   "rojo",
    verde= "verde",
    azul= "azul"
}
let colorFavorito: Color = Color.azul;
//console.log(`mi color favorito es ${colorFavorito}`);

//any
let comodin:any = 'joker';
comodin =  {type:'wildcard'};

//object

let someObject:object =[];


function add(a:number,b:number):number{
    return a+b;
}

const sum = add(4, 6);

function createAdder(a:number):(number)=>number{
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPLus6 =addFour(6);

function fullName(firstName:string, lastName:string='garcia'):string {
    return `${firstName} ${lastName}`
}
// =>? sirve para que pueda ser undefine u opcional en variables de funciones TS

const daniel= fullName('daniel');
console.log(daniel);