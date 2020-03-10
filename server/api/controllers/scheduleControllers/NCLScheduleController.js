const errorHandler = require ('./errorHandler');

exports.getAllWeeks = (req, res) => {
  Schedule.aggregate([{$sort: {gameDate:1}}], (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
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

const saveWeek = (schedule,res, stop) => {
  const newScheduleWeek = new Schedule(schedule);
  newScheduleWeek.save((err, week) => {
    if (err) res.send(err);
    if(stop) {
      console.log("I'm sending something", week)
      res.json({ message: 'Schedule Added', week: week });
    }
    console.log(`Week Added: ${schedule.weekId} and ${schedule.gameDate} Added`);
  });
}
exports.addNewSchedule = (req, res) => {
  const scheduleObj = req.body;
  //onsole.log("request body", req.body)
  const weeksArrLength = req.body.weeksArr.length;
  const stop = true;
  //let gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate() + scheduleObj.days);
  let gameDate = new Date();
  scheduleObj.weeksArr.forEach(async (week) => {
   // console.log("week",week)
    newScheduleWeek = await new Schedule(req.body);
      if(week === 1) {
        gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate());  
      } else {
        gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate() + (scheduleObj.days*(week - 1) ));
      }
      newScheduleWeek.gameDate = new Date(gameDate).toUTCString()
      //console.log("Date", newScheduleWeek.gameDate)
      newScheduleWeek.weekId = week;
    if(week !== weeksArrLength) {
    saveWeek(newScheduleWeek,res);
    } else {
      saveWeek(newScheduleWeek,res, stop);
    }
  })
}
exports.deleteAll = (req, res) => {
  Schedule.remove({}, err => {
    if (err) res.send(err);
    res.json({
      message: 'Week successfully deleted',
      _id: req.params.weekId
    });
  });
};