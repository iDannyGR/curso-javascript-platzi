const express = require('express')
const productsRouter = require ('./productsRouter');
const userRouter = require ('./usersRouter');
const categories = require('./categoriesRouter')
const costumer = require('./customerRouter')
const order = require('./ordersRouter')

function routerApi(myApp){

  const router = express.Router(); //para crear un path global ruta maestra
  myApp.use('/api/v1', router) //y poder redireccionar en diferntes versiones
      //se puede usar router de express
    router.use('/products', productsRouter);
    router.use('/users', userRouter);
    router.use('/categories', categories );
    router.use('/customers', costumer );
    router.use('/orders',order)
};



module.exports = routerApi;
