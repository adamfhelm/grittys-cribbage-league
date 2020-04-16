 // initialize index router.

const indexRouter = express.Router(); 
const express = require('express');


module.exports = (app) => {
// Catch all router.  Leave it up to Angular to display default request that doesn't conform to routes defined above.

indexRouter.get("/*", function(req, res) {
    //res.end("You will be getting back the angular page app");
    res.sendFile(__dirname + '/client');
});
app.use('/', indexRouter);
};