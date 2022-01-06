const express = require ('express');
const { append } = require('express/lib/response');
const myApp = express();
const port = 3000;



myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});

myApp.get('/home', (req, res)=>{
  res.send('home');
});

myApp.get('/products', (req, res)=>{
  res.json([
    {name : 'ps5',
    price : 700},
    {name : 'xbox X',
    price : 750}
  ])
});

myApp.get('/products/:id', (req, res)=>{
  const {id} = req.params;
    res.json({
      id,
      name : 'ps5',
      price : 700
    })
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
