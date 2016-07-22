require('babel-register')({
   presets: [ 'es2015' ]
});

// start loopback app
require('./server/server.js').start();