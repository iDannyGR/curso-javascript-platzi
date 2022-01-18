const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('this its categories');
})

router.get('/:categoryId/:namecategory',(req, res)=>{
    const {id, name} = req.params;
    res.json({
      id,
      category: name
    });
});

router.post('/', (req, res)=>{
    const data = req.body;
    res.json({
        message : "category create",
        data
    })
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    res.json({
      message: "category delete",
      id
    });
});


module.exports = router;
