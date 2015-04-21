"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {    
  	migration.createTable(
    	'Forexcode',
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
    }).done;    
    done();
  },

  down: function(migration, DataTypes, done) {
  	migration.dropTable('forex_compare')
  	migration.dropTable('forex_rate')
  	migration.dropTable('Forexcode')
  	migration.dropTable('Forexcompare')
    done();
  }
};
