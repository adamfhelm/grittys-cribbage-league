
const NCLSchedule = require('../controllers/scheduleControllers/NCLScheduleController');
const WeeklyResults = require('../controllers/weeklyResultsControllers/addWeekController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

  // set api to a static base route to diferentiate from application routes
  app.use('/api', router);

  //master schedule route
  router.route('/schedule')
  .post(NCLSchedule.addNewSchedule)
  .get(NCLSchedule.getAllWeeks)

  // update schedule with results of new week.
  router.route('/schedule')
  .put(WeeklyResults.addWeek)

  router.route('/ncl/schedule')
   // .get(NCLSchedule.getAllWeeks)
   // .post(WeeklyResults.addWeek)
    .delete(NCLSchedule.deleteAll);

  router.route('/ncl/schedule/:weekId')
    .get(NCLSchedule.getWeek)
    .put(NCLSchedule.updateWeek)
    .delete(NCLSchedule.deleteWeek);

};








