<template>
    <div>
    <h1 class="ui header center aligned">ACL</h1>
    <h4 class="ui header center aligned schedule"><em>CRIBBAGE SCHEDULE</em></h4>
     <!-- <sui-input v-model="totalWeeks" placeholder="Search..." focus />
      <sui-button @click="numberOfWeeks" color="green" content="Total Weeks" /> -->
         <table id="standings" class="ui celled table center aligned">
     
      <thead>
        <tr>
        <th></th>
        <th>TEAMS</th>
        <!-- <tr v-for="(number, i) in newArr" :key="i"> -->
         <th v-for="(number, i) in totalWeeks" :key="i">WK{{i+1}}</th>
        </tr>
      <tr>
       <td></td>
       <td></td>
        <td v-for="(number, i) in totalWeeks" :key="i">{{ number.gameDate.substring(0,10) }}</td>
        <!-- <td>20-Jan</td>
        <td>27-Jan</td>
        <td>03-Feb</td>
        <td>10-Feb</td>
        <td>17-Feb</td>
        <td>24-Feb</td>
        <td>02-Mar</td>
        <td>09-Mar</td>
        <td>16-Mar</td> -->
      </tr>
    </thead>
         </table>
    </div>
</template>
<script>
import { api } from '../helpers/helpers.js'
 export default {
     name: "schedule-header",
   data() {
    return { 
      totalWeeks: [],
      allDates: []
    };
  },
 async mounted() {
    this.totalWeeks = await api.getTotalWeeks()
    this.allDates = await api.getAllDates()
    
  }
 }
</script>
<style scoped>
h4.schedule {
    color:brown;
}
</style>