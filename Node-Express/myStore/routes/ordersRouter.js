const express = require('express')
const router = express.router()
const OrderService = require('../services/orderService');
const service = new OrderService;
const validatorHandler = require('../middlewares/validator.handler');


router.get('/', async(req, res, next)=>{
  try {
    const orders = await service.findall();
    return res.json(orders)
    } catch (error) {
      next(error)
    }
})


router.post('/', async(req,res, next)=>{
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
})
