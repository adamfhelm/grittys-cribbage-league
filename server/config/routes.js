module.exports = (app) => {
    require('../api/routes/ScheduleRoutes')(app);
    require('../api/routes/RosterRoutes')(app);
    require('../api/routes/StandingsRoutes')(app);
    require('../api/routes/MatchRoutes')(app);
    }
    