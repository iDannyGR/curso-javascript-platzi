// let buffer  =  Buffer.alloc(4);
// let buffer  =  Buffer.from([4,2,4]);
let buffer = Buffer.from('hola');

// console.log(buffer);

// --

let abc = Buffer.alloc(26);
console.log(abc);

for (i =0; i < abc.length; i++ ){
    abc[i] = i+97;
}


console.log(abc.toString());