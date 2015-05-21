var sequelize = require('sequelize');
var moment = require('moment');
var request = require('request');


exports.forex = {
  name: 'dbGetForexRates',
  description: 'Get data from MySQL database',
  inputs: {
    codes: [
      required = true,
    ],
    optional: [],
  },
  outputExample:{"query":{"count":2,"created":"2015-03-12T02:16:27Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"1","execution-stop-time":"2","execution-time":"1","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.xchange.xml"},{"execution-start-time":"3006","execution-stop-time":"3013","execution-time":"7","content":"http://download.finance.yahoo.com/d/quotes.csv?s=EURUSD=X&f=snl1d1t1ab"},{"execution-start-time":"3006","execution-stop-time":"3013","execution-time":"7","content":"http://download.finance.yahoo.com/d/quotes.csv?s=GBPUSD=X&f=snl1d1t1ab"}],"publiclyCallable":"true","cache":[{"error":"Timed out waiting for operation - failing node: localhost/127.0.0.1:11211","execution-start-time":"505","execution-stop-time":"3006","execution-time":"2501","method":"GET","type":"MEMCACHED","content":"8251a0ff2fae33ba24cbed4509e06a2a"},{"error":"Timed out waiting for operation - failing node: localhost/127.0.0.1:11211","execution-start-time":"506","execution-stop-time":"3006","execution-time":"2500","method":"GET","type":"MEMCACHED","content":"5372a187be7ec34f4e273188d21b0c77"}],"javascript":["Unable to retrieve query results from cache, Timed out waiting for operation - failing node: localhost/127.0.0.1:11211","Unable to retrieve query results from cache, Timed out waiting for operation - failing node: localhost/127.0.0.1:11211",{"execution-start-time":"504","execution-stop-time":"3013","execution-time":"2509","instructions-used":"35143","table-name":"yahoo.finance.xchange"},{"execution-start-time":"504","execution-stop-time":"3014","execution-time":"2509","instructions-used":"37324","table-name":"yahoo.finance.xchange"}],"query":[{"execution-start-time":"3006","execution-stop-time":"3013","execution-time":"7","content":"select * from csv where url='http://download.finance.yahoo.com/d/quotes.csv?s=EURUSD=X&f=snl1d1t1ab' and columns='Symbol,Name,Rate,Date,Time,Ask,Bid'"},{"execution-start-time":"3006","execution-stop-time":"3014","execution-time":"8","content":"select * from csv where url='http://download.finance.yahoo.com/d/quotes.csv?s=GBPUSD=X&f=snl1d1t1ab' and columns='Symbol,Name,Rate,Date,Time,Ask,Bid'"}],"user-time":"3015","service-time":"5016","build-version":"0.2.58"},"results":{"rate":[{"id":"EURUSD","Name":"EUR/USD","Rate":"1.0515","Date":"3/12/2015","Time":"2:16am","Ask":"1.0515","Bid":"1.0515"},{"id":"GBPUSD","Name":"GBP/USD","Rate":"1.4920","Date":"3/12/2015","Time":"2:16am","Ask":"1.4922","Bid":"1.4917"}]}}},

  run: function(api, connection, next){    
    api.log("Starting action 'dbGetForexRates'");
    
    // search for specific attributes - hash usage
    //forex_rate.findAll({ where: { name: 'A Project' } }).then(function(projects) {
    api.models.forex_rate.findAll().then(function(forex_rate) {      
      // projects will be an array of Project instances with the specified name
      connection.response.results = forex_rate;  
      //console.log("Got response from ForexAPI: ", JSON.stringify(forex_rate));
      next(connection, true);
    }).on('error', function(e) {
          console.log("Got error: ", e);
    });
    api.log("Completed action 'dbGetForexRates'");  
  }  
};
   