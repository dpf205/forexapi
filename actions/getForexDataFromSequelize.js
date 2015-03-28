var Sequelize = require('sequelize');
var mysql = require('mysql');


exports.getForexdataFromSequelize = {
  name: 'getForexdataFromSequelize',
  description: 'return latest Forex data from Yahoo',

  outputExample:{
  "results": [
    {
      "id": 1,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "EURUSD",
      "name": "EUR/USD",
      "date": "3/25/2015",
      "time": "0:56am",
      "rate": 1.0974,
      "bid": 1.0974,
      "ask": 1.0675
    },
    {
      "id": 2,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "GBPUSD",
      "name": "GBP/USD",
      "date": "3/24/2015",
      "time": "0:57am",
      "rate": 1.0974,
      "bid": 1.0874,
      "ask": 1.0775
    },
    {
      "id": 3,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "EURUSD",
      "name": "EUR/USD",
      "date": "3/23/2015",
      "time": "0:58am",
      "rate": 1.0974,
      "bid": 1.0774,
      "ask": 1.0875
    },
    {
      "id": 4,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "GBPUSD",
      "name": "GBP/USD",
      "date": "3/22/2015",
      "time": "0:59am",
      "rate": 1.0974,
      "bid": 1.0674,
      "ask": 1.0975
    },
    {
      "id": 5,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "EURUSD",
      "name": "EUR/USD",
      "date": "3/25/2015",
      "time": "0:56am",
      "rate": 1.0974,
      "bid": 1.0974,
      "ask": 1.0675
    },
    {
      "id": 6,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "GBPUSD",
      "name": "GBP/USD",
      "date": "3/24/2015",
      "time": "0:57am",
      "rate": 1.0974,
      "bid": 1.0874,
      "ask": 1.0775
    },
    {
      "id": 7,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "EURUSD",
      "name": "EUR/USD",
      "date": "3/23/2015",
      "time": "0:58am",
      "rate": 1.0974,
      "bid": 1.0774,
      "ask": 1.0875
    },
    {
      "id": 8,
      "createdAt": "0000-00-00 00:00:00",
      "updatedAt": "0000-00-00 00:00:00",
      "code": "GBPUSD",
      "name": "GBP/USD",
      "date": "3/22/2015",
      "time": "0:59am",
      "rate": 1.0974,
      "bid": 1.0674,
      "ask": 1.0975
    }
  ]},
    
    
  run: function(api, connection, next){    
     
     //var db = api.sequelize;  
      
     api.models.forex_rate.findAll().then(function(forex_rates) {
        console.log = JSON.stringify(forex_rates); 
        connection.response.results = forex_rates;  
        next(connection, true);
    })
 
  } 
    
};
   