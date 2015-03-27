"use strict";

module.exports = {
  up: function(migration, DataTypes, done) { 
    migration.createTable(
      'forex_rates',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
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
      },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};
