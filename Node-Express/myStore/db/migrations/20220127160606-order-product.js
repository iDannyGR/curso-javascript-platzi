const {ORDER_PRODUCT_TABLE,orderProductSchema} = require('../models/order-product.model');


  module.exports = {
    async up (queryInterface) {
      await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductSchema);

    },

    async down (queryInterface) {
      await queryInterface.dropTable(ORDER_PRODUCT_TABLE);

    }
  };
