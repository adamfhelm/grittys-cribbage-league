<template>
  <table id="standings" class="ui celled table center aligned">
    <thead>
      <tr>
        <th>Place</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Team Number</th>
        <th>Points</th>
        <th>Wins</th>
        <th>Pegs</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result, i) in results" :key="i">
        <td>{{i+1}}</td>
        <td>{{ result.player1 }}</td>
        <td>{{ result.player2 }}</td>
        <td>{{ result.teamNumber }}</td>
        <td>{{ result.pts }}</td>
        <td>{{ result.wins }}</td>
        <td>{{ result.pegs }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["results"]
};
</script>