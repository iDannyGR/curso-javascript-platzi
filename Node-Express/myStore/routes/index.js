const productsRouter = require ('./productsRouter');
const userRouter = require ('./usersRouter');
const categories = require('./categoriesRouter')

function routerApi(myApp){
    myApp.use('/products', productsRouter);
    myApp.use('/users', userRouter);
    myApp.use('/categories', categories );
};


module.exports = routerApi;
