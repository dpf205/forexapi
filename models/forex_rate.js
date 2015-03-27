module.exports = function(sequelize, DataTypes) {
  return sequelize.define("forex_rate", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        code: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        date: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        },
        time: {
          type: DataTypes.STRING,
          defaultValue: false,
          allowNull: false
        }, 
        rate: {
          type: DataTypes.FLOAT,
          defaultValue: false,
          allowNull: false
        },
        bid: {
          type: DataTypes.FLOAT,
          defaultValue: false,
          allowNull: false
        },
        ask: {
          type: DataTypes.FLOAT,
          defaultValue: false,
          allowNull: false
        } 
  })
}