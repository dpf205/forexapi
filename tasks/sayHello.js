exports.sayHello = {
  name:          'sayHello',
  description:   'I say hello',
  queue:         "default",
  plugins:       [], 
  pluginOptions: [],
  frequency:     1000,
  run: function(api, params, next){
    api.log("hello")
    next();
  }
};

exports.sayGoodbye = {
  name:          'sayGoodbye',
  description:   'I say goodbye',
  queue:         "default",
  plugins:       [], 
  pluginOptions: [],
  frequency:     2000,
  run: function(api, params, next){
    api.log("goodbye")
    next();
  }
};