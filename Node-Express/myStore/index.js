const express = require ('express');
const routerApi = require('./routes')
const myApp = express();
const port = 3000;



myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});

myApp.get('/home', (req, res)=>{
  res.send('home');
});


routerApi(myApp);

myApp.get('/users', (req, res)=>{
  const {limit, offset} =req.query;
   limit && offset ? res.json({ limit,offset}) : res.send('no hay parametros');
});

myApp.get('/categories/:categoryId/products/:productId', (req, res)=>{
    const {categoryId, productId} = req.params;
    res.json({
      categoryId,
      productId
    })
});

myApp.listen(port, ()=>{
  console.log('servidor corriendo');
})
