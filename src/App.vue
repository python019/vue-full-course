<template>
  <nav>
    <router-link to="/">Asosiy</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <h1 class="dizayn">{{ kalit }}</h1>
  <router-view/>
</template>

<script>


export default ({
  data() {
    return {
      kalit: 'Bu yerda malumot bor'
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.dizayn {
  color: crimson;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
