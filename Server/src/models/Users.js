const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         primaryKey: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
