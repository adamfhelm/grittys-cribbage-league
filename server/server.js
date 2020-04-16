// Set Globals for now holds the Vocab model:
const globals = require('./config/globals');

// Use Express:
const express = require('express');

//Initialize Express:
const app = express();

// Use cors, body parser, and morgan for dev logging
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Leverage development logging, Cors, body parser, for url and json
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));  // url data
app.use(bodyParser.json()); // json data

// Express directive to serve up the client folder statically:

app.use(express.static(__dirname + '/dist'));

// RESTful routes.

require('./config/routes')(app);


// MongoDB DAD:
const dbconfig = require('./config/dbconfig');

// Establish Mongoose Connection to Mongodb:
require('./config/mongoose')(dbconfig);

// Set port
const port = process.env.PORT || 3000;

// Initiaize app to listen on port
app.listen(port, function () {
	console.log(`App Port: ${port}`)
	console.log(`Database Connection Mounted On: ${dbconfig.db}`)
})
