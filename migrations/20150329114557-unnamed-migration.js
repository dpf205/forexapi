"use strict";

module.exports = {
    up: function(migration, DataTypes, done) {
        migration.dropTable('forex_rates');
        migration.createTable(
            'forex_rates',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                nk: {
                    type: DataTypes.STRING,
                    primaryKey: true           
                },
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW    
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW    
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
                    type: DataTypes.DATE,
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
        ).complete(done);
    },
    down: function(migration, DataTypes, done) {
        migration.dropTable('forex_rates');
        done();
    }
};
