<template>
  <div class="auth-layout">
    <router-view/>
  </div>
</template>

<script>
import { isProduction } from '@/composables/environ.js'
export default {
  name: 'App',
  beforeCreate() {
    const token = localStorage.getItem('auth-token')
    if(token) {
      // redirect to home page
      window.location = isProduction() ? window.location.origin : 'http://localhost:8080'
    }
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
