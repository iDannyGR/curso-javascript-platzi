const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')


class customerService{
    constructor(){}

    async create(data){
     const newCostumer = await models.Customer.create(data, {
       include: ['user']
    });
        return newCostumer;
    }

    async find(){
       const response =await models.Customer.findAll({
         include:['user']
       });
       return response;

    }

    async findOne(id){
      const costumer = await models.Customer.findByPk(id);
      if (!costumer){
        throw  boom.notFound('costumer not Found');
          }
    return costumer;
    }

    async update(id, changes){
        const models =await this.findOne(id);
        const response = await models.update(changes);
        return response;
    }

   async delete(id){
          const models =await this.findOne(id);
         await models.destroy();
          return {response: true};
    }


}

module.exports = customerService;
