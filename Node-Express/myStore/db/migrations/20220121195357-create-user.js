'use strict';
const {USERS_TABLE} = require('./../models/user.model')
const {DataTypes, Sequelize} = require('sequelize')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USERS_TABLE, {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password:{
      allowNull:false,
      type: DataTypes.STRING
    },
       createAt:{
      allowNull:false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW
    }
    });

  },

  async down (queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
  }
};
