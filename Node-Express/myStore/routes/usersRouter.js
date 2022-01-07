const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=>{
  const {limit, offset} =req.query;
   limit && offset ? res.json({ limit,offset}) : res.send('no hay parametros');
});



router.delete('/', (req, res)=>{
    const {id}= req.params;
    res.json({
      "message": 'delete user',
      id
    });
});

module.exports =  router;
