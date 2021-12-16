function hola(nombre, mycallback){
    setTimeout(()=>{
        console.log('hola '+nombre);
        mycallback(nombre);
    },1000);
}
function adios(nombre, callback){
    setTimeout(()=>{
        console.log('Adios '+nombre)
        callback();
    },2000);
}

function talk(callbackTall){
    setTimeout(()=>{
        console.log('blabla bla bla bla ');
        callbackTall();
    },1000)
}
 
function conversacion(nombre, veces, callback){
    if(veces >0){
        talk(()=>{
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
    
}
// --

console.log('iniciando proceso');
  hola('Daniel', (nombre)=>{
      conversacion(nombre,3, ()=> console.log('proceso terminado'));
  });
// hola('Daniel',(nombre)=>{
//         tallk(()=>{
//                     tallk(()=>{
//                         tallk(()=>{
//                     adios(nombre, ()=>{
//                         console.log('terminando proceso')
//                     });
//                 });
//             });
//         });
    
//     });
