const joi = require('joi');


const id = joi.number().integer();
const customerId = joi.number().integer();
const orderId = joi.number().integer();
const productId = joi.number().integer();
const ammount = joi.number().integer().min(1);

const createOrderSchema =  joi.object({
   customerId: customerId.required()
    });


const updateOrderSchema = joi.object({customerId});

const getOrderSchema = joi.object({
  id: id.required(),
});

const deleteOrderSchema = joi.object({
  id: id.required()
});

const addItemSchema = joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  ammount: ammount.required()
})

module.exports = {createOrderSchema, updateOrderSchema, getOrderSchema,deleteOrderSchema, addItemSchema }

