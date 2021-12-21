const fs= require('fs').promises;

function read(rute, cb){
    fs.readFile(rute, (err, data)=>{
        //leido
        cb(data.toString());
    })
}

 function write(ruta, contenido, cb){
     fs.writeFile(ruta, contenido, (err)=>{
            if(err){
                cb('no e podido escribir' + err);
            }else{
                cb('se a escrito correctamente');
            }
     })
 };

 function del(rute, cb){
    fs.unlink(rute,cb );
};


// read(__dirname + '/archivo.txt', console.log)
// write(__dirname+'/archivo1.txt', 'soy un archivo nuevo', console.log )

del(__dirname +'/archivo1.txt', console.log)