const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')

class CategoryService {

  constructor(){}
  async create(data) {
    const newCategory = await models.Category.create(data)
    return newCategory;
  }

  async find() {
    const response = await models.Category.findAll();
    return response;
  }

  async findOne(id) {
   const category = await models.Category.findByPk(id, {
     include: ['products']
   })
   if(!category){
      throw boom.notFound('Category not Found');
   }
   return category;
  }

  async update(id, changes) {
      const response =await this.findOne(id);
      await response.update(changes);
      return response;
  }

  async delete(id) {
    const response = await this.findOne(id)
    await response.destroy();
    return {reponse: true}
  }

}

module.exports = CategoryService;
