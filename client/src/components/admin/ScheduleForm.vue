<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Start Date
      </div>
      <input type="text" placeholder="Start Date" v-model="schedule.startDate" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user outline icon"></i>Total Weeks
      </div>
      <input type="number" placeholder="Number Of Weeks" v-model="schedule.totalWeeks" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "schedule-form",
  props: {
    schedule: {
      type: Object,
      required: false,
      default: () => {
        return {
          totalWeeks: 0,
          startDate: null
        }
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    }
  },
  methods: {
    onSubmit: function() {
      const firstDate = new Date(this.schedule.startDate)
      const startDate = new Date(this.schedule.startDate)
      const days = 7
      if (this.schedule.totalWeeks === "") {
        this.errorsPresent = true
      } else {
          let weeksArr = []
        for(let i=1; i<=this.schedule.totalWeeks; i++) {
            weeksArr.push(i)
        }
           this.$emit('createOrUpdate', weeksArr, firstDate, startDate, days)
      }
    }
  }
 }
</script>

<style scoped>
.error {
  color: red
}
div.ui.labeled.input.fluid {
     border: none;
     margin-bottom: 2em;
      }
div.ui.label {
 
  text-align: center;
}

</style>