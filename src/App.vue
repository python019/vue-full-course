<template>
  <div>
    <Navbar />
  </div>
  
  <router-view/>

  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default ({
  data() {
    return {
      namoyish: true
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    knopka() {
      this.namoyish = !this.namoyish
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dizayn {
  color: crimson;
}

</style>
