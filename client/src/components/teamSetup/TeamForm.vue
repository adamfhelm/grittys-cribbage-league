<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Player1
      </div>
      <input type="text" placeholder="Enter player1 name..." v-model="team.player1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Player2
      </div>
      <input type="text" placeholder="Enter player2 name..." v-model="team.player2" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Team Number
      </div>
      <input type="text" placeholder="Enter Team Number" v-model="team.teamNumber" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> League
      </div>
      <input type="text" placeholder="Enter Team League" v-model="team.league" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Points
      </div>
      <input type="number" placeholder="Enter Team Points" v-model="team.pts" />
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label wins-padding">
        <i class="quidditch icon"></i> Wins
      </div>
      <input type="number" placeholder="Enter Team Wins" v-model="team.wins" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label pegs-padding">
        <i class="thumbtack icon offset-2"></i> Pegs
      </div>
      <input type="number" placeholder="Enter Team Pegs" v-model="team.pegs" />
    </div>
     <div class="ui one column grid">
    <button class="green ui button">Submit</button>
    <router-link :to="{ name: 'editTeamSchedule', params: { id: this.$route.params.id }}">
    <button class="yellow ui button">Edit Schedule</button>
    </router-link>
     </div>
  </form>
</template>

<script>
export default {
  name: 'team-form',
  props: {
    team: {
      type: Object,
      required: false,
      default: () => {
        return {
          player1: '',
          player2: '',
          pts: 0,
          wins: 0,
          pegs: 0
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.team.player1 === '' 
        || this.team.player2 === '' 
        || this.team.pts === '' 
        || this.team.wins === '' 
        || this.team.pegs === ''
        || this.team.league === '') 
        {
        this.errorsPresent = true
      } else {
        this.$emit('createOrUpdate', this.team)
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>