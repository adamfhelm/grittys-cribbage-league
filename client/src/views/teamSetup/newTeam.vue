  
<template>
  <div>
    <h1>New Team</h1>
    <team-form @createOrUpdate="createOrUpdate"></team-form>
  </div>
</template>

<script>
import TeamForm from '../../components/teamSetup/TeamForm.vue';
import { api } from '../../helpers/helpers';
export default {
  name: 'new-team',
  components: {
    'team-form': TeamForm
  },
  methods: {
    createOrUpdate: async function(team) {
      const res = await api.createTeam(team);
      console.log(res.team._id)
      this.$router.push(`/roster/${res.team._id}`);
      this.flash('Team created', 'success');
    }
  }
};
</script>