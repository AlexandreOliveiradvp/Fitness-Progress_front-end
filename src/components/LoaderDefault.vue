<template>
  <div class="w-100">
    <div class="loader"></div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "LoaderDefault",
});
</script>
<style lang="scss">
.loader {
  margin: 0 auto;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #b3c8da;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
