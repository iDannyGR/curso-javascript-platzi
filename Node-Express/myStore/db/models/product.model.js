const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE= 'products';

const productSchema ={
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
    price:{
      allowNull:false,
      type: DataTypes.DECIMAL(10,3)
    },
    image:{
      allowNull:false,
      type: DataTypes.STRING,
    }
}

class Product extends Model {
    static associate(){
      //models
    }
    static config(sequelize){
     return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName:'Product',
      timestamps: false
     }
    }
}

module.exports = {PRODUCT_TABLE,productSchema, Product}
