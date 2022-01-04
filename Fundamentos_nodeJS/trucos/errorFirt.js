function asincrona(callback){
    setTimeout(()=>{
        try {
            let a = 3+z;
            callback(null, a)
        } catch (error) {
            callback(error);
        }
    }, 10000)
}


asincrona((err, dato)=>{
    if(err){
        console.error('tenemos un error');
        console.error(err);
        return false;
        //throw err; no funciona con funciones asincronas
        
    }
    console.log('todo a ido bien mi data es', dato);
})