const express = require("express");
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const cors = require('cors')
const myApp = express();
const port = 3000;

myApp.use(express.json())


myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});
const whiteList = ['http://localhost:5500/'];
const coorsOption = {
  origin: (origin, callback)=>{
    (whiteList.includes(origin)) ?
    callback(null, true):
    callback(new Error('not Have a Persmission'))
      }
  }


myApp.use(cors(coorsOption));
routerApi(myApp);
myApp.use(logErrors);
myApp.use(boomErrorHandler);
myApp.use(errorHandler);




myApp.listen(port, ()=>{
  console.log('servidor corriendo');
})
