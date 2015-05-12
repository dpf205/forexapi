var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GOOGLE_USERNAME,
        pass: process.env.GOOGLE_PASSWORD
    }
});

exports.emailTest = {
  name: 'emailtest',
  description: 'Test Email',

  outputExample:{"Test": "Test"},

  run: function(api, connection, next){    


  // api.tasks.enqueue(nameOfTask, args, queue, callback)
  api.tasks.enqueue("sendErrorMail", {to: 'alerts@mixfin.com', subject: 'test email', body: "test body"}, 'default', function(err, toRun){
    // enqueued!
  });

    connection.response.documentation = {"Test": "Test"};
    next(connection, true);
  }
};