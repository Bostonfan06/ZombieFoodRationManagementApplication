module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Survivor", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Survivor.associate = function(models) {
      // Associating Survivor with Posts
      // When an Author is deleted, also delete any associated Posts
      Survivor.hasMany(models.Item, {
        onDelete: "cascade"
      });
    };
  
    return Survivor;
  };
  