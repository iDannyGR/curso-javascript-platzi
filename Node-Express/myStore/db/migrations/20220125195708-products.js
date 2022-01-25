'use strict';
const {PRODUCT_TABLE,productSchema} = require('./../models/product.model');
const {CATEGORY_TABLE,CategorySchema} = require('./../models/category.model')

  module.exports = {
    async up (queryInterface) {
      await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
      await queryInterface.createTable(PRODUCT_TABLE, productSchema);

    },

    async down (queryInterface) {
      await queryInterface.dropTable(PRODUCT_TABLE);
      await queryInterface.dropTable(CATEGORY_TABLE);
    }
  };

