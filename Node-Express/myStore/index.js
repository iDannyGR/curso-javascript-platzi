const express = require("express");
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const cors = require('cors')
const myApp = express();
const port = process.env.PORT || 3000;

myApp.use(express.json())

const whiteList = ['http://127.0.0.1:5500/', 'http://localhost:3000/'];
var corsOptions = {
  origin: function (origin, callback) {
    whiteList.indexOf(origin) !== -1 || !origin ?
      callback(null, true):
      callback(new Error('no permitido'));
  }

}
myApp.use(cors(corsOptions));

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
