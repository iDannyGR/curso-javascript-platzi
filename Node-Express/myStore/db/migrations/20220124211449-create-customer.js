'use strict';
const {CUSTOMER_TABLE,CustomerSchema} = require('./../models/customer.model')
const {DataTypes, Sequelize} = require('sequelize');
const{USERS_TABLE}=require('../models/user.model')
  module.exports = {
    async up (queryInterface) {
      await queryInterface.createTable(CUSTOMER_TABLE, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name:{
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
        },
        lastName:{
          allowNull:false,
          type: DataTypes.STRING,
          field:'last_name'
        },
        phone:{
          allowNull:true,
          type: DataTypes.STRING,
            },
        createAt:{
          allowNull:false,
          type: DataTypes.DATE,
          field: 'create_at',
          defaultValue: Sequelize.NOW
        },
        userId:{
          field:'user_id',
          allowNull:false,
          type:DataTypes.INTEGER,
          references:{
              model: USERS_TABLE,
              key:'id'
          },
        onUpdate:'CASCADE',
        //onDelete:'SET NULL'
        }
      });
    },

    async down (queryInterface) {
      await queryInterface.dropTable(CUSTOMER_TABLE);
    }
  };

