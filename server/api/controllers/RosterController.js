// Roster declared as global and imported into server.js

exports.getAllTeams = (req, res) => {
  Roster.find({}, (err, roster) => {
    if (err) res.send(err);
    res.json(roster);
  });
};

exports.addTeam = (req, res) => {
  const newTeam = new Roster(req.body);
  newTeam.save((err, team) => {
    if (err) res.send(err);
    res.json({ message: 'Team Added', team: team });
    //console.log(`Team Added: ${team.player1} and ${team.player2} Added`);
  });
};

exports.getTeam = (req, res) => {
  Roster.findById(req.params.teamId, (err, team) => {
    if (err) res.send(err);
    res.json(team);
  });
};

exports.updateTeam = (req, res) => {
  Roster.findOneAndUpdate(
    { _id: req.params.teamId },
    req.body,
    { new: true },
    (err, team) => {
      if (err) res.send(err);
      res.json(team);
    }
  );
};

exports.deleteTeam = (req, res) => {
  Roster.deleteOne({ _id: req.params.teamId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Team successfully deleted',
      _id: req.params.teamId
    });
  });
};