<template>
 <form @submit="onSubmit">
  <!--   <p v-if="errorsPresent" class="error">Please fill out all fields!</p> -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Week Number
      </div>
      <input type="number" placeholder="Enter Team1..." v-model="schedule.weekId" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Team1
      </div>
      <input type="text" placeholder="Enter Team1..." v-model="team1" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Team2
      </div>
      <input type="text" placeholder="Enter Team2..." v-model="team2" />
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Results Game1
      </div>
      <input type="text" placeholder="Results Match1..." v-model="results[0]" />
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Results Game2
      </div>
      <input type="text" placeholder="Results Match1..." v-model="results[1]" />
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label points-padding">
        <i class="thermometer quarter icon"></i> Results Game3
      </div>
      <input type="text" placeholder="Results Match1..." v-model="results[2]" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
   data() {
    return { 
      team1: null,
      team2: null,
      results: []
    }
  },
    props: {
    schedule: {
      type: Object,
      required: false,
      default: () => {
        return {
          weekId: null,
          child: [], 
        };
      }
    }
  },
  methods: {
    onSubmit: function() {
        this.schedule.child
        .push({
        team1: this.team1
        ,team2: this.team2
        ,results: this.results  
        }
        )
        this.$emit('createOrUpdate', this.schedule);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>