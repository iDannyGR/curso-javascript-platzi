const express = require("express");
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const myApp = express();
const port = 3000;

myApp.use(express.json())


myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});


routerApi(myApp);
myApp.use(logErrors);
myApp.use(boomErrorHandler);
myApp.use(errorHandler);



myApp.listen(port, ()=>{
  console.log('servidor corriendo');
})
