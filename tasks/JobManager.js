
var task = {
  name:          "JobManager",
  description:   "JobManager",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     60000,
  run: function(api, params, next){
      api.log("Starting Task 'JobManager'"); 

      api.tasks.enqueue(0, "getForexData", {to: 'admin@mixfin.com'}, 'default', function(err, toRun){
        if(error){
            api.log(error);
            api.tasks.enqueue("sendErrorMail", {to: 'alerts@mixfin.com', subject: 'JobManager Error', body: error}, 'default', function(err, toRun){
            // enqueued!
            });
        }
      });

      api.log("Ending task 'JobManager'");
      next();
  }
};


exports.task = task;