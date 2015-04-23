module.exports = function(sequelize, DataTypes) {
  return sequelize.define("forex_rate", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        nk: {
          type: DataTypes.STRING,
          primaryKey: true
        },    
        date: {
          type: DataTypes.DATE,
        }, 
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.NOW
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