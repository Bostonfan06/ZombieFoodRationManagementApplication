module.exports = function (sequelize, DataTypes) {
  var Survivor = sequelize.define('Survivor', {
    // Giving the Author model a name of type STRING
    SurvivorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
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
      foreignKey: 'SurvivorId',
      onDelete: 'cascade'
    })
  }

  return Survivor
}
