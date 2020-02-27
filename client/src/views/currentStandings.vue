<template>
  <div>
    <h1 class="ui center aligned header">Standings</h1>
    <div id="standings">
      <h1>ACL</h1>
      <acl-table :results="resultsACL" />
      <h1>NCL</h1>
      <ncl-table :results="resultsNCL" />
    </div>
  </div>
</template>
<script>
import Standings from "@/components/Standings.vue";
import { api } from "../helpers/helpers";
export default {
  name: "standings",
  components: {
    "acl-table": Standings,
    "ncl-table": Standings
  },
  data() {
    return {
      resultsACL: [],
      resultsNCL: []
    };
  },
  async mounted() {
    this.resultsACL = await api.getStandings("ACL");
    this.resultsNCL = await api.getStandings("NCL");
  }
};
</script>