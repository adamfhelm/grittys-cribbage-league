<template>
 <div class="ui text container">
    <h1>Add Team Schedule {{team.player1}} & {{team.player2}}</h1> 
    <team-form @createOrUpdate="createOrUpdate" :team="team" :numWeeks="numWeeks"></team-form>
 </div>  
</template>
<script>
import TeamScheduleForm from "../../components/teamSetup/TeamScheduleForm.vue";
import { api } from "@/services/teamsService";
export default {
  name: "addTeamSchedule",
  components: { "team-form": TeamScheduleForm },
  data: function() {
    return { 
        team: {},
        numWeeks: []
     };
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
    this.numWeeks = await api.getAllDates();
  }
};
</script>
