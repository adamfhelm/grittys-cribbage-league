<template>
  <div>
    <h1>New Team</h1>
    <week-form @createOrUpdate="createOrUpdate" ></week-form>
  </div>
</template>

<script>
import WeekForm from '../../components/scheduleSetup/WeekForm.vue';
import { api } from '../../helpers/helpers';
export default {
  name: 'new-week',
  components: {
    'week-form': WeekForm
  },
  methods: {
    createOrUpdate: async function(week) {
      const res = await api.updateWeek(week);
      console.log(res.week._id)
      //this.$router.push(`/schedule/ncl/${res.week._id}`);
      //this.flash('Week created', 'success');
    }
  }
};
</script>