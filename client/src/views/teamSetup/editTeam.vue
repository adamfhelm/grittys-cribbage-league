<template>
  <div class="ui text container">
    <h1>Edit Team</h1>
    <edit-team-form @createOrUpdate="createOrUpdate" :team="this.team"></edit-team-form>
  </div>
</template><script>
import EditTeamForm from "../../components/teamSetup/EditTeamForm.vue";
import { api } from "@/services/teamsService"
export default {
  name: "edit",
  components: { "edit-team-form": EditTeamForm },
  data: function() {
    return { team: {} };
  },
  methods: {
    createOrUpdate: async function(team) {
      await api.updateTeam(team);
      this.flash("Team updated sucessfully!", "success");
      this.$router.push(`/roster/${team._id}`);
    }
  },
  async mounted() {
    this.team = await api.getTeam(this.$route.params.id);
  }
};
</script>