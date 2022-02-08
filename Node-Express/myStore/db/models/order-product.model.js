const {Model, DataTypes, Sequelize} = require('sequelize');
const {ORDER_TABLE} = require('./order.model')
const {PRODUCT_TABLE} = require('./product.model')
const ORDER_PRODUCT_TABLE= 'orders_has_products';

const orderProductSchema ={
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
        createAt:{
      allowNull:false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW
    },
    ammount:{
        allowNull: false,
        type:DataTypes.INTEGER
    },
    orderId:{
      field:'order_id',
      allowNull:true,
      type:DataTypes.INTEGER,
      references:{
          model: ORDER_TABLE,
          key:'id'
      },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
    },
    productId:{
      field:'product_id',
      allowNull:true,
      type:DataTypes.INTEGER,
      references:{
          model: PRODUCT_TABLE,
          key:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    }
}

class OrdersProduct extends Model {
    static associate(models){

    }

    static config(sequelize){
     return{
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName:'OrderProduct',
      timestamps: false
     }
    }
}

module.exports = {ORDER_PRODUCT_TABLE,orderProductSchema,OrdersProduct}

