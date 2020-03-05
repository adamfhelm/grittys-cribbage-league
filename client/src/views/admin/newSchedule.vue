  
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
    createOrUpdate: function(weeksArr, firstDate, startDate, days) {
    
      
      
      
      weeksArr.forEach(async week => {
     
        
        let schedule = {}
        if (week === 1) {
          schedule.weekId = 1;
          schedule.gameDate = firstDate;
        }
        if (week > 1) {
          //console.log("condition greater week 1", week, startDate, days);
          schedule.gameDate = startDate.setDate(startDate.getDate() + days);
          schedule.weekId = week; 
        }
          const res = await api.createSchedule(schedule)   
          .then(this.$router.push(`/acl-schedule/${res.schedule._id}`));
        

          
        // console.log(schedule.weekId);

        //this.flash("Schedule weeks added", "success");
      });

      // async function fireFirst() {
      //   let schedule = {};
      //   schedule.weekId = 1;
      //   schedule.gameDate = firstDate;
      //   const res = await api.createSchedule(schedule);
      //   this.$router.push(`/schedule/${res.schedule._id}`);
      // }
      // fireFirst();
      // fireNext();
    }
  }
};
</script>