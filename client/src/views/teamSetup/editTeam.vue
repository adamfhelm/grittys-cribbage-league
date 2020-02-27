<template>
  <div>
    <h1>Edit Team</h1>
    <team-form @createOrUpdate="createOrUpdate" :team="this.team"></team-form>
  </div>
</template><script>
import TeamForm from "../../components/teamSetup/TeamForm.vue";
import { api } from "../../helpers/helpers";
export default {
  name: "edit",
  components: { "team-form": TeamForm },
  data: function() {
    return { team: {} };
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