<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <HelloVueX/>
    <HelloModule />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloVueX from "./components/HelloVueX"
import HelloModule from "./components/HelloModule"

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloVueX,
    HelloModule
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
