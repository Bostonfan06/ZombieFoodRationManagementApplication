module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ItemName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  })

  Item.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.Survivor, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Item
}
