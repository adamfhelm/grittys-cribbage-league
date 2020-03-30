<template>
  <div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar outline icon"></i>Week Number
      </div>
      <input type="text" placeholder="Enter Team1..." v-model="schedule.weekId" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Team Selected
      </div>
      <input type="text" v-model="getSelectedTeamMembers" />
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="trophy icon"></i>Choose Match
      </div>
      <sui-menu tabular>
        <a
          is="sui-menu-item"
          v-for="match in matches"
          :key="match"
          :active="isActive(match)"
          :content="match"
          @click="select(match), getMatchPlayers(match)"
        />
      </sui-menu>
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>VS
      </div>
      <input type="text" v-model="currentMatchPlayers" />
    </div>
    <!-- TODO: Break this down into a separate component -->
    <form @submit.prevent="onSubmit">
      <!-- game 1 -->
      <div class="ui labeled input fluid">
        <div class="ui label points-padding">
          <i class="trophy icon"></i> Select Game 1 Winner 
        </div>
        <sui-menu tabular>
        <a
          is="sui-menu-item"
          color="red"
          v-for="winner in currentMatchSelectWinners"
          :key="winner"
          :active="isActiveMatch1(winner)"
          :content="winner"
          @click="selectMatch1(winner), setMatchOneWinner(winner)"
        />
      </sui-menu>
      <div v-if="matchOneWinner" class="ui label points-padding">
          <i class="map pin icon"></i> Total Pegs Game 1
        </div>
    <input v-if="matchOneWinner" type="number" placeholder="Total Pegs" v-model="pegsGame1" />
      </div>
      <!-- game 2 -->
    <div class="ui labeled input fluid">
        <div class="ui label points-padding">
          <i class="trophy icon"></i> Select Game 2 Winner 
        </div>
        <sui-menu tabular>
        <a
          is="sui-menu-item"
          v-for="winner in currentMatchSelectWinners"
          :key="winner"
          :active="isActiveMatch2(winner)"
          :content="winner"
          @click="selectMatch2(winner), setMatchTwoWinner(winner)"
        />
      </sui-menu>
      <div v-if="matchTwoWinner" class="ui label points-padding">
          <i class="map pin icon"></i> Total Pegs Game 2
        </div>
    <input v-if="matchTwoWinner" type="number" placeholder="Total Pegs" v-model="pegsGame2" />
      </div>
           <!-- game 3 -->
    <div class="ui labeled input fluid">
        <div class="ui label points-padding">
          <i class="trophy icon"></i> Select Game 3 Winner 
        </div>
        <sui-menu tabular>
        <a
          is="sui-menu-item"
          v-for="winner in currentMatchSelectWinners"
          :key="winner"
          :active="isActiveMatch3(winner)"
          :content="winner"
          @click="selectMatch3(winner), setMatchThreeWinner(winner)"
        />
      </sui-menu>
      <div v-if="matchThreeWinner" class="ui label points-padding">
          <i class="map pin icon"></i> Total Pegs Game 3
        </div>
    <input v-if="matchThreeWinner" type="number" placeholder="Total Pegs" v-model="pegsGame3" />
      </div>
      <button class="positive ui button">Submit</button>
    </form>
  </div>
</template>

<script>
import { api } from "../../helpers/helpers"
export default {
  data() {
    return {
      // Week matchs are being played
      week: "",
      // team1 is the team associated with the "players" cell in the schedule row.
      selectedTeam: {},
      // match players selected as current match in the VS "field"
      currentMatchPlayers: "",
      // current match array to choose winner
      currentMatchSelectWinners: [],
      // match winner strings
      matchOneWinner: "",
      matchTwoWinner: "",
      matchThreeWinner: "",
      // Pegs won by
      pegsGame1: null,
      pegsGame2: null,
      pegsGame3: null,
     // hold the results for on submit
      results: [],
     // hold the team matches for choosing current match when mounted
     matches: [],
    }
  },
  props: {
    schedule: {
      type: Object,
      required: false,
      default: () => {
        return {
          weekId: null,
          child: []
        }
      }
    }
  },
  async mounted() {
    this.selectedTeam = this.$route.query.selectedTeam
    this.teamsPlayed = this.$route.query.match
    this.schedule.weekId = this.$route.query.week
    const index = this.teamsPlayed.indexOf(",")
    this.matches.push(this.teamsPlayed.substring(0, index))
    this.matches.push(this.teamsPlayed.substring(index + 1))  
  },
  computed: {
    // get the names of the members of the selected team
    getSelectedTeamMembers: function() {
      const members = {}
      members.player1 = this.selectedTeam.player1
      members.player2 = this.selectedTeam.player2
      // push selected team into currentMatcup array
      return `${members.player1} & ${members.player2}`
    }
  },
  methods: {
    onSubmit: function() {
      // set the results strings to include the format of 
      this.matchResultsTeamId1 = this.matchResultsTeamId1.concat("," + this.pegsGame1)
      this.matchResultsTeamId2 = this.matchResultsTeamId2.concat("," + this.pegsGame2)
      this.matchResultsTeamId3 = this.matchResultsTeamId3.concat("," + this.pegsGame3)
      this.results.push(this.matchResultsTeamId1, this.matchResultsTeamId2, this.matchResultsTeamId3)    
      this.schedule.child.push({
        team1: this.selectedTeam._id,
        team2: this.matchTeamMembers[0]._id,
        results: this.results
      })
      this.$emit("createOrUpdate", this.schedule)
    },
   // get selected match players
    getMatchPlayers: async function(activeTeam) {
      const getMatchCriteria = {}
      getMatchCriteria.league = this.selectedTeam.league
      getMatchCriteria.team = activeTeam
      this.matchTeamMembers = await api.getMatchPlayerDetails(getMatchCriteria)
      this.currentMatchPlayers = `${this.matchTeamMembers[0].player1} & ${this.matchTeamMembers[0].player2}`
      // insert both teams into currentMatchSelectWinners if the array contains
      // values empty it first.
      if(this.currentMatchSelectWinners.length === 0 ) {
      this.currentMatchSelectWinners.push(this.getSelectedTeamMembers)
      this.currentMatchSelectWinners.push(this.currentMatchPlayers)
      } else if (this.currentMatchSelectWinners.length > 0 ) {
        this.currentMatchSelectWinners.pop()
        this.currentMatchSelectWinners.pop()
        this.currentMatchSelectWinners.push(this.getSelectedTeamMembers)
        this.currentMatchSelectWinners.push(this.currentMatchPlayers)
      }
    },
    // Matches
    setMatchOneWinner(winner) {
      this.matchOneWinner = winner
      if(this.matchOneWinner === this.getSelectedTeamMembers) {
        this.matchResultsTeamId1 = this.selectedTeam._id
      } else if (this.matchOneWinner !== this.getSelectedTeamMembers ) {
        this.matchResultsTeamId1  = this.matchTeamMembers[0]._id
      }
   },
     setMatchTwoWinner(winner) {
       this.matchTwoWinner = winner
      if(this.matchTwoWinner === this.getSelectedTeamMembers) {
        this.matchResultsTeamId2 = this.selectedTeam._id
      } else if (this.matchTwoWinner !== this.getSelectedTeamMembers ) {
        this.matchResultsTeamId2  = this.matchTeamMembers[0]._id
      }
    },
      setMatchThreeWinner(winner) {
      this.matchThreeWinner = winner
       if(this.matchThreeWinner === this.getSelectedTeamMembers) {
        this.matchResultsTeamId3 = this.selectedTeam._id
      } else if (this.matchThreeWinner !== this.getSelectedTeamMembers ) {
        this.matchResultsTeamId3  = this.matchTeamMembers[0]._id
      }
    },
    // Used by sui-member-tabular
    isActive(name) {
      return this.active === name
    },
    select(name) {
      this.active = name
    },
    isActiveMatch1(name) {
      return this.activeMatch1 === name
    },
    selectMatch1(name) {
      this.activeMatch1 = name
    },
      isActiveMatch2(name) {
      return this.activeMatch2 === name
    },
    selectMatch2(name) {
      this.activeMatch2 = name
    },
       isActiveMatch3(name) {
      return this.activeMatch3 === name
    },
    selectMatch3(name) {
      this.activeMatch3 = name
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>