// Module Functions:

/* For each team in the match update aggregate history to include 
current match results.
 
 1.) for each team, get the team's history and assign it to
 the team history object. 
 2.) send team's history and current week's data to be calculated
 3.) Update request body with results of calculation
 4.) Update appropriate roster document in Mongo - happens twice.
 
 */

const doMath = require('./helpers/mathController');

exports.currentWeek = (req, res) => {
  // set teams array for cycling both teams in the match in the
  // "teams.forEach loop"
  console.log("Team2", req.body.child[0].team2);
  const teams = [req.body.child[0].team1, req.body.child[0].team2];
  // Assign the req.body to weekResults to hand off to the 
  // calculateTeamTotals method.
  const weekResults = req.body.child[0];
  console.log("week results",weekResults);
  // loop through the teams array and update mongo
  teams.forEach(async (curTeam) => {
    
    // get teams aggregates before today's games / assign them to teamObject.
    const teamObject = await getTeam(curTeam, res);
    //console.log("teamObject", teamObject)
    // Assign reasults to the teamHistory.
    const teamHistory = teamObject;
    console.log("teamHistory", teamHistory)
    // Send both teams, the current in the loop's history and
    // this week's results to the calculateTeamTotals method for caclulation.
    let teamRes = doMath.calculateTeamTotals(teams, teamHistory, weekResults);
    // assign caclulated results to the appropriate property
     console.log("teamRes", teamRes);
         
    req.body.wins = teamRes.wins;
    req.body.pts = teamRes.pts;
    req.body.pegs = teamRes.pegs;

    // Todo: erase the following after more robust testing
    // it has been refactored into doMath.calculateTeamTotals
    //  if(curTeam == teams[0]) {  
    //  req.body.pegs = teamHistory.pegs + weekResults.pegsTeam1
    //  } else {
    //  req.body.pegs = teamHistory.pegs + weekResults.pegsTeam2;
    //  }

    Roster.findOneAndUpdate(
      { _id: curTeam },
      req.body,
      { new: true },
      (err, team) => {
        if (err) res.send(err);
        //if (curTeam == teams[1]) res.json(team);
      }
    );
    //After all aggregate roster history is updated return the results of this match
    //back to the API call.
    if (curTeam == teams[1]) {
      Schedule.find({}).sort({ _id: -1 }).limit(1).exec((err, schedule) => {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          res.json(schedule);
        }
      });
    }
  })
}
// Get current team's historical data from Roster
const getTeam = (req, res) => {
  console.log("getTeamRequest", req)
  return Roster.findById(req, (err) => {
    if (err) res.send(err);
  });
};