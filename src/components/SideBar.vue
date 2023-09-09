<template>
  <div class="side-bar"></div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "SideBar",
});
</script>
<style lang="scss">
.side-bar {
  width: 165px;
  height: calc(100vh - 64px);
  background-color: var(--green-bg-side-bar);
}
</style>
