const StandingsController = require('../controllers/StandingsController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

    // set api to a static base route to diferentiate from application routes
    app.use('/api', router);

    router.route('/roster/standings/:leagueId')
        .get(StandingsController.getStandings);
};