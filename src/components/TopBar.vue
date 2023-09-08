<template>
  <v-app-bar :elevation="2" class="top-bar">
    <div class="h-100 w-50 py-4 px-8"><h3>FP System</h3></div>
    <div class="h-100 w-50 py-2 px-8">
      <div class="circle float-right">
        <Icon icon="mingcute:user-2-fill" class="user-icon" />
      </div>
    </div>
  </v-app-bar>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
defineComponent({
  name: "TopBar",
});
</script>
<style lang="scss">
.top-bar {
  h3 {
    color: var(--gren-base);
  }
  .circle {
    width: 45px;
    height: 45px;
    border: 2px solid var(--gren-base);
    border-radius: 45px;
    text-align: center;
    padding-top: 4px;
    cursor: pointer;
    .user-icon {
      color: var(--gren-base);
      font-size: 2rem;
    }
  }
}
</style>
