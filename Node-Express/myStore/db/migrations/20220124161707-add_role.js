'use strict';
const {USERS_TABLE} = require('../models/user.model');
const {DataTypes} = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USERS_TABLE, 'role', {
        allowNull:false,
        type: DataTypes.STRING,
        defaultValue:'customer'
    });
    },

  async down (queryInterface) {
    await queryInterface.removeColumn(USERS_TABLE, 'role');
  }
}
