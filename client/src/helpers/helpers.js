import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 2000,
        pauseOnInteract: true
    }
})

const vm = new Vue
const standingsURL = 'http://localhost:3000/api/roster/standings/'
const createScheduleURL = 'http://localhost:3000/api/schedule/'
const updateWeekURL = 'http://localhost:3000/api/schedule/'
const rosterURL = 'http://localhost:3000/api/roster/'
const matchURL = 'http://localhost:3000/api/match/'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error')
    })
export const api = {
    getMatchPlayerDetails: handleError(async payload => {    
        const jsonData = JSON.stringify(payload)
        const res = await axios.get(matchURL + jsonData)    
        return res.data  
    }),
    getStandings: handleError(async leagueId => {
        const res = await axios.get(standingsURL + leagueId)
        return res.data
    }),
    getTeams: handleError(async () => {
        const res = await axios.get(rosterURL)
        return res.data
    }),
    getTeam: handleError(async id => {    
        const res = await axios.get(rosterURL + id)
        return res.data  
    }),
    updateTeam: handleError(async payload => {    
        const res = await axios.put(rosterURL + payload._id, payload)    
        return res.data  
    }),
    createTeam: handleError(async payload => {    
        const res = await axios.post(rosterURL, payload)    
        return res.data  
    }),
    deleteTeam: handleError(async id => {    
        const res = await axios.delete(rosterURL + id)    
        return res.data  
    }),
    createSchedule: handleError(async payload => {    
        const res = await axios.post(createScheduleURL, payload)    
        return res.data  
    }),
    getTotalWeeks: handleError(async payload => {    
        const res = await axios.get(createScheduleURL, payload)    
        return res.data  
    }),
    getAllDates: handleError(async payload => {    
        const res = await axios.get(createScheduleURL, payload)    
        return res.data  
    }),
    updateWeek: handleError(async payload => {   
        const res = await axios.put(updateWeekURL, payload)    
        return res.data  
    })
}