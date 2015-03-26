var task = {
  name:          "getForexData",
  description:   "GetForexData",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     0,
  run: function(api, params, next){
    api.sendEmail(params.email, function(err){
      next(err); //task will fail if sendEmail does
    })
  }
};

exports.task = task;