<template>
  <form action="#" @submit.prevent="onSubmit">
    <div v-for="(week, i) in numWeeks" :key="i" class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar outline icon"></i>
        Week{{i+1}}
      </div>
      <input type="text" placeholder="Enter Opponent" v-model="team.schedule[i]" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "team-form",
  props: ["numWeeks", "team"],
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (
        this.team.player1 === "" ||
        this.team.player2 === "" ||
        this.team.pts === "" ||
        this.team.wins === "" ||
        this.team.pegs === "" ||
        this.team.league === ""
      ) {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.team)
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