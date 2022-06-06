<template>
  <Navbar />
  

  <h1 class="dizayn">{{ kalit }}</h1>
  <router-view/>
  <h1>HomeView App</h1>

  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default ({
  data() {
    return {
      kalit: 'Bu yerda malumot bor'
    }
  },
  components: {
    Navbar,
    Footer
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
