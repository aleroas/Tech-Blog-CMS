// models/user.js

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
      // Define model attributes
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    // Define model associations
    User.associate = function(models) {
      User.hasMany(models.Post, {
        onDelete: 'CASCADE'
      });
      User.hasMany(models.Comment, {
        onDelete: 'CASCADE'
      });
    };
  
    return User;
  };
  
