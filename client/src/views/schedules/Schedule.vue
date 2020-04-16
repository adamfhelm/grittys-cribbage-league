<template>
  <sui-container fluid>
    <h4 class="ui header center aligned schedule">
      <em>CRIBBAGE SCHEDULE</em>
    </h4>
    <sui-table striped compact celled padded table class="table-buffer">
        <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>TEAMID</sui-table-header-cell>
        <sui-table-header-cell>PLAYERS</sui-table-header-cell>
        <sui-table-header-cell v-for="(number, i) in totalWeeks" :key="i">WK{{i+1}}</sui-table-header-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell class="blank"></sui-table-cell>
        <sui-table-cell class="blank"></sui-table-cell>
        <sui-table-header-cell v-for="(date, i) in allDates" :key="i">{{ date.gameDate.substring(5,10) }}</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-row v-for="(players, i) in allPlayers" :key="i">
      <sui-table-cell class="blank">{{players.league}}{{players.teamNumber}}</sui-table-cell>
      <sui-table-cell>{{ players.player1 }}&{{players.player2}}</sui-table-cell>
      <sui-table-cell selectable v-for="(week, j) in allDates" :key="j">
           <!-- calls views/admin/addWeek > components/gamePlay/WeekForm -->
           <router-link  :to="{ name: 'addWeek', query: {selectedTeam: players, week: week.weekId, match: players.schedule[j] } }">
          {{players.schedule[j]}}
           </router-link>
    </sui-table-cell>
    </sui-table-row>
    </sui-table>
  </sui-container>
</template>
<script>
import { api } from "@/services/scheduleService"

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
  color: dark-brown;
}
table.table-buffer{
  position: absolute;
  left: 0px;
}

a {
    text-decoration: underline;
    font-weight: bold;
    color: #F40A4C;
  }
  a:hover {
    color: #343a40;
  }
tr:hover {
  background-color: #E2F7F2 !important;
}
td.blank{
  background-color: white !important;
}
</style>
