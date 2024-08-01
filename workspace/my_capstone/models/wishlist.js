'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WishList.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    wishlisttext: DataTypes.STRING,
    wishlistlink: DataTypes.STRING,
    wishlistcomment: DataTypes.STRING,
    wishlist_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WishList',
  });
  return WishList;
};