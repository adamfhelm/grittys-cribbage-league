<template>
    <div>
    
    <div class="ui one column grid">
  <div class="row center aligned">
    
      <h2 class="margin-teams">Teams</h2>
      <div>
        <router-link :to="{ name: 'newTeam', params: { id: this.$route.params.id }}">
       <button class="ui green button">Add Team</button>
        </router-link>
      </div>
   
  </div>
</div>

    <table id="teams" class="ui celled compact table">
      <thead>
        <tr>
          <th>Team Number</th>
          <th>Player1</th>
          <th>Player2</th>
          <th>League</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(team, i) in teams" :key="i">
        <td>{{ team.teamNumber }}</td>
        <td>{{ team.player1 }}</td>
        <td>{{ team.player2 }}</td>
        <td>{{ team.league }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'showTeam', params: { id: team._id }}">Show</router-link>
        </td>
        <!-- <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: word._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
          <a :href="`/words/${word._id}`">Destroy</a>
        </td> -->
      </tr>
    </table>
  </div>
</template>
<script>
import { api } from "../../helpers/helpers"
export default {
    data() {
        return {
            teams: []
        }
    },
    async mounted() {
        this.teams = await api.getTeams()
     }
    // methods: {
    //   addTeam: function(name) {
    //     name = "/roster/new-team"
    //     this.$router.push(name) 
    //   }
    // }
}
</script>
<style scoped>
.margin-teams {
  padding-right: 1.75em;
  padding-top: .6em;
  padding-left: .5em; 
}
</style>