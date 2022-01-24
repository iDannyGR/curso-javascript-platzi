'use strict';
const {UserSchema, USERS_TABLE} = require('./../models/user.model');
const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model')


module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USERS_TABLE, 'role', UserSchema.role);
    await queryInterface.addColumn(CUSTOMER_TABLE, 'role', CustomerSchema.role);

  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USERS_TABLE, 'role');
  }
};
