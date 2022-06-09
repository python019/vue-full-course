<template>
  <div v-if="namoyish">
    <Navbar sarlavha="Ilk sarlavha" />
  </div>
  
  <button @click.right="knopka">Ko'rsatish</button>
  <button @click.middle="knopka">middle</button>

  <h1 class="dizayn">{{ kalit }}</h1>
  <router-view/>

  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default ({
  data() {
    return {
      kalit: 'Bu yerda malumot bor',
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
