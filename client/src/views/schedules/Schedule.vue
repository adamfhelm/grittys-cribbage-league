<template>
  <div>
    <h4 class="ui header center aligned schedule">
      <em>CRIBBAGE SCHEDULE</em>
    </h4>
    <sui-table striped compact celled padded center aligned class="table-buffer">
        <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>TEAMID</sui-table-header-cell>
        <sui-table-header-cell>PLAYERS</sui-table-header-cell>
        <sui-table-header-cell v-for="(number, i) in totalWeeks" :key="i">WK{{i+1}}</sui-table-header-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell></sui-table-cell>
        <sui-table-cell></sui-table-cell>
        <sui-table-header-cell v-for="(date, i) in allDates" :key="i">{{ date.gameDate.substring(5,10) }}</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-row v-for="(players, i) in allPlayers" :key="i">
      <sui-table-cell>{{players.league}}{{players.teamNumber}}</sui-table-cell>
      <sui-table-cell>{{ players.player1 }}&{{players.player2}}</sui-table-cell>
      <sui-table-cell selectable v-for="(week, j) in allDates" :key="j">
           <!-- calls views/admin/addWeek > components/gamePlay/WeekForm -->
           <router-link  :to="{ name: 'addWeek', query: {selectedTeam: players, week: week.weekId, match: players.schedule[j] } }">
          {{players.schedule[j]}}
           </router-link>
    </sui-table-cell>
    </sui-table-row>
    </sui-table>
  </div>
</template>
<script>
import { api } from "../../helpers/helpers.js"
export default {
  name: "schedule",
  data() {
    return { 
      totalWeeks: [],
      allDates: [],
      allPlayers: []
    }
  },
  async mounted() {
    this.totalWeeks = await api.getTotalWeeks()
    this.allDates = await api.getAllDates()
    this.allPlayers = await api.getTeams()
  }
}
</script>
<style scoped>
h4.schedule {
  color: brown;
}
table.table-buffer{
  position: absolute;
  left: 0px;
}

</style>
