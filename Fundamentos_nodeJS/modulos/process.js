process.on('beforeExit', ()=>{
    console.log('el proceso va a terminar')
});

process.on('exit',()=>{
    console.log('el proceso acabo')

    setTimeout(()=>{
        console.log('esto no se va a ver nunca');
    }, 0);
});

setTimeout(()=>{
    console.log('esto se va a ver');
}, 0);

process.on('uncaughtException', (err, ori)=>{
    console.error('vaya se nos a olvidado capturar un error');
    console.error('vaya se nos a olvidado capturar un error');
    console.error(err);
})

// noexiste();
console.error('eso si es error no se recoge no sale');