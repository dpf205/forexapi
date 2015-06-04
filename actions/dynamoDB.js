var AWS = require('aws-sdk');
// Set your region for future requests.
AWS.config.region = 'us-east-1';

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.dynamoDB = {
  name: 'dynamoDB',
  description: 'get twitter auth code',
  inputs: {
    codes: [
      required = true,
    ],
    optional: [],
  },
  outputExample:{"query":"test"},
  
  run: function(api, connection, next){ 
    api.log("Starting task 'dynamoDB'"); 
    
    var params = {
      Limit: 10
    };


    dynamodb.listTables(params, function(err, data) {
      if (err){
        api.log(err, err.stack); // an error occurred
      }
      else{
        connection.response.documentation = data;
        api.log(data);
        next(connection, true);
      }
    });
    api.log("Ending task 'dynamoDB'"); 
  },  
};