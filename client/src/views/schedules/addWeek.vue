<template>
  <div>
    <week-form @createOrUpdate="createOrUpdate"></week-form>
  </div>
</template>
<script>
import WeekForm from '../../components/gamePlay/WeekForm.vue'
import { api } from '../../helpers/helpers'
export default {
  name: 'addWeek',
  props: ['selectedTeam', "week", "match"],
  components: {
    'week-form': WeekForm
  },
  methods: {
    createOrUpdate: async function(week) {
      const res = await api.updateWeek(week)
      return res[0]._id
    }
  }
}
</script>