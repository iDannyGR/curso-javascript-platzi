//const faker = require('faker');
const boom = require('@hapi/boom');
const {Op} = require('sequelize')
const {models} = require('../libs/sequelize')


class ProductService{
    constructor(){}

    async create(data){
         const newProduct =await models.Product.create(data);
         return newProduct;
    };

     async find(query){
      const options = {
        include: ['category'],
        where: {}
        }
        const {limit, offset} = query;
        if(limit && offset){
          options.limit = limit;
          options.offset = offset;
        }

        const { price } = query;
        if(price){
          options.where.price = price;
        }

        const {pricemin, pricemax} = query;
        if(pricemin && pricemax){
          options.where.price = {
            [Op.gte] : pricemin,
            [Op.lte] : pricemax,
          };
        }
        const products = await models.Product.findAll(options);
        return products;
    }

    async findOne(id){
        const fineOneProduct = await models.Product.findByPk(id);
        if(!fineOneProduct){
            throw boom.notFound('product not found');
        }
        return fineOneProduct;
    }

    async update(id, changes){
      const response =await this.findOne(id);
      await response.update(changes);
      return response;
    }

   async delete(id){
      const response = await this.findOne(id)
        await response.destroy();
        return {response: true};
    }


}

module.exports = ProductService;
