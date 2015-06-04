module.exports = function(sequelize, DataTypes) {
  return sequelize.define("forex_compare", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },     
        code: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        currency_code: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        compare_currency_code: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        status: {
          type: DataTypes.FLOAT,
          defaultValue: false,
          allowNull: false
        },
  })
}