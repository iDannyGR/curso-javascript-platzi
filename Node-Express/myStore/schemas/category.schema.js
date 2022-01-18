const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const image= joi.string().uri();


const createCategorySchema = joi.object({
  name: name.required(),
  image: image.required()
});

const updateCategorySchema = joi.object({
  name: name,
  image: image
});

const getCategorySchema = joi.object({
  id: id.required(),
});


module.exports = {createCategorySchema, updateCategorySchema, getCategorySchema}
