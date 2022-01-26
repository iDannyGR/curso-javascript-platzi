const express = require ('express');
const userService = require ('../services/userService');
const validatorHandler = require('../middlewares/validator.handler');
const {createUserSchema,updateUserSchema,deleteUserSchema, getUserSchema} = require('../schemas/user.schema')
const router = express.Router();
const service = new userService();

router.get('/', async(req, res, next)=>{
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
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
validatorHandler(createUserSchema, 'body'),
async (req, res, next)=>{
  try {
    const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
  } catch (error) {
      next(error);
  }

});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const updateUser = await service.update(id, body);
      res.json(updateUser);
    } catch (error) {
        next(error);
      }
    }
);

router.delete('/:id',validatorHandler(deleteUserSchema, 'params'),
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
