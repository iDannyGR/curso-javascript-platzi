const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize')


class customerService{
    constructor(){}

    async create(data){
    const newCostumer = await models.Customer.create(data);
        return newCostumer
    }

    async find(){
       const response =await models.Customer.findAll();
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
        const model =await this.findOne(id);
        const response = await model.update(changes);
        return response;
    }

   async delete(id){
          const model =await this.findOne(id);
         await model.destroy();
          return {response: true};
    }


}

module.exports = customerService;
