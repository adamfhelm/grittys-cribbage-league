
const ACLSchedule = require('../controllers/scheduleControllers/ACLScheduleController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

  // set api to a static base route to diferentiate from application routes
  app.use('/api', router);

  router.route('/acl/schedule')
    .get(ACLSchedule.getAllWeeks)
    .post(ACLSchedule.addWeek);

  router.route('/acl/schedule/:weekId')
    .get(ACLSchedule.getWeek)
    .put(ACLSchedule.updateWeek)
    .delete(ACLSchedule.deleteWeek);

};








