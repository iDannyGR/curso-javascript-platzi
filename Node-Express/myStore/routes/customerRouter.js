const express = require ('express');
const customerService = require ('../services/customerService');
const validatorHandler = require('../middlewares/validator.handler');
const {createCustomerSchema,updateCustomerSchema,getCustomerSchema,deleteCustomerSchema} = require('../schemas/customer.schema');
const router = express.Router();
const service = new customerService();

router.get('/', async(req, res, next)=>{
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
validatorHandler(getCustomerSchema, 'params'),
async (req, res, next)=>{
  try {
    const {id}= req.params;
    const category = await service.findOne(id);
    res.json(category)
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createCustomerSchema, 'body'),
async (req, res, next)=>{
  try {
    const body = req.body;
  const newCustomer = await service.create(body);
  res.status(201).json(newCustomer);
  } catch (error) {
      next(error);
  }

});

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
        next(error);
      }
    }
);

router.delete('/:id',validatorHandler(deleteCustomerSchema, 'params'),
async (req, res, next)=>{
  try {
      const {id} = req.params;
      await service.delete(id);
      res.status(201).json({id});
  } catch (error) {
    next(error);
  }
});

module.exports =  router;
