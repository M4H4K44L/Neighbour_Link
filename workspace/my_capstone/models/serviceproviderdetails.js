'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceProviderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceProviderDetails.init({
    username: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceProviderDetails',
  });
  return ServiceProviderDetails;
};