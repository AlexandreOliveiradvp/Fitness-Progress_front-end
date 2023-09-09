<template>
  <div class="side-bar" :class="{ 'collapse-sidebar': sideBarCollapse }">
    <div class="action" @click="sideBarCollapse = !sideBarCollapse">
      <Icon icon="ic:round-play-arrow" :rotate="2" class="icon-collapse" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";

const sideBarCollapse = ref(false);

defineComponent({
  name: "SideBar",
});
</script>
<style lang="scss">
.side-bar {
  width: 165px;
  height: calc(100vh - 64px);
  background-color: var(--lilac-bg-side-bar);
  background-image: linear-gradient(
    0deg,
    var(--lilac-base) 5%,
    var(--lilac-bg-side-bar) 50%
  );
  transition-duration: 300ms;
  .action {
    position: relative;
    top: 48%;
    left: 150px;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: var(--lilac-base);
    text-align: center;
    padding-top: 3px;
    cursor: pointer;
    &:hover {
      background-color: var(--lilac-base-hover);
    }
    .icon-collapse {
      color: #ffffff;
      font-size: 1.2rem;
      transition-duration: 300ms;
    }
  }
}
.collapse-sidebar {
  margin-left: -170px;
  .action {
    left: 162px;
    .icon-collapse {
      rotate: 180deg;
      margin-left: 5px;
    }
  }
}
</style>
