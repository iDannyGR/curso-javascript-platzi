const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const description = joi.string().min(10);
const image = joi.string().uri();
const categoryId = joi.number().integer();

const limit = joi.number().integer();
const offset = joi.number().integer();

const CreateProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
  image: image,
  description,
  categoryId
});

const getProductSchema = joi.object({
  id: id.required(),
});

const queryProductSchema = joi.object({
  limit,
  offset
})

const deleteProductSchema = joi.object({
  id:id.required()
})

module.exports = {CreateProductSchema, updateProductSchema, getProductSchema, deleteProductSchema, queryProductSchema}
