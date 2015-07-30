
var task = {
  name:          "JobManager",
  description:   "JobManager",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     60000,
  run: function(api, params, next){
      api.log("Starting Task 'JobManager'"); 

      api.tasks.enqueue("getForexData", {to: 'admin@mixfin.com'}, 'default', function(err, toRun){
        if(err){
            api.log(err);
            api.tasks.enqueue("sendErrorMail", {to: 'alerts@mixfin.com', subject: 'JobManager Error', body: err}, 'default', function(err, toRun){
            // enqueued!
            });
        }
      });


      api.log("Ending task 'JobManager'");
      next();
  }
};


exports.task = task;