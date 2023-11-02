<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Create New Profile</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import 
url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);

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
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.container{
  width: 60%;
}

@media screen and ((max-width: 1000px)) {
    .container{
      width: 95%;
    }
} 
</style>
