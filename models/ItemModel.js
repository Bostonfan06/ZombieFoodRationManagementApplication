module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    // ItemId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    ItemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Units: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ExpirationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
    // SurvivorId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  })

  Item.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.Survivor)
  }

  return Item
}
