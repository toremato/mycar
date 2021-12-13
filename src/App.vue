<template>
  <div id="app" class="bg-gitGray-900">
    <div class="h-14 bg-gitGray-800"></div>
    <router-view class="w-100 h-100 flex content-center justify-center" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { onMounted } from "vue";

const store = useStore();
onMounted(() => {
  store.dispatch("getMarks");
});
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  font-size: 14px;
}
</style>
