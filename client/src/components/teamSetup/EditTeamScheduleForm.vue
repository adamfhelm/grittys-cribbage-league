<template>
<div class="ui text container">
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>

    <div v-for="(schedule, i) in team.schedule" :key="i" class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar outline icon"></i>Week{{i+1}}
      </div>
      <input type="text" placeholder="FORMAT: team,team,LEAGUE" v-model="team.schedule[i]" />
    </div>

    
     <div class="ui one column grid">
    <button class="green ui button">Submit</button>
     </div>
  </form>
</div>
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
          schedule: []
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
        this.errorsPresent = true;
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
div.ui.labeled.input.fluid {
     border: none;
      }
</style>