const express = require('express')
const router = express.Router()
const OrderService = require('../services/orderService');
const service = new OrderService;
const validatorHandler = require('../middlewares/validator.handler');
const {createOrderSchema, updateOrderSchema, getOrderSchema,deleteOrderSchema } = require('../schemas/order.schema')

router.get('/:id',validatorHandler(getOrderSchema, 'params') ,
async(req, res, next)=>{
  try {
   const {id} = req.params;
   const order = await service.findOne(id);
   res.json(order);
    } catch (error) {
      next(error)
    }
})

router.post('/',
validatorHandler(createOrderSchema,'body'),
 async(req,res, next)=>{
  try {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
})


module.exports = router;
