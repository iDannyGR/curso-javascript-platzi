const express = require('express')
const productsRouter = require ('./productsRouter');
const userRouter = require ('./usersRouter');
const categories = require('./categoriesRouter')

function routerApi(myApp){

  const router = express.Router(); //para crear un path global ruta maestra
  myApp.use('/api/v1', router) //y poder redireccionar en diferntes versiones
      //se puede usar router de express
    router.use('/products', productsRouter);
    router.use('/users', userRouter);
    router.use('/categories', categories );
};



module.exports = routerApi;
