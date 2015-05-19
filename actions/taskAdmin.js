exports.taskDetails = {
  name: 'taskDetails',
  description: 'details',
   
  outputExample:{"queues":{"yahooApi":{"length":0}},"workers":{"Davids-MBP.fios-router.home:11359+1":"started"}},

  run: function(api, connection, next){

    api.tasks.details(function(err, details){
      api.log("Data: " + JSON.stringify(details));
      connection.response = details;
      next(connection, true);
    });
  }
};

exports.taskWorkingOn = {
  name: 'taskWorkingOn',
  description: 'taskWorkingOn',
   
  outputExample:{"queues":{"yahooApi":{"length":0}},"workers":{"Davids-MBP.fios-router.home:11359+1":"started"}},

  run: function(api, connection, next){

    api.tasks.allWorkingOn(function(err, workers){
      api.log("Data: " + JSON.stringify(workers));
      connection.response = workers;
      next(connection, true);
    });
  }
};

exports.taskAllDelayed = {
  name: 'taskAllDelayed',
  description: 'taskAllDelayed',
   
  outputExample:{"queues":{"yahooApi":{"length":0}},"workers":{"Davids-MBP.fios-router.home:11359+1":"started"}},

  run: function(api, connection, next){

    api.tasks.allDelayed(function(err, jobs){
      api.log("Data: " + JSON.stringify(jobs));
      connection.response = jobs;
      next(connection, true);
    });
  }
};

exports.taskFailedCount = {
  name: 'taskFailedCount',
  description: 'taskFailedCount',
   
  outputExample:{"queues":{"yahooApi":{"length":0}},"workers":{"Davids-MBP.fios-router.home:11359+1":"started"}},

  run: function(api, connection, next){

    api.tasks.failedCount(function(err, failedCount){
      api.log("Data: " + JSON.stringify(failedCount));
      connection.response = failedCount;
      next(connection, true);
    });
  }
};


exports.taskScheduledAt = {
  name: 'taskScheduledAt',
  description: 'taskScheduledAt',
   
  outputExample:{"queues":{"yahooApi":{"length":0}},"workers":{"Davids-MBP.fios-router.home:11359+1":"started"}},

  run: function(api, connection, next){

    api.tasks.scheduledAt(function(err, failedCount){
      api.log("Data: " + JSON.stringify(failedCount));
      connection.response = failedCount;
      next(connection, true);
    });
  }
};

