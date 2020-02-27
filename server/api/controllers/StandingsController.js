  exports.getStandings = (req,res) => {
    Roster.find({league:req.params.leagueId}).sort({points: -1, wins: -1, pegs: -1}).exec((err, wins) => {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.jsonp(wins);
      }
    });
  };


  