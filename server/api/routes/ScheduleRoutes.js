
const Schedule = require('../controllers/scheduleControllers/ScheduleController');
const WeeklyResults = require('../controllers/weeklyResultsControllers/addWeekController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

  // set api to a static base route to diferentiate from application routes
  app.use('/api', router);

  //master schedule route
  router.route('/schedule')
  .post(Schedule.addNewSchedule)
  .get(Schedule.getAllWeeks)

  // update schedule with results of new week.
  router.route('/schedule')
  .put(WeeklyResults.addWeek)

  // router.route('/crib-schedule')
  //   .delete(Schedule.deleteAll);

  router.route('/crib-schedule/:weekId')
    .get(Schedule.getWeek)
};









