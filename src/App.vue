<template>
  <div id="app" class="h-full w-screen" :class="[darkMode ? 'dark bg-dark' : '']">
    <div id="nav">
      <DarkToggle/>
      <!-- <router-link to="/" class="float-right">Home</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import DarkToggle from "./components/DarkToggle.vue"
import {mapState} from 'vuex'
export default {
  components: {
    DarkToggle
  },

  computed: {
    ...mapState(['darkMode'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* font-family: 'Vollkorn', serif; */
  font-weight: 700;
  /* background: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
