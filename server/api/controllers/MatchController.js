  exports.getMatchDetails = (req, res) => {
    
    const league = req.params.params.league
    const teamNumber = req.params.params.team
    //JSON.parse(req.params.parameter);
    const json = JSON.parse(req.params.params)
   
    Roster.find({league:json.league, teamNumber:json.team}, {player1: 1, player2: 1, _id: 1}).exec((err, players) => {
      if (err) res.send(err);
      res.json(players);
    });
  };