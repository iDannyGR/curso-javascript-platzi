const http = require ('http');



function router(req, res){
    console.log('Nueva Peticion');
    console.log(req.url);

        switch(req.url){
            case '/hola':
            res.write('hola. qie tañ')
            res.end();
            break;
        
        default:
            
            res.write('Error 404:  no se lo que quieres')
            res.end();
        }

    res.end();
};


http.createServer(router).listen(3000);
console.log('escuchando http en puerto 3000');
