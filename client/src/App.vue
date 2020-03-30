<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">      
         <router-link to="/standings" exact class="item">
            <i class="sort numeric down icon"></i> Standings
          </router-link>
         <router-link to="/roster" exact class="item">
            <i class="users icon"></i> Teams
          </router-link>
       <router-link to="/schedule" exact class="item">
            <i class="calendar icon"></i> Schedule
          </router-link>
        <!-- <sui-dropdown-item><router-link :to="{name: 'nclSchedule'}" class="dropdown">NCL</router-link></sui-dropdown-item> -->
    <sui-dropdown text="Admin" button pointing>
      <sui-dropdown-menu>
        <sui-dropdown-item>
          <router-link 
          :to="{name: 'scheduleSetup'}" class="dropdown">
          Schedule Setup
          </router-link>
        </sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
        </div>
      </div>
    </div>
    <div class="ui text container">
       <flash-message class="myFlash"></flash-message>
        <router-view />
      </div>
    
  </div>
</template>
<script>
export default { 
  name: "app", 
  };
</script>
<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
a.dropdown {
  color: black !important;
}
</style>