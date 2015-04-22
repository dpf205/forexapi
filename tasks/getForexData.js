var Sequelize = require('sequelize');
var https = require("http");

var task = {
  name:          "getForexData",
  description:   "GetForexData",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     60000,
  run: function(api, params, next){
      api.log("Starting task 'getForexData'");
      var url = "http://127.0.0.1:8080/api/getActiveForexRates?apiVersion=1";
      api.log ("URL: " + url);
      var data = "";  
    
      https.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
          data = JSON.parse(body);
          api.log("Got response from getActiveForexRates: ", JSON.stringify(data.results));
            

          api.log("Converting JSON to Javascript Object"); 
          var jsonObj = JSON.parse(JSON.stringify(data.results.rate));

          for(var i = 0; i < jsonObj.length; i++) {
            //TODO: Need to convert to date/Time
            api.log("inserting: " + jsonObj[i].id);

            //var stringDate = new Date(Date.parse(jsonObj[i].Date + ' ' + jsonObj[i].Time));

            var dateParts = jsonObj[i].Date.split('/');
            api.log("yyyy-MM-dd: " + dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1]);
            
            var ampm = jsonObj[i].Time.substring(jsonObj[i].Time.length - 2, jsonObj[i].Time.length);
            api.log("AM/PM: " + ampm);

            var timeParts = jsonObj[i].Time.split(':');
            var hour = timeParts[0];
            var minute = timeParts[1].substring(0, timeParts[1].length - 2);
            if (ampm = "pm"){
              hour = parseInt(timeParts[0]) + 12;
            }
            api.log("Time: " + hour + ':' + minute);

            api.log("New Date String: " + dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1] + " " + hour + ":" + minute);
            
            // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
            var newDate = new Date(dateParts[2], dateParts[0]-1, dateParts[1], hour, minute);
            api.log("New Date: " + newDate);

            api.models.forex_rate.findOrCreate({
              where: {nk: newDate.getTime() + '~' + jsonObj[i].id}, 
              defaults: {
                date: newDate.getTime(),
                code: jsonObj[i].id,
                name: jsonObj[i].Name,
                rate: jsonObj[i].Rate,
                bid: jsonObj[i].Bid,
                ask: jsonObj[i].Ask,
              }})
          }
          api.log("Ending task 'getForexData'");
          next();
        });
    }).on('error', function(e) {
              console.log("Got error: ", e);
      });
  }
};

exports.task = task;