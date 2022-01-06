const express = require ('express');
const myApp = express();
const port = 3000;



myApp.get('/', (req, res)=>{
      res.send('pagina principal');
});

myApp.get('/home', (req, res)=>{
  res.send('home');
});

myApp.get('/products', (req, res)=>{
  res.send('productos');
});

myApp.get('/json', (req, res)=>{
  res.send({
    name: 'ps5',
    price: 700
  });

});

myApp.listen(port, ()=>{
  console.log('servidor corriendo');
})
