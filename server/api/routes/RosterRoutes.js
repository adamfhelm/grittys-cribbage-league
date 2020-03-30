const RosterController = require('../controllers/RosterController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

    // set api to a static base route to diferentiate from application routes
    app.use('/api', router);

    router.route('/roster')
        .get(RosterController.getAllTeams)
        .post(RosterController.addTeam);

        router.route('/roster/:teamId')
        .get(RosterController.getTeam)
        .put(RosterController.updateTeam)
        .delete(RosterController.deleteTeam);
    };