<template>
    <div>
     <Header /> 
    <table id="standings" class="ui celled table center aligned">
    <!-- <thead>
      
      <tr>
       <th></th>
       <th></th>
        <th>13-Jan</th>
        <th>20-Jan</th>
        <th>27-Jan</th>
        <th>03-Feb</th>
        <th>10-Feb</th>
        <th>17-Feb</th>
        <th>24-Feb</th>
        <th>02-Mar</th>
        <th>09-Mar</th>
        <th>16-Mar</th>
      </tr>
    </thead> -->
    <!-- <tbody>
      <tr v-for="(result, i) in results" :key="i">
        <td>{{i+1}}</td>
        <td>{{ result.player1 }}</td>
        <td>{{ result.player2 }}</td>
        <td>{{ result.pts }}</td>
        <td>{{ result.wins }}</td>
        <td>{{ result.pegs }}</td>
      </tr>
    </tbody> -->
  </table>
    </div>
</template>
<script>
import Header from '../../components/Header.vue'
export default {
    name: "aclSchedule",
    components: {
    Header
   }
}
</script>
<style scoped>
</style>