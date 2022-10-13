<template>
  <nav 
    :style="[!showNavbar ? {'opacity': '.1'} : {'opacity': '1'}]" 
    :class="{ 'hidden-navbar': !showNavbar }" 
    class="navbar navbar-light bg-white fixed-bottom mx-2 shadow-lg py-3 rounded-pill my-2 border" 
    style="z-index: 3;">
     <transition name="fade">
      <div v-if="showNavbar" 
       class="px-5 d-flex flex-row mx-auto">
          <a class="navbar-brand">
            <div class="rounded" >
                <img @click.prevent="aquariusLogoIsClicked = !aquariusLogoIsClicked" 
                src="./assets/Aquariuslogo.png" 
                width="60" 
                height="60" 
                class="d-inline-block align-top img-fluid rounded pl-5 px-2" 
                alt="aquariuslogo">
                3000
            </div>
          </a>
        </div>
     </transition>
    <h4 v-if="aquariusLogoIsClicked" 
        class="p-0 mx-auto border-bottom rounded-pill">
        Caffe bar "Aquarius 3000"
    </h4>
    <div v-else class="display-4 mx-auto">
      <router-link to="/">Home</router-link> 
      |
      <router-link to="/menu">Menu</router-link>
    </div>
  </nav>
 <router-view/>
</template>

<script>
  export default {
    data(){
      return {
        aquariusLogoIsClicked: false,
        showNavbar: true,
        lastScrollPosition: 0,
        scrollValue: 0,
      }
    },
    mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
    methods: {
      onScroll () {
        let offsetTop = pageYOffset
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < offsetTop) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
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
</style>
