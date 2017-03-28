<template>
  <div id="app">
    <Home></Home>
    <transition name="component-fade" mode="out-in">
       <router-view class="section"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from './pages/Home'
import Footer from './components/Footer'
export default {
  components: {
    'Home': Home,
    'Footer': Footer
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px; */
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: all .4s ease;
}
.component-fade-enter, .component-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
