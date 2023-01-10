<template>
 <router-view/>
</template>

<script>
  export default {
   data(){
      return {
      }
   },
   methods: {
   },
  }
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #05203b;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #979797;
  }

  nav a.router-link-exact-active {
    color: #000000;
  }

  .navbar {
    transform: translate3d(30, 30, 30);
    transition: 0.5s all ease-out;
  }

  .navbar.hidden-navbar {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: 0.1s all ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .navstyle {
    z-index: 3;
  }
</style>
