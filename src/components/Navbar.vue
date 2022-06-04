<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Asosiy</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
nav a.router-link-exact-active {
  color: #42b983;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
