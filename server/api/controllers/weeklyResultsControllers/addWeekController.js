const appendResults = require('./aggregateWeeklyResultsIntoRoster');
const skunkCheck = require('./helpers/skunkCheck');

exports.addWeek = (req, res) => {

  // initialize variables

  const resultsArray = req.body.child[0].results;
  const team1 = req.body.child[0].team1;
  let winsTeam1 = 0;
  let winsTeam2 = 0;
  let ptsTeam1 = 0;
  let ptsTeam2 = 0;
  let totalPegsTeam1 = 0;
  let totalPegsTeam2 = 0;
  let combinedTotalPegs = 0;

  // 1.  Derive Team Wins & Total Pegs - Current Week.

  /* loop through results array, get winning team string
   and increment wins for that team. */
  resultsArray.forEach(function (game) {
    
    let winningTeam = game.substring(0, game.indexOf(","));
    //console.log("winningTeam", winningTeam)
    let pegCount = parseInt(game.substring(game.indexOf(",") + 1));
    //console.log("pegCount", pegCount)
    if (winningTeam == team1) {
     // console.log("equality")
      winsTeam1++;
      ptsTeam1 += 2;
      totalPegsTeam1 += pegCount;
      combinedTotalPegs += pegCount;
      // apply bonus points for skunk.
      ptsTeam1 += skunkCheck.skunkDetails(pegCount);
    } else {
      winsTeam2++;
      ptsTeam2 += 2;
      totalPegsTeam2 += pegCount;
      combinedTotalPegs -= pegCount;
      // apply bonus points for skunk.
      ptsTeam2 += skunkCheck.skunkDetails(pegCount);
    }
  })
  //Determine whether to add or subtract pegs from team total
  // used to update the teams' history this week's results.
  if (totalPegsTeam1 > totalPegsTeam2) {
    req.body.child[0].pegsTeam1 = Math.abs(combinedTotalPegs);
    req.body.child[0].pegsTeam2 = -Math.abs(combinedTotalPegs);
  }
  if (totalPegsTeam1 < totalPegsTeam2) {
    req.body.child[0].pegsTeam1 = -Math.abs(combinedTotalPegs);
    req.body.child[0].pegsTeam2 = Math.abs(combinedTotalPegs);
  }

  // put the wins on the respective request body attribute
  // for storing in Mongo.
  req.body.child[0].winsTeam1 = winsTeam1;
  req.body.child[0].winsTeam2 = winsTeam2;
  req.body.child[0].ptsTeam1 = ptsTeam1;
  req.body.child[0].ptsTeam2 = ptsTeam2;



  // 2. Save this week's match data.  Enable this in order to save
  // every match to the schedule collection.

  const newWeek = new Schedule(req.body)  
  newWeek.updateWeek = (req, res) => {
    Schedule.updateOne(
      { weekId: req.body.weekId },
      {$push: {child: req.body.child}},
      { upsert: true },
      (err, week) => {
        if (err) res.send(err);
       // res.json(week);
      }
    );
  };

newWeek.updateWeek(req,res)

  // 3. Append current week results to the team's aggregate totals.

  appendResults.currentWeek(req, res);

};