// Vocab declared as global node variable and imported in server.js

exports.getAllWeeks = (req, res) => {
    Schedule.find({}, (err, schedule) => {
      if (err) res.send(err);
      res.json(schedule);
    });
  };
  
  exports.addWeek = (req, res) => {
    const newWeek = new Schedule(req.body);
    newWeek.save((err, week) => {
      if (err) res.send(err);
      //res.json(word);
      res.json({ message: 'Week Added', week: week });
      console.log(`Week ${week.weekId} added`);
    });
  };
  
  exports.getWeek = (req, res) => {
    Schedule.findById(req.params.weekId, (err, week) => {
      if (err) res.send(err);
      res.json(week);
    });
  };
  
  exports.updateWeek = (req, res) => {
    Schedule.findOneAndUpdate(
      { _id: req.params.weekId },
      req.body,
      { new: true },
      (err, week) => {
        if (err) res.send(err);
        res.json(week);
      }
    );
  };
  
  exports.deleteWeek = (req, res) => {
    Schedule.deleteOne({ _id: req.params.weekId }, err => {
      if (err) res.send(err);
      res.json({
        message: 'Week successfully deleted',
       _id: req.params.weekId
      });
    });
  };