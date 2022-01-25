const joi = require('joi')


const id = joi.number().integer();
const name = joi.string();
const lastName = joi.string();
const phone = joi.string().min(8);
const userId = joi.number().integer()

const createCustomerSchema= joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    userId: userId.required()
})

const updateCustomerSchema = joi.object({
  name,
  lastName,
  phone,
  userId
});

const deleteCustomerSchema = joi.object({
  id: id.required(),
});

const getCustomerSchema = joi.object({
    id: id.required()
})

module.exports = {createCustomerSchema,updateCustomerSchema,getCustomerSchema,deleteCustomerSchema}
