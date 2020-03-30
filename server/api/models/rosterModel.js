const mongoose = require('mongoose');
const { Schema } = mongoose;
const RosterSchema = new Schema(  
	{    
        player1: {      
            type: String,      
		    required: 'Player One Cannot Be Blank'    
        },
        player2: {
            type: String,
            required: 'Player One Cannot Be Blank'
        },
        teamNumber: Number,
        wins: Number,
        pegs: Number,
        pts:  Number,
        league: {
            type: String,
            required: 'Player must belong to a league'
        },
        schedule: Array   
	},  
	{ collection: 'roster' });

module.exports = mongoose.model('Roster', RosterSchema);
 
