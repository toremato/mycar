<template>
  <div id="app" class="bg-gitGray-900">
    <div class="h-14 bg-gitGray-800"></div>
    <router-view class="w-100 h-100 flex content-center justify-center" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
