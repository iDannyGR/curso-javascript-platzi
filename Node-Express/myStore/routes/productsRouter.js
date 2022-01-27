const express = require ('express');
const  ProductService = require('./../services/productService')
const router = express.Router();
const service = new ProductService;
const validatorHandler = require('./../middlewares/validator.handler');
const {CreateProductSchema, updateProductSchema, queryProductSchema, getProductSchema, deleteProductSchema} = require('./../schemas/product.schema')


router.get('/', validatorHandler(queryProductSchema, 'query'),
 async (req, res, next)=>{
  try {
    const products = await service.find(req.query);
    res.json(products);
  } catch (error) {
    next(error);
  }

});

router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next)=>{
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
    res.json(product);
    } catch (error) {
      next(error);
    }
});


router.post('/',
  validatorHandler(CreateProductSchema, 'body'),
  async (req, res, next)=>{
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }

});


router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
      next(error);
    }
});


router.delete('/:id', validatorHandler(deleteProductSchema, 'params'),
 async (req, res)=>{
  const {id} = req.params;
  const rta =  await service.delete(id);
  res.json(rta);
});


module.exports = router;
