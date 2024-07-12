// models/post.js

module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
      // Define model attributes
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    // Define model associations
    Post.associate = function(models) {
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Post.hasMany(models.Comment, {
        onDelete: 'CASCADE'
      });
    };
  
    return Post;
  };
  
