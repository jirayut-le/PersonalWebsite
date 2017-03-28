<template lang="html">
  <section class="hero is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero is-dark">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <router-link to="/" v-on:click="swapComponent('')"class="title is-5">{{ fullname }}</router-link>
            </a>
          </div>
          <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
          </span>
          <div class="nav-right nav-menu">
            <span class="nav-item" v-for="download in downloads" >
                <a class="button is-dark is-inverted" v-on:click="downloadPopup(download.data)">
                  <span>{{ download.data }}</span>
                </a>
            </span>
            <a class="nav-item">TH/EN</a>
          </div>
        </div>
      </header>
    </div>
    <div class="cover">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Hello</h1>
          <h2 class="subtitle">I'm {{ fullname }}</h2>
        </div>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    </div>
      <nav class="nav">
        <div class="container">
          <div class="nav-center">
            <router-link :to= "component" class="nav-item is-tab" :class="{ 'is-active' : isActive(component) }" v-for="component in componentsNavBarArray" :key="component">
              <ul><li class="nav-component" v-on:click="swapComponent(component)" >{{ component }}</li></ul>
            </router-link>
          </div>
        </div>
      </nav>
     <!-- <div :is="currentComponent"></div> -->
  
  </section>
</template>

<script>
  export default {
    data () {
      return {
        currentComponent: '',
        componentsNavBarArray: ['Profile', 'Education', 'Skills', 'Experience', 'Contact Me'],
        fullname: 'Jirayut Leeupathumvong',
        downloads: [
          { data: 'Download Resume' },
          { data: 'Download Portfolio' }
        ],
        swapComponent: function (component) {
          this.currentComponent = component
        },
        downloadPopup: function (text) {
          alert(text)
        },
        isActive: function (component) {
          return this.currentComponent === component
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  li {
    align-items: stretch;
  }
  
  a {
    color: #42b983;
  }
  
  .nav-item.is-tab {
    padding: 0px;
  }
  
  .nav-item.is-tab.is-active {
    padding-bottom: 0px;
    font-weight: bold;
  }

  .nav-component {
    padding-top: 13px;
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 13px;
  }
  
  .cover {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70% 20%;
    position: relative;
    background-color: $c-dark;
    background-image: url(../assets/MyCover.jpg);
  }
  
  .tabs {
    padding: 10px;
  }
</style>
