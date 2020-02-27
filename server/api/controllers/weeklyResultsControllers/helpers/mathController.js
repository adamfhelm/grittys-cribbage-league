/* 
Purpose:
Used to return updated team data 
to the calling function based on team's 
history and current week's match results.
 
Inputs:
teams: array of ids
teamHistory: object containing team's historical data
weekResults: object containing current week's data.

Outputs:
Object containing wins, pts, pegs

*/

exports.calculateTeamTotals = (teams, teamHistory, weekResults) => {
 //console.log("teams " + teams, "teamHistory " + teamHistory, "weekResults" + weekResults )
  let returnObj = {};

  // string compare hence ==
  if (teamHistory._id == teams[0]) {

    totalTeamWins = weekResults.winsTeam1 + teamHistory.wins;
    totalTeamPts = weekResults.ptsTeam1 + teamHistory.pts;
    totalTeamPegs = weekResults.pegsTeam1 + teamHistory.pegs;

    // Assign to body attributes for update to MongoDB
    returnObj.wins = totalTeamWins;
    returnObj.pts = totalTeamPts;
    returnObj.pegs = totalTeamPegs;

  } else if (teamHistory._id == teams[1]) {
    totalTeamWins = weekResults.winsTeam2 + teamHistory.wins;
    totalTeamPts = weekResults.ptsTeam2 + teamHistory.pts;
    totalTeamPegs = weekResults.pegsTeam2 + teamHistory.pegs;
    // Assign to body attributes for update to MongoDB
    returnObj.wins = totalTeamWins;
    returnObj.pts = totalTeamPts;
    returnObj.pegs = totalTeamPegs;
  }
  return returnObj;
}