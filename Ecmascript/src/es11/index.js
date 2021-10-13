const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await import("./file.js");
    module.hola();
});

const aBigNumero= 900719925440355n;
const otroBigIntereo= BigInt(900719925440355);

console.log(aBigNumero);
console.log(otroBigIntereo);

const promesa1= new Promise((resolve, reject)=> reject ('reject'));
const promesa2= new Promise((resolve, reject)=> resolve ('resolve'));
const promesa3= new Promise((resolve, reject)=> resolve ('resolve 1'));

Promise.allSettled([promesa1,promesa2,promesa3])
    .then (response => console.log(response));

console.log(window);
console.log(globalThis);



const fooo = 'asd' ?? 'default string';
console.log(fooo);

const usuario ={};
console.log(usuario?.profile?.email);

if(usuario?.profile?.email){
    console.log('email');
}else{console.log('fail')};