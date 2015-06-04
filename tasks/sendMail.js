var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GOOGLE_USERNAME,
        pass: process.env.GOOGLE_PASSWORD
    }
});

var task = {
  name:          "sendMail",
  description:   "sendMail",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     0,
  run: function(api, params, next){
      api.log("Starting Task 'sendMail'"); 

      api.log("Params: " + JSON.stringify(params));


      var mailOptions = {
        from: 'MIXFIN ALERTS <alerts@mixfin.com>', // sender address
        to: params.to, // list of receivers
        subject: params.subject, // Subject line
        text: params.body, // plaintext body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          if(error){
              api.log(error);
          }else{
              api.log('Message sent: ' + info.response);
          }
      });

      api.log("Ending task 'sendMail'");
      next();
  }
};

var task = {
  name:          "sendErrorMail",
  description:   "sendErrorMail",
  queue:         "default",
  plugins:       [], 
  pluginOptions: [], 
  frequency:     0,
  run: function(api, params, next){
      api.log("Starting Task 'sendErrorMail'"); 

      api.log("Params: " + JSON.stringify(params));


      var mailOptions = {
        from: 'MIXFIN ALERTS <alerts@mixfin.com>', // sender address
        to: 'david.larrimore@mixfin.com, admin@mixfin.com', // list of receivers
        subject: '[Mixfin Alerts] - ' + params.subject, // Subject line
        text: params.body, // plaintext body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          if(error){
              api.log(error);
          }else{
              api.log('Message sent: ' + info.response);
          }
      });

      api.log("Ending task 'sendErrorMail'");
      next(); //task will fail if sendEmail does
  }
};


exports.task = task;