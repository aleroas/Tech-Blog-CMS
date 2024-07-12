// models/comment.js

module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
      // Define model attributes
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    // Define model associations
    Comment.associate = function(models) {
      Comment.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };
  
