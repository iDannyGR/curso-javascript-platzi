const express = require ('express');
const routerApi = require('./routes')
const myApp = express();
const port = 3000;



myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});


routerApi(myApp);




myApp.listen(port, ()=>{
  console.log('servidor corriendo');
})
