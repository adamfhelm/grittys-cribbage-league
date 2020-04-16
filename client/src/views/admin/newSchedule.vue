  
<template>
  <div class="ui text container">
    <h1>New Schedule</h1>
    <schedule-form @createOrUpdate="createOrUpdate"></schedule-form>
  </div>
</template>

<script>
import ScheduleForm from "../../components/admin/ScheduleForm.vue";
import { api } from "@/services/scheduleService";
export default {
  name: "new-schedule",
  components: {
    "schedule-form": ScheduleForm
  },
  methods: {
   
   createOrUpdate: async function(weeksArr, firstDate, startDate, days) {
    

      const newSchedule = {
        weeksArr: weeksArr,
        firstDate: firstDate,
        startDate: startDate,
        days: days
      }
     
     const res =  await api.createSchedule(newSchedule)
      this.flash('Schedule created with ' + res.week.weekId + ' total weeks', 'success')
      this.$router.push(`/acl-schedule`)
    }
  }
};
</script>


