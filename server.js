// var connect = require('connect');
// var serveStatic = require('serve-static');
// var app = connect();
// app.use(serveStatic(__dirname + '/builds'));
// app.use(serveStatic(__dirname + '/public', {'index':['index.html', 'index']}));
// app.listen(3000);

var express = require('express');
var stormpath = require('express-stormpath');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser')
var app = express();

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount () {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});

app.use(serveStatic(__dirname + '/builds'));
app.use(serveStatic(__dirname + '/public', {'index':['index.html', 'index']}));
 
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');
  
  app.listen(3000, '0.0.0.0', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://0.0.0.0:3000');
  });
});
 