  
<template>
  <div>
    <h1>New Schedule</h1>
    <schedule-form @createOrUpdate="createOrUpdate"></schedule-form>
  </div>
</template>

<script>
import ScheduleForm from "../../components/admin/ScheduleForm.vue";
import { api } from "../../helpers/helpers";
export default {
  name: "new-team",
  components: {
    "schedule-form": ScheduleForm
  },
  methods: {
    createOrUpdate:  function(weeksArr, firstDate, startDate, days) {
      
      const arrLength = weeksArr.length
      for (var i = 1; i <= arrLength; i++) {
         let schedule = {}
        if (i == 1) {
          schedule.weekId = 1;
          schedule.gameDate = firstDate;
        }
        if (i > 1) {
          //console.log("condition greater week 1", week, startDate, days);
          schedule.gameDate = startDate.setDate(startDate.getDate() + days);
          schedule.weekId = i; 
        }
          const res =  api.createSchedule(schedule);   
          console.log(res)
          //this.$router.push(`/acl-schedule/${res.schedule._id}`);
      }
      
      // weeksArr.forEach(async week => {
      //   let schedule = {}
      //   if (week === 1) {
      //     schedule.weekId = 1;
      //     schedule.gameDate = firstDate;
      //   }
      //   if (week > 1) {
      //     //console.log("condition greater week 1", week, startDate, days);
      //     schedule.gameDate = startDate.setDate(startDate.getDate() + days);
      //     schedule.weekId = week; 
      //   }
      //     const res = await api.createSchedule(schedule);   
      //     this.$router.push(`/acl-schedule/${res.schedule._id}`);
      // });
    }
  }
};
</script>