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