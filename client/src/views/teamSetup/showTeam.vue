<template>
  <div class="ui text container">
    <h1>Team</h1>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Player1
      </div>
      <input type="text" readonly :value="team.player1" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Player2
      </div>
      <input type="text" readonly :value="team.player2" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Team Number
      </div>
      <input type="text" readonly :value="team.teamNumber" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>League
      </div>
      <input type="text" readonly :value="team.league" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Points
      </div>
      <input type="text" readonly :value="team.pts" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label wins-padding">
        <i class="quidditch icon"></i> Wins
      </div>
      <input type="text" readonly :value="team.wins" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label pegs-padding">
        <i class="thumbtack icon offset-2"></i> Pegs
      </div>
      <input type="text" readonly :value="team.pegs" />
    </div>
    <div class="ui one column grid">
      <div class="actions">
        <router-link :to="{ name: 'editTeam', params: { id: this.$route.params.id }}">Edit Team</router-link>
      </div>
      <router-link :to="{name: 'roster'}">
        <button class="ui red button" @click="onDestroy(team._id)">Delete Team</button>
      </router-link>

      <router-link :to="{name: 'addTeamSchedule', params: {id: this.$route.params.id}}">
        <button class="ui green button">Add Schedule</button>
      </router-link>
    </div>
  </div>
</template>
<script>

import { api } from "@/services/teamsService";
export default {
  name: "show",
  data() {
    return { team: "" };
  },
  async mounted() {
    this.team = await api.getTeam(this.$route.params.id);
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;

      await api.deleteTeam(id);
      this.flash("Team deleted sucessfully!", "success");
      const newTeams = this.teams.filter(team => team._id !== id);
      this.team = newTeams;
    }
  }
};
</script>
<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
.ui.label.points-padding {
  padding: 0px 1.3em 0px;
}
.ui.label.wins-padding {
  padding: 0px 1.19em 0px;
}
.ui.label.pegs-padding {
  padding: 0px 1.55em 0px;
}
div.ui.labeled.input.fluid {
     border: none;
      }
</style>