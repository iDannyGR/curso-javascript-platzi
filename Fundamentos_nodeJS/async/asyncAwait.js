async function hola(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('hola '+nombre);
            res(nombre);
        },1000);
    });
    
}
async function adios(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('Adios '+ nombre)
            res();
        },2000);
    })
    
}

async function talk(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('blabla bla bla bla ');
            res(nombre);
        },1000);
    })
   
}

async function main (){
   let nombre = await hola('Daniel');
    await talk();
    await talk();
    await talk();
    await talk();
    await adios(nombre);
    console.log('terminamos');
}
console.log('empezamos');
main();
