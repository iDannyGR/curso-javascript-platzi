const datos = {
    frontend:'Daniel',
    backend:'isabel',
    design:'Ana',
}

const entries = Object.entries(datos);
console.log(entries);

console.log(entries.length);

const valores = Object.values(datos);
console.log(valores);
console.log(valores.length);

const texto= 'hola';
console.log(texto.padStart(7,'hi'));
console.log(texto.padEnd(12,'-----'));


const obje = {
    nombre: 'daniel',
}

const holaMundo= ()=>{
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=> resolve('hellow World'),3000)
        : reject(new Error ('Errrorazo'))
    })
};

const holaAsync = async () =>{
    const  hola =await holaMundo();
    console.log(hola);
};

holaMundo();

const otraFuncion = async()=>{
    try {
        const hola = await holaMundo();
        console.log(hola);
    } catch (error) {
        console.log(error);
    }
}
otraFuncion();