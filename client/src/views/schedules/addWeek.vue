<template>
  <div>
    <week-form @createOrUpdate="createOrUpdate"></week-form>
  </div>
</template>
<script>
import WeekForm from '../../components/gamePlay/WeekForm.vue'
import { api } from '@/services/scheduleService'
export default {
  name: 'addWeek',
  components: {
    'week-form': WeekForm
  },
  methods: {
    createOrUpdate: async function(week) {
        const res = await api.updateWeek(week)
        this.$router.push(`/schedule`)
        this.flash("Match successfully added", "success");
        return res[0]._id
    }
  }
}
</script>