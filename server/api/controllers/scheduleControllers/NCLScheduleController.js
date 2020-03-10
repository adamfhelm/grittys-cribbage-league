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


// exports.create = function(req, res) {
//   var shoe = new Shoe(req.body);
//   //console.log("I am here", shoe);
//   shoe.user = req.user;
//   shoe.userProfileImageURL = req.user.profileImageURL;
//   shoe.contactemail = req.user.email;

//   shoe.save(function(err) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     } else {
//       res.jsonp(shoe);
//     }
//   });
// };
const saveWeek = (schedule,res) => {
  const newScheduleWeek = new Schedule(schedule);
  newScheduleWeek.save((err, week) => {
    //if (err) res.send(err);
    //res.json({ message: 'Schedule Added', week: week });
    //console.log(`Team Added: ${team.player1} and ${team.player2} Added`);
  });
}

exports.addNewSchedule = (req, res) => {
  const scheduleObj = req.body;
  console.log("request body", req.body)
  //let gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate() + scheduleObj.days);
  let gameDate = new Date();
  scheduleObj.weeksArr.forEach(async (week) => {
    console.log("week",week)
    newScheduleWeek = await new Schedule(req.body);
      if(week === 1) {
        gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate());  
      } else {
        gameDate = new Date(scheduleObj.startDate).setDate(new Date(scheduleObj.startDate).getDate() + (scheduleObj.days*(week - 1) ));
      }
      newScheduleWeek.gameDate = new Date(gameDate).toUTCString()
      console.log("Date", newScheduleWeek.gameDate)
      newScheduleWeek.weekId = week;

    saveWeek(newScheduleWeek,res);
  })
}

  
  // const newScheduleWeek = new Schedule(req.body);
  // newScheduleWeek.gameDate = req.body.gameDate;
  // newScheduleWeek.weekId = req.body.weekId;
  // newScheduleWeek.save(function(err, week) {
  //   if (err && res) {
  //     return res.status(400).send({
  //       message: errorHandler.getErrorMessage(err)
  //     });
  //   } else if(res) {
  //     res.jsonp({message: 'Week Added', week: week});
  //     console.log(`Week ${week.weekId} added`);
  //   }
  // });


exports.deleteAll = (req, res) => {
  Schedule.remove({}, err => {
    if (err) res.send(err);
    res.json({
      message: 'Week successfully deleted',
      _id: req.params.weekId
    });
  });
};