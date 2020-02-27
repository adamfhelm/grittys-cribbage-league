module.exports = (app) => {

    require('../api/routes/ACLroutes')(app);
    require('../api/routes/NCLroutes')(app);
    require('../api/routes/RosterRoutes')(app);
    require('../api/routes/StandingsRoutes')(app);
    
    }
    