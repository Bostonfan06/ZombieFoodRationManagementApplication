module.exports = function (sequelize, DataTypes) {
  var Survivor = sequelize.define('Survivor', {
    // Giving the Author model a name of type STRING
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Survivor.associate = function (models) {
    // Associating Survivor with Posts
    // When an Author is deleted, also delete any associated Posts
    Survivor.hasMany(models.Item, {
      onDelete: 'CASCADE'
    })
  }

  return Survivor
}
