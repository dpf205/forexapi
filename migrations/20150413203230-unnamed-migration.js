"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
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
    }).done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};
