<template>
  <div  class="ui text container">
    <h1>Edit {{team.player1}} & {{team.player2}}'s Schedule</h1>
    <team-form @createOrUpdate="createOrUpdate" :team="this.team"></team-form>
  </div>
</template><script>
import TeamScheduleForm from "../../components/teamSetup/EditTeamScheduleForm.vue";
import { api } from "@/services/teamsService";
export default {
  name: "editTeamSchedule",
  components: { "team-form": TeamScheduleForm },
  data: function() {
    return { team: {}};
  },
  methods: {
     createOrUpdate: async function(team) {    
         await api.updateTeam(team);    
         this.flash('Team updated sucessfully!', 'success');    
         this.$router.push(`/roster/${team._id}`);  
         } 
  },
  async mounted() {
    this.team = await api.getTeam(this.$route.params.id);
  }
};
</script>