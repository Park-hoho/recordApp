<template>
  <div id="app">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile'; // import 부분에 괄호 쓰면 안됨

export default {
  name: 'App',
  components: { // components 오타주의
    UserProfile
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
