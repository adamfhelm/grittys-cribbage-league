<template>
  <div class="ui text container">
    <h1 class="ui center aligned header">Standings</h1>
    <div id="standings">
      <h1>ACL / <a id="ncl-link"  href="#ncl">NCL</a></h1>
      <acl-table :results="resultsACL" />
      <h1 id="ncl">NCL</h1>
      <ncl-table :results="resultsNCL"/>
    </div>
  </div>
</template>
<script>
import Standings from "@/components/Standings.vue";
import { api } from "@/services/standingsService.js";
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
<style scoped>
  #ncl-link {
    text-decoration: underline;
    color: turquoise;
  }
  #ncl-link:hover {
    color: #F40A4C;
  }
</style>