const mongoose = require('mongoose');
const { Schema } = mongoose;


const ScheduleSchema = new Schema(  
    {    weekId: Number,
        gameDate: Date, 
        child: [{
         team1: String,
         team2: String,
         results: Array,
        winsTeam1: Number,
        winsTeam2: Number,
        ptsTeam1: Number,
        ptsTeam2: Number,
        pegsTeam1: Number,
        pegsTeam2: Number,
        numberOfWeeks: Number }]
    },  
    { collection: 'schedule' });
    

module.exports = mongoose.model('Schedule', ScheduleSchema);

