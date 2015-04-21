"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
    	'forex_compare',
    	{
    		id: {
    			type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
            code: {
            	type: DataTypes.STRING,
            	defaultValue: false,
            	allowNull: false
            },            
            status: {
            	type: DataTypes.BOOLEAN,
            	defaultValue: true
            }          
        },
        {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
    });
	
	migration.dropTable('forex_code');
    
    migration.createTable(
    	'forex_code',
    	{
    		id: {
    			type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            currency_code: {
            	type: DataTypes.STRING,
            	defaultValue: false,
            	allowNull: false
            },
            name: {
            	type: DataTypes.STRING,
            	defaultValue: false,
            	allowNull: false
            },
            status: {
            	type: DataTypes.BOOLEAN,
            	defaultValue: true
            }          
        },
        {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
    }).complete(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('forex_compare')
    done();
  }
};
