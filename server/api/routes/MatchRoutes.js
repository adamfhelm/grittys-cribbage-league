const MatchController = require('../controllers/MatchController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

    // set api to a static base route to diferentiate from application routes
    app.use('/api', router);

    router.route('/match/:params')
        .get(MatchController.getMatchDetails);
    };