var Twit = require('twit');

var T = new Twit({
    consumer_key:         'sv2m2aRM08vqbE6jO90X63oVP'
  , consumer_secret:      'AJ3JczfU8HGjxtjJCuaf77yNAcNDJWm3u9pMP7w91zHVgax0of'
  , access_token:         '316115234-XMUYKLfTIykUS6qg4SQFf99A1pz6SbMAMrhDU6F9'
  , access_token_secret:  'kUF1QU5QmLR3Z1VkS5E7SBVYhyshcUYgucm6mUrQ6xMlr'
});


var fs    = require('fs');

exports.getForexRates = {
  name: 'twitterauth',
  description: 'get twitter auth code',
  inputs: {
    codes: [
      required = true,
    ],
    optional: [],
  },
  outputExample:{"query":"test"},
  
  run: function(api, connection, next){ 

  //
  //  search twitter for all tweets containing the word 'banana' since Nov. 11, 2011
  //
  T.get('search/tweets', { q: 'USDGBP since:2013-11-11', count: 100 }, function(err, data, response) {
    api.log(data);
    connection.response.documentation = data;
    next(connection, true);
 
  })

  }
    
};