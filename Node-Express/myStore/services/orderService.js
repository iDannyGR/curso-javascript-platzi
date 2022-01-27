const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize')

class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const findOrder = await models.Order.findByPk(id,{
      include: [{association:'customer',
                 include:['user'] }]
    } );
    if(!findOrder){
      throw boom.notFound('order not found')
    }
    return findOrder;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const response = await this.findOne(id);
    response
  }

}

module.exports = OrderService;
