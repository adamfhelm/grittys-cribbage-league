
import Standings from '@/views/currentStandings.vue'
import Roster from '@/views/teamSetup/roster.vue'
import ShowTeam from '@/views/teamSetup/showTeam.vue'
import addTeamSchedule from '@/views/teamSetup/addTeamSchedule.vue'
import editTeamSchedule from '@/views/teamSetup/editTeamSchedule.vue'
import EditTeam from '@/views/teamSetup/editTeam.vue'
import NewTeam from '@/views/teamSetup/newTeam.vue'

const routes = [

  {
    path: '/standings',
    name: 'standings',
    component: Standings
  },
  {
    path: '/roster',
    name: 'roster',
    component: Roster
  },
  {
    path: '/roster/:id',
    name: 'showTeam',
    component: ShowTeam
  },
  {
    path: '/roster/add-team-schedule/:id',
    name: 'addTeamSchedule',
    component: addTeamSchedule
  },
  {
    path: '/roster/edit-team-schedule/:id',
    name: 'editTeamSchedule',
    component: editTeamSchedule
  },
  {
    path: '/roster/:id/edit-team',
    name: 'editTeam',
    component: EditTeam
  },
  {
    path: '/roster/new',
    name: 'newTeam',
    component: NewTeam
  }
]

export default routes