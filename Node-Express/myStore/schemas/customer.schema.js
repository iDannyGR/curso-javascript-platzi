const joi = require('joi')


const id = joi.number().integer();
const name = joi.string();
const lastName = joi.string();
const phone = joi.string().min(8);
const userId = joi.number().integer()
const email = joi.string().email();
const password = joi.string()


const createCustomerSchema= joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: joi.object({
      email: email.required(),
      password: password.required()
    })
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
