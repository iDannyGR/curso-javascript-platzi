const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=>{
  const {limit, offset} =req.query;
   limit && offset ? res.json({ limit,offset}) : res.send('no hay parametros');
});

router.post('/', (req, res)=>{
    const body = req.body;
    res.json({
      message: "create user",
      data: body
    });
});

router.patch('/:id', (req, res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
      message: "update user partial",
      data: body,
      id
    });
});

router.delete('/:id', (req, res)=>{
    const {id}= req.params;
    res.json({
      message: 'delete user',
      id
    });
});

module.exports =  router;
