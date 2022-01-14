const express = require("express");
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const cors = require('cors')
const myApp = express();
const port = 3000;

myApp.use(express.json())

const whiteList = ['http://localhost:3000/','http://127.0.0.1:5500/', 'http://localhost:5500/' ];
var corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
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
