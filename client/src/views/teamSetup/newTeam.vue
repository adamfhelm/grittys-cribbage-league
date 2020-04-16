  
<template>
  <div class="ui text container">
    <h1>New Team</h1>
    <new-team-form @createOrUpdate="createOrUpdate"></new-team-form>
  </div>
</template>

<script>
import NewTeamForm from '../../components/teamSetup/NewTeamForm.vue';
import { api } from "@/services/teamsService";
export default {
  name: 'new-team',
  components: {
    'new-team-form': NewTeamForm
  },
  methods: {
    createOrUpdate: async function(team) {
      const res = await api.createTeam(team);
      this.$router.push(`/roster/${res.team._id}`);
      this.flash('Team created', 'success');
    }
  }
};
</script>
