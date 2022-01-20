const boom = require('@hapi/boom');
const { response } = require('express');
const {models} = require('./../libs/sequelize')


class userService{
    constructor(){}

     async create(data){
        const response = await models.User.create({
          email: data.email,
          name: data.name,
          create_at: data.date
        });
        return response;
    };

    async find(){
       const response =await models.User.findAll();
       return response;

    }

    async findOne(id){
      const response = await models.User.findByPk(id);
        return response;
    }

    async update(id, changes){

       return {id, changes};
    }

   async delete(id){
         const response = await models.User.destroy({where:
          {id:id}
        });
          return response;
    }


}

module.exports = userService;
